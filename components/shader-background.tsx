"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const VERTEX_SHADER_SOURCE = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// Dark base + faint grid + mouse-following blue glow + a slow horizontal
// scanning ripple, matching the reference "engineering terminal" shader.
const FRAGMENT_SHADER_SOURCE = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec3 color = vec3(0.035, 0.035, 0.045);

  vec2 grid = fract(gl_FragCoord.xy / 40.0);
  float gridLine = step(0.975, grid.x) + step(0.975, grid.y);
  color += gridLine * 0.025;

  vec2 mouseUv = u_mouse / u_resolution.xy;
  float dist = distance(uv, mouseUv);
  float glow = smoothstep(0.4, 0.0, dist);
  color += glow * vec3(0.1, 0.2, 0.5);

  float ripple = sin(uv.x * 12.0 - u_time * 0.4) * 0.01;
  color += ripple;

  gl_FragColor = vec4(color, 1.0);
}
`;

function compileShader(
  gl: WebGLRenderingContext,
  source: string,
  type: number
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

/**
 * Full-viewport fixed WebGL background: dark base, faint grid, a soft
 * mouse-following glow, and a slow scanning ripple. Renders nothing when
 * WebGL is unavailable or the viewer prefers reduced motion.
 */
export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      setSupported(false);
      return;
    }

    const vertexShader = compileShader(
      gl,
      VERTEX_SHADER_SOURCE,
      gl.VERTEX_SHADER
    );
    const fragmentShader = compileShader(
      gl,
      FRAGMENT_SHADER_SOURCE,
      gl.FRAGMENT_SHADER
    );
    if (!vertexShader || !fragmentShader) {
      setSupported(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setSupported(false);
      return;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setSupported(false);
      return;
    }
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const mouseLocation = gl.getUniformLocation(program, "u_mouse");

    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = rect.height - (event.clientY - rect.top);
    };
    window.addEventListener("mousemove", handleMouseMove);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = entry.contentRect.width * dpr;
        canvas.height = entry.contentRect.height * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    });
    resizeObserver.observe(canvas);

    let rafId = 0;
    const start = performance.now();
    const render = () => {
      const time = (performance.now() - start) / 1000;
      const dpr = window.devicePixelRatio || 1;
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform2f(mouseLocation, mouse.x * dpr, mouse.y * dpr);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [reducedMotion]);

  if (reducedMotion || !supported) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full opacity-40"
      aria-hidden="true"
    />
  );
}

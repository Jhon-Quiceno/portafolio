import type { Metadata } from "next";
import { socials } from "@/lib/socials";
import { socialIconMap } from "@/components/icon-map";
import { SocialLink } from "@/components/social-link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact — Jhon Quiceno",
  description: "Get in touch with Jhon Quiceno.",
};

export default function ContactPage() {
  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-container flex-col items-center justify-center px-4 pt-28 pb-24 lg:px-gutter">
      <Reveal className="text-center">
        <p className="text-label-caps font-mono uppercase text-primary">
          Channel Open
        </p>
        <h1 className="mt-2 text-display font-sans text-on-surface">
          ESTABLISH CONNECTION
        </h1>
      </Reveal>

      <div className="mt-10 grid w-full max-w-xl gap-4">
        {socials.map((social, index) => {
          const Icon = socialIconMap[social.icon];
          return (
            <Reveal key={social.name} index={index}>
              <SocialLink
                name={social.name}
                href={social.href}
                icon={<Icon size={28} className="text-primary" />}
              />
            </Reveal>
          );
        })}
      </div>
    </main>
  );
}

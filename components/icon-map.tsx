import {
  Coffee,
  Server,
  FileCode2,
  Smartphone,
  Code2,
  Container,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";
import type { StackIconKey } from "@/lib/stack";
import type { SocialIcon } from "@/lib/socials";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

export const stackIconMap: Record<StackIconKey, LucideIcon> = {
  java: Coffee,
  "spring-boot": Server,
  typescript: FileCode2,
  flutter: Smartphone,
  "php-laravel": Code2,
  docker: Container,
  python: Code2,
  jupyter: BookOpen,
};

type IconComponent = ComponentType<{ size?: number; className?: string }>;

export const socialIconMap: Record<SocialIcon, IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

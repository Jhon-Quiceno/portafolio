export type StackIconKey =
  | "java"
  | "spring-boot"
  | "typescript"
  | "flutter"
  | "php-laravel"
  | "docker"
  | "python"
  | "jupyter";

export type StackItem = {
  name: string;
  icon: StackIconKey;
};

export type StackCategory = {
  name: string;
  items: StackItem[];
};

// Home widget: 6 highlights rendered as a 2x3 / 3x2 icon+label grid.
export const globalStack: StackItem[] = [
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring-boot" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Flutter", icon: "flutter" },
  { name: "PHP/Laravel", icon: "php-laravel" },
  { name: "Docker", icon: "docker" },
];

// Stack page: full categorized breakdown of real experience.
export const stackCategories: StackCategory[] = [
  {
    name: "Backend",
    items: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring-boot" },
      { name: "PHP", icon: "php-laravel" },
      { name: "Laravel", icon: "php-laravel" },
    ],
  },
  {
    name: "Frontend / Mobile",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Flutter / Dart", icon: "flutter" },
    ],
  },
  {
    name: "Data & ML",
    items: [
      { name: "Python", icon: "python" },
      { name: "Jupyter Notebook", icon: "jupyter" },
    ],
  },
  {
    name: "DevOps",
    items: [{ name: "Docker", icon: "docker" }],
  },
];

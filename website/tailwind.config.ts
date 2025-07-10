import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "hsl(0 0% 80% / 0.2)",
        card: "hsl(0 0% 100% / 0.05)",
        "muted-foreground": "#6b7280",
      },
    },
  },
  plugins: [typography],
};

export default config;
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#5BC2F6",
        "secondary": "#FE7B17",
        "secondary-bg": "#9A785D",
        "card-primary": "#00D2B8"
      }
    },
  },
  plugins: [],
} satisfies Config;

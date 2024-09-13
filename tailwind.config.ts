import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "50": "#f2f7fb",
          "100": "#e7f0f8",
          "200": "#d3e2f2",
          "300": "#b9cfe8",
          "400": "#9cb6dd",
          "500": "#839dd1",
          "600": "#6a7fc1",
          "700": "#6374ae",
          "800": "#4a5989",
          "900": "#414e6e",
          "950": "#262c40",
        },
        "true-gray": {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
    },
  },
  plugins: [],
};
export default config;

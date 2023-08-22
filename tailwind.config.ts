import { type Config } from "tailwindcss";

const config: Config =
{
  content:
    [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
  theme:
  {
    colors:
    {
      "white": "#FFFFFF",
      "border-dark": "#CAC6DA",
      "border-grey": "#EBE8F4",
      "light-grey": "#F9F9F9",
      "primaryy": "#4E4D93",
      "dark-primary": "#2A254B",
      "black": "#000000"
    },
    fontFamily:
    {
      epilogue: ["Epilogue", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"]
    },
    container:
    {
      center: true
    }
  }
};

export default config;
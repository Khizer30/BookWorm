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
      "light-grey": "#F9F9F9",
      "primary": "#4E4D93",
      "dark-primary": "#2A254B",
      "black": "#000000"
    },
    fontFamily:
    {
      primary: ["Epilogue", "sans-serif"],
      secondary: ["Oxygen", "sans-serif"]
    },
    container:
    {
      center: true
    }
  }
};

export default config;
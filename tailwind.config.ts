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
      "red": "#AB1D30",
      "primary": "#4E4D93",
      "dark-primary": "#2A254B",
      "black": "#000000"
    },
    fontFamily:
    {
      primary: ["Epilogue Variable", "sans-serif"],
      secondary: ["Montserrat Variable", "sans-serif"]
    },
    container:
    {
      center: true
    }
  }
};

export default config;
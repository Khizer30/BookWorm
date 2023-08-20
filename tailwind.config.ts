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
      "green": "#56B280",
      "black": "#272727"
    },
    fontFamily:
    {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"]
    },
    container:
    {
      center: true
    }
  }
};

export default config;
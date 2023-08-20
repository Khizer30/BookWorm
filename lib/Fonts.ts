import { Roboto, Poppins } from "next/font/google";
import { type NextFont } from "next/dist/compiled/@next/font";

// Fonts
const roboto: NextFont = Roboto({ weight: ["100", "300", "500", "700", "900"], subsets: ["latin"] });
const poppins: NextFont = Poppins({ weight: ["100", "300", "500", "700", "900"], subsets: ["latin"] });

export { roboto, poppins };
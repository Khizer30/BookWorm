import { Epilogue, Montserrat } from "next/font/google";
import { type NextFont } from "next/dist/compiled/@next/font";

// Fonts
const epilogue: NextFont = Epilogue({ weight: "variable", subsets: ["latin"] });
const montserrat: NextFont = Montserrat({ weight: "variable", subsets: ["latin"] });

export { epilogue, montserrat };
import { Epilogue, Azeret_Mono } from "next/font/google";
import { type NextFont } from "next/dist/compiled/@next/font";

// Fonts
const epilogue: NextFont = Epilogue({ weight: ["100", "300", "500", "700", "900"], subsets: ["latin"] });
const azeret: NextFont = Azeret_Mono({ weight: ["100", "300", "500", "700", "900"], subsets: ["latin"] });

export { epilogue, azeret };
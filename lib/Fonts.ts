import { Epilogue, Inter } from "next/font/google";
import { type NextFont } from "next/dist/compiled/@next/font";

// Fonts
const epilogue: NextFont = Epilogue({ weight: "variable", subsets: ["latin"] });
const inter: NextFont = Inter({ weight: "variable", subsets: ["latin"] });

export { epilogue, inter };
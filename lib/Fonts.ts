import { Epilogue, Oxygen } from "next/font/google";
import { type NextFont } from "next/dist/compiled/@next/font";

// Fonts
const epilogue: NextFont = Epilogue({ weight: "variable", subsets: ["latin"] });
const oxygen: NextFont = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin", "latin-ext"] });

export { epilogue, oxygen };
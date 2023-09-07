"use client";
import Lottie from "lottie-react";

// Props
interface Props
{
  data: any;
  classNames: string;
}

// Lottie Player
export default function LottiePlayer({ data, classNames }: Props): JSX.Element
{
  return (
    <>
      <Lottie
        animationData={ data }
        autoPlay
        loop
        className={ classNames }
      />
    </>
  );
}
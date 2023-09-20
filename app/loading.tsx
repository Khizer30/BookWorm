//
import Animation from "@components/Animation";

// Loading
export default function Loading(): JSX.Element
{
  return (
    <>
      <div className=" w-screen h-screen flex justify-center items-center">
        <Animation />
      </div>
    </>
  );
}
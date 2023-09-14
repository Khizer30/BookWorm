import { type Metadata } from "next";

// Metadata
export const metadata: Metadata =
{
  title: "Loading | Book Worm",
  keywords: ["Book Worm", "Loading"]
};

// Page
export default function Page(): JSX.Element
{
  return (
    <>
      <div className=" w-screen h-screen flex justify-center items-center">
        <svg width="300" height="300" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className=" scale">
          <g>

            <g className="Center">
              <rect x="225" y="100" width="50" height="300" rx="10" fill="#4E4D93" />
            </g>

            <g className="Middle">
              <rect x="300" y="100" width="50" height="300" rx="10" fill="#2A254B" />
            </g>

            <g className="Middle">
              <rect x="150" y="100" width="50" height="300" rx="10" fill="#2A254B" />
            </g>

            <g className="Corner">
              <rect x="75" y="100" width="50" height="300" rx="10" fill="#4E4D93" />
            </g>

            <g className="Corner">
              <rect x="375" y="100" width="50" height="300" rx="10" fill="#4E4D93" />
            </g>

          </g>
        </svg>
      </div>
    </>
  );
}
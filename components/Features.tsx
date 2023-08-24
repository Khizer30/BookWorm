import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faTruck, faRecycle } from "@fortawesome/free-solid-svg-icons";

// Features
export default function Features(): JSX.Element
{
  return (
    <>
      <div className=" w-full p-6 flex flex-col justify-center items-center">
        <div className=" w-full h-12 flex justify-center items-center">
          <h1 className=" text-xl font-medium font-primary"> What makes us different </h1>
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-3">

          <div className=" min-h-[10rem] col-span-1 flex flex-col justify-center items-start">
            <FontAwesomeIcon
              icon={ faWallet }
              className=" w-6 h-6 scale"
            />
            <h2 className=" my-2 text-lg font-medium font-primary"> Unbeatable prices </h2>
            <h3 className=" text-sm font-secondary"> For our quality, you won’t find better prices anywhere </h3>
          </div>

          <div className=" min-h-[10rem] col-span-1 flex flex-col justify-center items-start">
            <FontAwesomeIcon
              icon={ faTruck }
              className=" w-6 h-6 scale"
            />
            <h2 className=" my-2 text-lg font-medium font-primary"> Next day as standards </h2>
            <h3 className=" text-sm font-secondary"> Order before 3pm and get your order the next day as standard </h3>
          </div>

          <div className=" min-h-[10rem] col-span-1 flex flex-col justify-center items-start">
            <FontAwesomeIcon
              icon={ faRecycle }
              className=" w-6 h-6 scale"
            />
            <h2 className=" my-2 text-lg font-medium font-primary"> Recycled packaging </h2>
            <h3 className=" text-sm font-secondary"> We use 100% recycled packaging to ensure our footprint is manageable </h3>
          </div>

        </div>
      </div>
    </>
  );
}
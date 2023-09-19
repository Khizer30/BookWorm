import Image from "next/image";
import { type Metadata } from "next";
//
import LottiePlayer from "@components/LottiePlayer";
import { type UserType } from "@lib/Interface";
import logo from "@images/logo.webp";
import animation from "@images/profile.json";

// Metadata
export const metadata: Metadata =
{
  title: "Profile | Book Worm",
  keywords: ["Book Worm", "Profile"]
};

// Page
export default function Page(): JSX.Element
{
  const inputs: UserType =
  {
    email: "syed.khizer30@gmail.com",
    username: "Muhammad Khizer",
    password: "Shaheer30="
  };

  return (
    <>
      <div className=" w-full grid grid-cols-2 justify-items-center content-center">

        <div className=" w-full h-screen p-6 col-span-2 md:col-span-1 flex flex-col">
          <div className=" w-full h-28 flex justify-start items-center">
            <Image
              src={ logo }
              alt="Logo"
              draggable="false"
              className=" w-20 md:w-24 h-20 md:h-24 scale"
            />
          </div>
          <div className=" w-full h-full flex flex-col justify-center items-center">
            <h1 className=" w-9/12 my-2 text-3xl font-semibold font-secondary"> Profile </h1>
            <h2 className=" w-9/12 my-2 text-sm font-secondary">
              To Go Back
              <a className=" text-primary hover:text-dark-primary font-semibold transition-all"> Click Here! </a>
            </h2>
            <form action="" method="post" target="_self" className=" w-9/12 my-2">

              <div className=" my-8">
                <h3 className=" text-xs font-secondary"> Email </h3>
                <input
                  name="email"
                  type="email"
                  disabled
                  value={ inputs.email }
                  placeholder="Enter Your Email"
                  className=" w-full h-8 p-1 text-sm font-medium font-secondary focus:outline-none border-b-2 border-primary focus:border-dark-primary"
                />
              </div>

              <div className=" my-8">
                <h3 className=" text-xs font-secondary"> Username </h3>
                <input
                  name="username"
                  type="text"
                  autoFocus
                  value={ inputs.username }
                  placeholder="Enter Your Username"
                  className=" w-full h-8 p-1 text-sm font-medium font-secondary focus:outline-none border-b-2 border-primary focus:border-dark-primary"
                />
              </div>

              <div className=" my-8">
                <h3 className=" text-xs font-secondary"> Password </h3>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Your New Password"
                  className=" w-full h-8 p-1 text-sm font-medium font-secondary focus:outline-none border-b-2 border-primary focus:border-dark-primary"
                />
              </div>

              <div className=" my-8">
                <h3 className=" text-xs font-secondary"> Confirm Password </h3>
                <input
                  name="repassword"
                  type="password"
                  placeholder="Re-Enter Your Password"
                  className=" w-full h-8 p-1 text-sm font-medium font-secondary focus:outline-none border-b-2 border-primary focus:border-dark-primary"
                />
              </div>

              <div className=" my-12 flex justify-center items-center">
                <button className=" w-full h-12 rounded-3xl text-white text-sm font-secondary bg-primary hover:bg-dark-primary outline-none scale">
                  Save
                </button>
              </div>

            </form>
          </div>
        </div>

        <div className=" w-0 md:w-full h-0 md:h-screen p-6 md:col-span-1 hidden md:flex justify-center items-center">
          <div className=" w-full h-full flex flex-col justify-center items-center rounded-xl bg-dark-primary">
            <div className=" w-full h-4/5 flex justify-center items-center">
              <LottiePlayer
                data={ animation }
                classNames=" w-3/4 scale"
              />
            </div>
            <div className=" w-3/4 h-1/5 flex flex-col justify-start items-start">
              <h1 className=" my-1 text-white text-4xl font-semibold font-secondary"> BookWorm's Profile </h1>
              <h1 className=" my-1 text-white text-xl font-secondary"> Pakistan's Biggest Book Store </h1>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
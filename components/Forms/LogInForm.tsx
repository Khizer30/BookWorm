"use client";
import { GoogleAuthProvider, signInWithPopup, type UserCredential, type User } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
//
import auth from "@lib/Firebase";

// Log In Form
export default function LogInForm(): JSX.Element
{
  const provider: GoogleAuthProvider = new GoogleAuthProvider();

  // Log In
  async function login(): Promise<void>
  {
    signInWithPopup(auth, provider)
      .then((x: UserCredential) =>
      {
        const user: User = x.user;

        // Update Database
      });
  }

  return (
    <>
      <div className=" w-full my-4 flex flex-col justify-center items-center">

        <button onClick={ login } type="button" className=" w-9/12 h-12 my-2 flex justify-center items-center rounded text-white font-secondary bg-primary hover:bg-dark-primary scale">
          <FontAwesomeIcon
            icon={ faGoogle }
            className=" w-5 h-5 mr-2"
          />
          <h1 className=" ml-2"> Google </h1>
        </button>

      </div>
    </>
  );
}
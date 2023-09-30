"use client";
import { GoogleAuthProvider, signInWithPopup, type UserCredential, type User } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
//
import auth from "@lib/Firebase";
import { type TheUser } from "@lib/Interface";

// Log In Form
export default function LogInForm(): JSX.Element
{
  const provider: GoogleAuthProvider = new GoogleAuthProvider();

  // Log In
  async function login(): Promise<void>
  {
    signInWithPopup(auth, provider)
      .then(async (x: UserCredential) =>
      {
        await updateDB(x.user);
      });
  }

  // Update Database
  async function updateDB(x: User): Promise<void>
  {
    const data: TheUser =
    {
      _id: x.uid,
      email: x.email,
      displayName: x.displayName,
      phoneNumber: x.phoneNumber,
      address: null,
      cart: []
    };

    await fetch("/api/login",
      {
        mode: "same-origin",
        method: "POST",
        headers:
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
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
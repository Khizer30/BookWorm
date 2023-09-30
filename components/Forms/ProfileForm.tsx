"use client";
import { useState, type FormEvent, type ChangeEvent } from "react";
//
import regex from "@lib/Regex";
import { type TheUser } from "@lib/Interface";

// Props
interface Props
{
  user: TheUser;
}

// Profile Form
export default function ProfileForm({ user }: Props): JSX.Element
{
  const [inputs, setInputs] = useState<TheUser>(user);
  const [error, setError] = useState<string>("");
  const [color, setColor] = useState<boolean>(true);

  // Handle Submit
  function handleSubmit(e: FormEvent<HTMLFormElement>): void
  {
    e.preventDefault();
  }

  // Handle Change
  function handleChange(e: ChangeEvent<HTMLInputElement>): void
  {
    setInputs((values: TheUser) => ({ ...values, [e.target.name]: e.target.value }));
  }

  // Check Input
  function checkInput(name: string, value: string | null | undefined, len: number, reg: RegExp): boolean
  {
    setError("");

    if (value)
    {
      if (value.length <= len)
      {
        if (reg.test(value))
        {
          return true;
        }
        else
        {
          setError(`*Kindly, Enter Valid ${ name }`);
          return false;
        }
      }
      else
      {
        setError(`*Kindly, Shorten The ${ name }`);
        return false;
      }
    }
    else
    {
      setError(`*Kindly, Enter The ${ name }`);
      return false;
    }
  }

  // Update Profile
  async function updateProfile(): Promise<void>
  {
    if (checkInput("Name", inputs.displayName?.trim(), 100, regex.displayName)
      && checkInput("Phone No.", inputs.phoneNumber?.trim(), 11, regex.phoneNumber)
      && checkInput("Address", inputs.address?.trim(), 300, regex.address)
      && checkInput("City", inputs.city?.trim(), 100, regex.city))
    {
      console.log(inputs);
    }
  }

  return (
    <>
      <form
        method="post"
        target="_self"
        autoComplete="off"
        encType="application/x-www-form-urlencoded"
        noValidate
        onSubmit={ handleSubmit }
        className=" w-9/12 my-2"
      >

        <h6
          className={ ` w-full ${ error ? "" : "invisible" } text-center text-sm ${ color ? "text-red" : "" } font-secondary` }
        >
          { error || <br /> }
        </h6>

        <div className=" my-8">
          <h3 className=" text-xs font-secondary"> Email </h3>
          <input
            name="email"
            type="email"
            placeholder="*****@***mail.com"
            required
            disabled
            value={ inputs.email || "" }
            onChange={ handleChange }
            className=" w-full h-8 p-1 text-sm font-medium font-secondary border-b-2 border-primary focus:border-dark-primary"
          />
        </div>

        <div className=" my-8">
          <h3 className=" text-xs font-secondary"> Name </h3>
          <input
            name="displayName"
            type="text"
            placeholder="i.e. Muhammad Khizer"
            required
            autoFocus
            maxLength={ 100 }
            value={ inputs.displayName || "" }
            onChange={ handleChange }
            className=" w-full h-8 p-1 text-sm font-medium font-secondary border-b-2 border-primary focus:border-dark-primary"
          />
        </div>

        <div className=" my-8">
          <h3 className=" text-xs font-secondary"> Phone No. </h3>
          <input
            name="phoneNumber"
            type="tel"
            placeholder="i.e. 03331234567"
            required
            maxLength={ 11 }
            value={ inputs.phoneNumber || "" }
            onChange={ handleChange }
            className=" w-full h-8 p-1 text-sm font-medium font-secondary border-b-2 border-primary focus:border-dark-primary"
          />
        </div>

        <div className=" my-8">
          <h3 className=" text-xs font-secondary"> Address </h3>
          <input
            name="address"
            type="text"
            placeholder="i.e. House 420, Street 69, ..."
            required
            maxLength={ 300 }
            value={ inputs.address || "" }
            onChange={ handleChange }
            className=" w-full h-8 p-1 text-sm font-medium font-secondary border-b-2 border-primary focus:border-dark-primary"
          />
        </div>

        <div className=" my-8">
          <h3 className=" text-xs font-secondary"> City </h3>
          <input
            name="city"
            type="text"
            placeholder="i.e. Islamabad"
            required
            maxLength={ 100 }
            value={ inputs.city || "" }
            onChange={ handleChange }
            className=" w-full h-8 p-1 text-sm font-medium font-secondary border-b-2 border-primary focus:border-dark-primary"
          />
        </div>

        <div className=" my-12 flex justify-center items-center">
          <button onClick={ updateProfile } type="submit" className=" w-full h-12 rounded-3xl text-white text-sm font-secondary bg-primary hover:bg-dark-primary scale">
            Save
          </button>
        </div>

      </form>
    </>
  );
}
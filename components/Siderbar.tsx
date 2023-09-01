"use client";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
//
import { subjects, prices } from "@lib/Filters";
import { type Children, type Radio, type HeadlessUI } from "@lib/Interface";

// Sidebar
export default function Sidebar({ children }: Children): JSX.Element
{
  const [subject, setSubject] = useState<string>(subjects[0].value as string);
  const [price, setPrice] = useState<number>(prices[0].value as number);

  // Radio Mapper
  function radioMapper(option: Radio): JSX.Element
  {
    return (
      <RadioGroup.Option
        value={ option.value }
        key={ option.value }
      >
        { ({ checked }: HeadlessUI) => (
          <h6
            className={ ` h-7 my-1 px-2 flex justify-start items-center rounded text-sm font-primary cursor-pointer transition-all ease-out duration-100 ${ checked ? ` text-white bg-dark-primary` : ` hover:bg-light-grey` }` }
          >
            { option.name }
          </h6>
        ) }
      </RadioGroup.Option>
    );
  }

  return (
    <>
      <div className=" w-full min-h-full flex">
        <div className=" w-0 md:w-80 min-h-full p-6 hidden md:flex flex-col justify-start items-center">

          <RadioGroup value={ subject } onChange={ setSubject } className=" w-full mb-6">
            <RadioGroup.Label as="h5" className=" px-2 font-semibold font-secondary"> Subject </RadioGroup.Label>
            { subjects.map(radioMapper) }
          </RadioGroup>

          <RadioGroup value={ price } onChange={ setPrice } className=" w-full">
            <RadioGroup.Label as="h5" className=" px-2 font-semibold font-secondary"> Price </RadioGroup.Label>
            { prices.map(radioMapper) }
          </RadioGroup>

        </div>
        <div className=" w-full min-h-full">
          { children }
        </div>
      </div>
    </>
  );
};
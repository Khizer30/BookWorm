"use client";
import { useState } from "react";
import { RadioGroup, Popover, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
//
import { subjects, prices, sorts } from "@lib/Filters";
import { type Children, type Radio, type HeadlessUI } from "@lib/Interface";

// Sidebar
export default function Sidebar({ children }: Children): JSX.Element
{
  const [subject, setSubject] = useState<string>(subjects[0].value as string);
  const [price, setPrice] = useState<number>(prices[0].value as number);
  const [sort, setSort] = useState<number>(sorts[0].value as number);

  // Radio Mapper
  function radioMapper(option: Radio): JSX.Element
  {
    return (
      <RadioGroup.Option value={ option.value } key={ option.value }>
        { ({ checked }: HeadlessUI) => (
          <h6 className={ ` h-7 my-1 px-2 flex justify-start items-center rounded text-sm font-primary cursor-pointer transition-all ease-out duration-100 ${ checked ? ` text-white bg-dark-primary` : ` hover:bg-light-grey` }` }>
            { option.name }
          </h6>
        ) }
      </RadioGroup.Option>
    );
  }

  // Popover Mapper
  function popoverMapper(option: Radio): JSX.Element
  {
    return (
      <RadioGroup.Option value={ option.value } key={ option.value }>
        { ({ checked }: HeadlessUI) => (
          <h6 className={ ` h-6 p-2 flex justify-start items-center text-xs font-primary cursor-pointer transition-all ease-out duration-100 ${ checked ? ` text-white bg-dark-primary` : ` hover:bg-white` }` }>
            { option.name }
          </h6>
        ) }
      </RadioGroup.Option>
    );
  }

  return (
    <>
      <div className=" w-full min-h-full flex flex-col md:flex-row">

        <div className=" w-full h-16 md:w-0 p-6 flex md:hidden justify-around items-center">

          <Popover className=" relative">
            <Popover.Button className=" w-36 h-12 rounded text-sm font-primary bg-light-grey scale">
              Filters
              <FontAwesomeIcon
                icon={ faCaretDown }
                className=" w-3 h-3 ml-2"
              />
            </Popover.Button>
            <Transition
              enter=" transition ease-out duration-150"
              enterFrom=" transform scale-95 opacity-0"
              enterTo=" transform scale-100 opacity-100"
              leave=" transition ease-in duration-150"
              leaveFrom=" transform scale-100 opacity-100"
              leaveTo=" transform scale-95 opacity-0"
            >
              <Popover.Panel className=" w-36 mt-2 pb-2 z-10 flex flex-col justify-center items-start absolute rounded bg-light-grey">

                <RadioGroup value={ subject } onChange={ setSubject } className=" w-full">
                  <RadioGroup.Label as="h5" className=" p-2 text-sm font-semibold font-secondary"> Subject </RadioGroup.Label>
                  { subjects.map(popoverMapper) }
                </RadioGroup>

                <RadioGroup value={ price } onChange={ setPrice } className=" w-full">
                  <RadioGroup.Label as="h5" className=" p-2 text-sm font-semibold font-secondary"> Price </RadioGroup.Label>
                  { prices.map(popoverMapper) }
                </RadioGroup>

              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className=" relative">
            <Popover.Button className=" w-36 h-12 rounded text-sm font-primary bg-light-grey scale">
              Sort
              <FontAwesomeIcon
                icon={ faCaretDown }
                className=" w-3 h-3 ml-2"
              />
            </Popover.Button>
            <Transition
              enter=" transition ease-out duration-150"
              enterFrom=" transform scale-95 opacity-0"
              enterTo=" transform scale-100 opacity-100"
              leave=" transition ease-in duration-150"
              leaveFrom=" transform scale-100 opacity-100"
              leaveTo=" transform scale-95 opacity-0"
            >
              <Popover.Panel className=" w-36 mt-2 py-2 z-10 flex flex-col justify-center items-start absolute rounded bg-light-grey">

                <RadioGroup value={ sort } onChange={ setSort } className=" w-full">
                  { sorts.map(popoverMapper) }
                </RadioGroup>

              </Popover.Panel>
            </Transition>
          </Popover>

        </div>

        <div className=" w-0 md:w-80 min-h-full p-6 hidden md:flex flex-col justify-start items-center">

          <RadioGroup value={ subject } onChange={ setSubject } className=" w-full mb-3">
            <RadioGroup.Label as="h5" className=" px-2 font-semibold font-secondary"> Subject </RadioGroup.Label>
            { subjects.map(radioMapper) }
          </RadioGroup>

          <RadioGroup value={ price } onChange={ setPrice } className=" w-full mb-3">
            <RadioGroup.Label as="h5" className=" px-2 font-semibold font-secondary"> Price </RadioGroup.Label>
            { prices.map(radioMapper) }
          </RadioGroup>

          <RadioGroup value={ sort } onChange={ setSort } className=" w-full mb-3">
            <RadioGroup.Label as="h5" className=" px-2 font-semibold font-secondary"> Sort </RadioGroup.Label>
            { sorts.map(radioMapper) }
          </RadioGroup>

        </div>

        <div className=" w-full min-h-full">
          { children }
        </div>

      </div>
    </>
  );
};
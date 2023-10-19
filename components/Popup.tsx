import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Props
interface Props
{
  title: string;
  message: string;
  isOpen: boolean;
  close: () => void;
}

// Popup
export default function Popup({ title, message, isOpen, close }: Props): JSX.Element
{
  return (
    <>
      <Dialog open={ isOpen } onClose={ close } as="div" className=" w-screen h-screen z-10 flex justify-center items-center fixed">
        <Dialog.Panel className=" w-3/4 md:w-1/2 flex justify-center items-center">
          <div className=" w-full flex flex-col justify-center items-center rounded-lg bg-white">
            <div className=" w-full h-1/4 p-4 flex justify-between items-center rounded-t-lg text-white bg-dark-primary">
              <h2 className=" font-medium font-primary"> { title } </h2>
              <button onClick={ close } className=" scale">
                <FontAwesomeIcon
                  icon={ faXmark }
                  className=" w-6 h-6"
                />
              </button>
            </div>
            <div className=" w-full h-3/4 p-4">
              <h3 className=" text-sm font-light font-primary"> { message } </h3>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
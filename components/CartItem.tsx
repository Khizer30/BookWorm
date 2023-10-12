import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
//
import { type Item } from "@lib/Interface";
import errorImg from "@images/error.webp";

// Props
interface Props
{
  item: Item,
  remove: (bid: string) => Promise<void>;
}

// CartItem
export default function CartItem({ item, remove }: Props): JSX.Element
{
  return (
    <>
      <div className=" w-full my-4 col-span-6 md:col-span-8 flex justify-center items-center">
        <Image
          src={ item.image || errorImg }
          alt={ item.title }
          width={ 250 }
          height={ 400 }
          draggable="false"
          placeholder="empty"
          className=" w-12 md:w-20 mr-1 rounded"
        />
        <div className=" w-full ml-1">
          <h2 className=" w-full text-sm md:text-base font-medium font-secondary"> { item.title } </h2>
          <h3 className=" w-full my-1 text-xs md:text-sm font-primary"> { `Rs ${ item.price }` } </h3>
          <h3 className=" w-full text-xs md:text-sm font-light font-primary"> { `x${ item.quantity }` } </h3>
        </div>
      </div>

      <div className=" w-full my-4 col-span-3 md:col-span-2 flex justify-center items-center">
        <button onClick={ () => remove(item.id) } className=" w-10 h-10 ml-1 rounded-xl hover:text-white bg-white hover:bg-dark-primary scale">
          <FontAwesomeIcon
            icon={ faTrashCan }
          />
        </button>
      </div>

      <div className=" w-full my-4 col-span-3 md:col-span-2 flex justify-center items-center">
        <h3 className=" w-full text-end text-sm md:text-base font-primary"> { `Rs ${ item.price * item.quantity }` } </h3>
      </div>
    </>
  );
}
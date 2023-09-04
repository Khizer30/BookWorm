import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
//
import Card from "@components/Card";
import books from "@lib/Books";
import { type Book } from "@lib/Interface";

// Store
export default function Store(): JSX.Element
{
  const items: Book[] = [...books, ...books, ...books];

  // Books Mapper
  function booksMapper(book: Book): JSX.Element
  {
    return (
      <Card { ...book } />
    );
  }

  return (
    <>
      <div className=" w-full p-6 flex flex-col justify-center items-center">

        <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-items-center content-center">
          { items.slice(3).map(booksMapper) }
        </div>

        <div className=" w-full my-3 flex justify-center items-center">
          <button className=" w-10 h-10 mx-1 rounded-md hover:text-white bg-light-grey hover:bg-dark-primary scale">
            <FontAwesomeIcon
              icon={ faAngleLeft }
            />
          </button>
          <button className=" w-10 h-10 mx-1 rounded-md hover:text-white bg-light-grey hover:bg-dark-primary scale">
            <FontAwesomeIcon
              icon={ faAngleRight }
            />
          </button>
        </div>

      </div>
    </>
  );
}
//
import Card from "@components/Card";
import books from "@lib/Books";
import { type Book } from "@lib/Interface";

// Props
interface Props
{
  heading: string;
}

// Listings
export default function Listings({ heading }: Props): JSX.Element
{
  // Book Mapper
  function bookMapper(book: Book): JSX.Element
  {
    return (
      <Card { ...book } key={ book._id } />
    );
  }

  return (
    <>
      <div className=" w-full p-6 flex flex-col justify-center items-center">
        <div className=" w-full h-12 flex justify-start items-center">
          <h1 className=" text-xl font-medium font-secondary"> { heading } </h1>
        </div>
        <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-items-center content-center">
          { books.map(bookMapper) }
        </div>
        <div className=" w-full my-2 flex justify-center items-center">
          <button className=" w-36 h-12 rounded-lg text-sm font-primary bg-light-grey outline-none scale">
            View Collection
          </button>
        </div>
      </div>
    </>
  );
}
//
import Card from "@components/Card";
import books from "@lib/Books";
import { type Book } from "@lib/Interface";

// Listings
export default function Listings(): JSX.Element
{
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
        <div className=" w-full h-12 flex justify-start items-center">
          <h1 className=" text-xl font-medium font-secondary"> Popular Books </h1>
        </div>
        <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-items-center content-center">
          { books.map(booksMapper) }
        </div>
        <div className=" w-full my-2 flex justify-center items-center">
          <button className=" w-36 h-12 rounded-lg text-sm font-primary bg-light-grey scale">
            View Collection
          </button>
        </div>
      </div>
    </>
  );
}
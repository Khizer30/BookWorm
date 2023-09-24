import Link from "next/link";
//
import Card from "@components/Card";
import { getPopularBooks } from "@lib/DB";
import { type Book } from "@lib/Interface";

// Props
interface Props
{
  heading: string;
}

// Listings
export default async function Listings({ heading }: Props): Promise<JSX.Element>
{
  const books: Book[] = await getPopularBooks();

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
          <Link href="/store" className=" w-36 h-12 rounded-lg flex justify-center items-center text-sm font-primary bg-light-grey scale">
            View Collection
          </Link>
        </div>
      </div>
    </>
  );
}
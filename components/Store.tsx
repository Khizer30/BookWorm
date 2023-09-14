//
import Card from "@components/Card";
import { getBooks } from "@lib/DB";
import { type Book } from "@lib/Interface";

export default async function Store(): Promise<JSX.Element>
{
  const items: Book[] = JSON.parse(await getBooks());

  // Book Mapper
  function bookMapper(book: Book): JSX.Element
  {
    return (
      <Card { ...book } key={ book.title } />
    );
  }

  return (
    <>
      { (items.length === 0) &&
        <h3 className=" text-3xl font-medium font-secondary"> Store is Empty </h3>
      }
      { (items.length !== 0) &&
        <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-items-center content-center">
          { items.map(bookMapper) }
        </div>
      }
    </>
  );
}
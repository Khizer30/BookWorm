//
import Card from "@components/Card";
import { type Book } from "@lib/Interface";
import img1 from "@images/demo/1.webp";
import img2 from "@images/demo/2.webp";
import img3 from "@images/demo/3.webp";
import img4 from "@images/demo/4.webp";

// Books
const books: Book[] =
  [
    {
      title: "The Rumi Collection",
      price: 699,
      image: img1
    },
    {
      title: "The Reconstruction of Religious Thought in Islam",
      price: 999,
      image: img2
    },
    {
      title: "Iqbal - The Life of Poet, Philosopher & Politician",
      price: 1199,
      image: img3
    },
    {
      title: "The Sole Spokesman",
      price: 499,
      image: img4
    }
  ];

// Listings
export default function Listings(): JSX.Element
{
  // Books Mapper
  function booksMapper(book: Book): JSX.Element
  {
    return (
      <Card
        title={ book.title }
        price={ book.price }
        image={ book.image }
      />
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
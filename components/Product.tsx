import Image from "next/image";
//
import ProductForm from "@components/Forms/ProductForm";
import { type Book } from "@lib/Interface";
import errorImg from "@images/error.webp";

// Product
export default function Product({ _id, title, price, description, image, authors, tags }: Book): JSX.Element
{
  // Get Author
  function getAuthor(): string
  {
    let author: string = "";

    for (let i: number = 0; i < authors.length; i++)
    {
      (i === 0) ? author += authors[i] : author += `, ${ authors[i] }`;
    }

    return author;
  }

  // Tag Mapper
  function tagMapper(tag: string): JSX.Element
  {
    return (
      <h4 className=" mr-2 px-4 py-1 rounded text-xs font-secondary bg-white" key={ tag }> { tag.toUpperCase() } </h4>
    );
  }

  return (
    <>
      <div className=" w-full p-4 grid grid-cols-1 md:grid-cols-2 justify-items-center content-center bg-light-grey">

        <div className=" w-full p-2 col-span-1 flex justify-center items-center">
          <Image
            src={ image || errorImg }
            alt={ title }
            width={ 250 }
            height={ 400 }
            draggable="false"
            placeholder="empty"
            className=" w-40 md:w-48 rounded"
          />
        </div>

        <div className=" w-full p-2 col-span-1 flex flex-col justify-between items-center">

          <div className=" w-full mb-2">
            <h1 className=" w-full text-xl font-medium font-secondary"> { title } </h1>
            <h3 className=" w-full my-2 font-primary"> { `Rs ${ price }` } </h3>
            <hr className=" h-1" />
          </div>

          <div className=" w-full my-1">
            <h2 className=" w-full font-medium font-secondary"> Product Description </h2>
            <h3 className=" w-full my-2 text-sm font-light font-primary"> { description || "No Description" } </h3>
          </div>

          <div className=" w-full my-1">
            <h2 className=" w-full font-medium font-secondary"> { (authors.length > 1) ? "Authors" : "Author" } </h2>
            <h3 className=" w-full my-2 text-sm font-light font-primary"> { getAuthor() } </h3>
          </div>

          <div className=" w-full my-1">
            <h2 className=" w-full font-medium font-secondary"> { (tags.length > 1) ? "Tags" : "Tag" } </h2>
            <div className=" w-full my-2 flex justify-start items-center">
              { tags.map(tagMapper) }
            </div>
          </div>

          <ProductForm bid={ _id } title={ title } />

        </div>

      </div>
    </>
  );
}
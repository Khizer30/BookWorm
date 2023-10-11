import { type MongoClient, type Collection, type Filter, type FindOptions } from "mongodb";
//
import startClient from "@lib/MongoDB";
import { type BooksResponse, type Book, type TheUser, type Cart, type Item } from "@lib/Interface";

// Start Store
async function startStore(): Promise<BooksResponse>
{
  const client: MongoClient = await startClient();
  const collection: Collection<Book> = client.db("bookworm").collection<Book>("books");
  const pageSize: number = 8;
  let books: Book[] = [];
  let pages: number[] = [];

  books = await collection.find().sort({ title: 1 }).limit(pageSize).toArray();
  const maxPage: number = Math.ceil((await collection.countDocuments()) / pageSize);

  // Create Page Array
  for (let i: number = 1; i <= maxPage; i++)
  {
    pages.push(i);
  }

  await client.close();

  return { books: books, pages: pages };
}

// Get Product
async function getProduct(id: string): Promise<Book | null>
{
  const client: MongoClient = await startClient();
  const collection: Collection<Book> = client.db("bookworm").collection<Book>("books");

  const book: Book | null = await collection.findOne({ _id: id });

  await client.close();

  return book;
}

// Get Popular Books
async function getPopularBooks(): Promise<Book[]>
{
  const client: MongoClient = await startClient();
  const collection: Collection<Book> = client.db("bookworm").collection<Book>("popular");

  const books: Book[] = await collection.find().sort({ title: -1 }).limit(4).toArray();

  await client.close();

  return books;
}

// Get User
async function getUser(id: string): Promise<TheUser | null>
{
  const client: MongoClient = await startClient();
  const collection: Collection<TheUser> = client.db("bookworm").collection<TheUser>("users");

  const user: TheUser | null = await collection.findOne({ _id: id });

  await client.close();

  return user;
}

// Get Cart
async function getCart(id: string): Promise<Item[]>
{
  const client: MongoClient = await startClient();
  const usersCollection: Collection<TheUser> = client.db("bookworm").collection<TheUser>("users");
  const booksCollection: Collection<Book> = client.db("bookworm").collection<Book>("books");
  let items: Item[] = [];

  let x: Filter<TheUser | Book> =
  {
    _id: id
  };
  let y: FindOptions<TheUser> =
  {
    projection:
    {
      _id: 0,
      cart: 1
    }
  };

  const user: TheUser | null = await usersCollection.findOne(x, y);

  if (user)
  {
    const cart: Cart[] = user.cart;
    const bids: string[] = [];
    cart.forEach((value: Cart) => bids.push(value.bid));

    x =
    {
      _id: { $in: bids }
    };
    y =
    {
      projection:
      {
        _id: 0,
        title: 1,
        price: 1,
        image: 1
      }
    };

    const books: Book[] = await booksCollection.find(x, y).toArray();

    items = books.map((obj: Book, index: number) =>
    ({
      id: cart[index].bid,
      ...obj,
      quantity: cart[index].quantity
    }));
  }

  return items;
}

export { startStore, getProduct, getPopularBooks, getUser, getCart };
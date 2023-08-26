//
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
      description: "'The Rumi Collection' is a literary masterpiece that brings to life the timeless wisdom and poetic brilliance of the renowned 13th-century Persian mystic, Rumi. This exquisite anthology is a curated selection of Rumi's most profound and soul-stirring works, thoughtfully compiled to offer readers a transformative journey through the depths of spirituality and love.",
      image: img1
    },
    {
      title: "The Reconstruction of Religious Thought in Islam",
      price: 999,
      description: "'The Reconstruction of Religious Thought in Islam' is a seminal collection of philosophical essays by Sir Muhammad Iqbal, offering profound insights into Islamic philosophy and spirituality. Published in the early 20th century, it explores themes like faith and reason, individuality in society, and creative self-realization within Islamic tradition.",
      image: img2
    },
    {
      title: "Iqbal - The Life of Poet, Philosopher & Politician",
      price: 1199,
      description: "'Iqbal: The Life of Poet, Philosopher & Politician' is a captivating exploration of the multifaceted persona of Allama Muhammad Iqbal, one of the most iconic figures in South Asian history. This meticulously researched biography delves into the life and times of Iqbal, tracing his journey from a humble background to becoming a renowned poet, philosopher, and influential political thinker.",
      image: img3
    },
    {
      title: "The Sole Spokesman",
      price: 499,
      description: "'The Sole Spokesman' is a captivating and thought-provoking book that delves into the life and leadership of one of the most remarkable figures in the history of modern India, Muhammad Ali Jinnah. Authored by Ayesha Jalal, this meticulously researched work offers a profound exploration of Jinnah's political evolution, his role in the Indian independence movement, and his ultimate transformation into the 'sole spokesman' for the Muslim League.",
      image: img4
    }
  ];

export default books;
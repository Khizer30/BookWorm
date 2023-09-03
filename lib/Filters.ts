import { type Radio } from "@lib/Interface";

// Subjects
const subjects: Radio[] =
  [
    {
      name: "All",
      value: "all"
    },
    {
      name: "Quran",
      value: "quran"
    },
    {
      name: "Hadith",
      value: "hadith"
    },
    {
      name: "Fiqh",
      value: "fiqh"
    },
    {
      name: "Ilm-ul-Kalam",
      value: "kalam"
    },
    {
      name: "Tasawwuf",
      value: "tasawwuf"
    }
  ];

// Prices
const prices: Radio[] =
  [
    {
      name: "All",
      value: Infinity
    },
    {
      name: "0 - 999",
      value: 999
    },
    {
      name: "1000 - 1999",
      value: 1999
    },
    {
      name: "2000 - 2999",
      value: 2999
    }
  ];

// Sorts
const sorts: Radio[] =
  [
    {
      name: "Ascending",
      value: 1
    },
    {
      name: "Descending",
      value: 0
    }
  ];

export { subjects, prices, sorts };
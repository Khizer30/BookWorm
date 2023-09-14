//
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
      name: "Iqbaliyat",
      value: "iqbaliyat"
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
      name: "0 - 499",
      value: 500
    },
    {
      name: "500 - 999",
      value: 1000
    },
    {
      name: "1000 - 1499",
      value: 1500
    },
    {
      name: "1500 - 1999",
      value: 2000
    },
    {
      name: "2000 - 2499",
      value: 2500
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
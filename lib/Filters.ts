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
      name: "Islam",
      value: "islam"
    },
    {
      name: "Iqbaliyat",
      value: "iqbaliyat"
    },
    {
      name: "Rumi",
      value: "rumi"
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
      value: 1000
    },
    {
      name: "1000 - 1999",
      value: 2000
    },
    {
      name: "2000 - 2999",
      value: 3000
    },
    {
      name: "3000 - 3999",
      value: 4000
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
      value: -1
    }
  ];

export { subjects, prices, sorts };
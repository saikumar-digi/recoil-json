import { selector } from "recoil";
import { bookListAtom } from "../atoms/bookAtom";
import { filterOptionAtom } from "../atoms/filterOptionAtom";

export const filteredBookSelector = selector({
    key: "filteredBookSelector",
    get: ({ get }) => {
      const books = get(bookListAtom);
      const filterOption = get(filterOptionAtom);
      if (filterOption === "all") {
        return books;
      } else if (filterOption === "Published") {
        return books.filter((item) => item.isPublished);
      }
      else if (filterOption === "yetToPublished") {
          return books.filter((item) => !item.isPublished);
        }
      return [];
    },
  });
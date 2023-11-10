
import { selector } from 'recoil';
import { bookListAtom } from '../atoms/bookAtom';

export const bookSelector = selector({
  key: 'bookSelector',
  get: ({ get }) => {
    const items = get(bookListAtom);
    return items;
  },
});






  
  
  
  
  






  
  
  
  
  
  
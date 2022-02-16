import { getRandom } from '../utils/random_array_ele';
import { useReducer } from 'react';

const sortReducer = (state, action) => {
  switch (action.type) {
    case 'default': {
      return {
        sortedBooks: action.defaultBooks,
        sortingType: 'default',
      };
    }
    case 'popular': {
      return {
        sortedBooks: action.popularBooks,
        sortingType: 'popular',
      };
    }
    case 'ascending_alphabetically': {
      return {
        sortedBooks: action.ascendingAlphaBooks,
        sortingType: 'ascending_alphabetically',
      };
    }
    case 'descending_alphabetically': {
      return {
        sortedBooks: action.descendingAlphaBooks,
        sortingType: 'descending_alphabetically',
      };
    }
    case 'price_low_high': {
      return {
        sortedBooks: action.priceLowHigh,
        sortingType: 'price_low_high',
      };
    }
    case 'price_high_low': {
      return {
        sortedBooks: action.priceHighLow,
        sortingType: 'price_high_low',
      };
    }
    default: {
      return {
        sortedBooks: action.defaultBooks,
        sortingType: 'default',
      };
    }
  }
};

const useSort = (books) => {
  const [sortState, sortDispatch] = useReducer(sortReducer, {
    sortedBooks: books,
    sortingType: 'default',
  });
  const sortBooks = (sortType) => {
    if (sortType === 'default') {
      const defaultBooks = books;
      sortDispatch({ type: 'default', defaultBooks });
    } else if (sortType === 'popular') {
      const popularBooks = getRandom(books, books.length - 2).sort();
      sortDispatch({ type: 'popular', popularBooks });
    } else if (sortType === 'ascending_alphabetically') {
      const ascendingAlphaBooks = books.sort((book1, book2) =>
        book1.name > book2.name ? 1 : book2.name > book1.name ? -1 : 0,
      );
      sortDispatch({ type: 'ascending_alphabetically', ascendingAlphaBooks });
    } else if (sortType === 'descending_alphabetically') {
      const descendingAlphaBooks = books.sort().reverse();
      sortDispatch({
        type: 'descending_alphabetically',
        descendingAlphaBooks,
      });
    } else if (sortType === 'price_low_high') {
      const priceLowHigh = books.sort(
        (book1, book2) => book1.price - book2.price,
      );
      //priceLowHigh.forEach((ele) => console.log(ele));
      sortDispatch({ type: 'price_low_high', priceLowHigh });
    } else if (sortType === 'price_high_low') {
      const priceHighLow = books.sort(
        (book1, book2) => book2.price - book1.price,
      );
      sortDispatch({ type: 'price_high_low', priceHighLow });
    } else {
      const defaultBooks = books;
      sortDispatch({ type: 'default', defaultBooks });
    }
  };

  return {
    sortBooks,
    ...sortState,
  };
};

export default useSort;

/*

switch (sortType) {
      case 'default': {
        const defaultBooks = books;
        sortDispatch({ type: 'default', defaultBooks });
      }
      case 'popular': {
        const popularBooks = getRandom(books, books.length - 2).sort();
        sortDispatch({ type: 'popular', popularBooks });
      }
      case 'ascending_alphabetically': {
        const ascendingAlphaBooks = books.sort((book1, book2) =>
          (book1.name > book2.name ? 1 : (book2.name > book1.name ? -1 : 0)),
        );
        sortDispatch({ type: 'ascending_alphabetically', ascendingAlphaBooks });
      }
      case 'descending_alphabetically': {
        const descendingAlphaBooks = books.sort().reverse();
        sortDispatch({
          type: 'descending_alphabetically',
          descendingAlphaBooks,
        });
      }
      case 'price_low_high': {
        const priceLowHigh = books.sort(
          (book1, book2) => book1.price - book2.price,
          );
          //priceLowHigh.forEach((ele) => console.log(ele));
        sortDispatch({ type: 'price_low_high', priceLowHigh });
      }
      case 'price_high_low': {
        const priceHighLow = books.sort(
          (book1, book2) => book2.price - book1.price,
        );
        sortDispatch({ type: 'price_high_low', priceHighLow });
      }
      default: {
        const defaultBooks = books;
        sortDispatch({ type: 'default', defaultBooks });
      }
    }
*/

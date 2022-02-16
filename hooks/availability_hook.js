import { useCallback, useReducer } from 'react';

const availabilityReducer = (state, action) => {
  if (action.type === 'instock') {
    return {
      books: action.inStockBooks,
      available: true,
    };
  }

  if (action.type === 'outofstock') {
    return {
      books: action.outOfStockBooks,
      available: false,
    };
  }

  if (action.type === 'default') {
    return {
      books: action.books,
      available: null,
    };
  }
  console.log(`STATE: ${state}`);
  return state;
};

const useAvailability = (books) => {
  const [availabilityState, availabilityDispatch] = useReducer(
    availabilityReducer,
    {
      books,
      available: null,
    },
  );

  const filterBooks = (availabilityType) => {
    const avalType = availabilityType.trim().toLowerCase();
    if (avalType === 'instock') {
      const inStockBooks = books.filter((book) => book.inventory > 0);
      availabilityDispatch({ type: 'instock', inStockBooks });
    } else if (avalType === 'outofstock') {
      const outOfStockBooks = books.filter((book) => book.inventory <= 0);
      availabilityDispatch({ type: 'outofstock', outOfStockBooks });
    } else {
      availabilityDispatch({ type: 'default', books });
    }
  };

  return {
    filterBooks,
    ...availabilityState,
  };
};

export default useAvailability;

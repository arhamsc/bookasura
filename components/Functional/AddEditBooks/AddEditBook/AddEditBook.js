import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useReducer, useState } from 'react';
import { requestUrl } from '../../../../db/domain_url';

import styles from '../../Auth/SignUpForm/AuthForm.module.css';
import classes from './AddEditBook.module.css';

const formReducer = (state, action) => {
  if (action.type === 'name') {
    state.name = action.payload.name;
    return {
      ...state,
    };
  }
  if (action.type === 'price') {
    state.price = action.payload.price;
    return {
      ...state,
    };
  }
  if (action.type === 'description') {
    state.description = action.payload.description;
    return {
      ...state,
    };
  }
  if (action.type === 'category') {
    state.category = action.payload.category;
    return {
      ...state,
    };
  }
  if (action.type === 'inventory') {
    state.inventory = action.payload.inventory;
    return {
      ...state,
    };
  }
  if (action.type === 'imageUrl') {
    state.imageUrl = action.payload.imageUrl;
    return {
      ...state,
    };
  }
  return state;
};

const AddEditBook = ({ book }) => {
  const editMode = book ? true : false;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const initialData = editMode
    ? {
        name: book.name,
        price: book.price,
        description: book.description,
        category: book.category,
        inventory: book.inventory,
        imageUrl: book.imageUrl,
      }
    : {
        name: '',
        price: '',
        description: '',
        category: 'Fiction',
        inventory: '',
        imageUrl: '',
      };

  const [formData, dispatchFormData] = useReducer(formReducer, initialData);

  const setFormInputData = (event) => {
    dispatchFormData({
      type: event.target.name,
      payload: {
        [event.target.name]: event.target.value,
      },
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      if (!editMode) {
        const { data } = await axios.post(
          requestUrl('api/products'),
          {
            product: formData,
          },
          {
            'Content-Type': 'application/json',
          },
        );
        router.replace(`/books/${data.id}`);
      } else {
        const { data } = await axios.put(
          requestUrl(`api/products/${book._id}`),
          {
            product: formData,
          },
          {
            'Content-Type': 'application/json',
          },
        );
        router.replace(`/books/${data.id}`);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <section className={`${styles.form} ${classes.form2}`}>
      <h1>{editMode ? 'Edit' : 'Add'}</h1>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={setFormInputData}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            min={'10'}
            value={formData.price}
            onChange={setFormInputData}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={setFormInputData}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={setFormInputData}>
            <option value="Fiction" selected={formData.category === 'Fiction'}>
              Fiction
            </option>
            <option
              value="Non-Fiction"
              selected={formData.category === 'Non-Fiction'}
            >
              Non-Fiction
            </option>
            <option value="Manga" selected={formData.category === 'Manga'}>
              Manga
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="inventory">Inventory</label>
          <input
            type="number"
            min={'0'}
            id="inventory"
            name="inventory"
            value={formData.inventory}
            onChange={setFormInputData}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={setFormInputData}
          />
        </div>
        <div>
          <button>{isLoading ? 'Loading...' : 'Submit'}</button>
        </div>
      </form>
    </section>
  );
};

export default AddEditBook;

import React, { useEffect } from 'react';
import AddEditBook from '../../../components/Functional/AddEditBooks/AddEditBook/AddEditBook';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { isAuth } from '../../../helpers/from-end/is_auth';

const AddBook = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();

  const isAuthenticated = isAuth();
  useEffect(() => {
    if (user.role !== 'admin' || !isAuthenticated) {
      router.replace('/auth');
    }
  }, [user, router, isAuthenticated]);
  return (
    <main>
      <AddEditBook />
    </main>
  );
};

export default AddBook;

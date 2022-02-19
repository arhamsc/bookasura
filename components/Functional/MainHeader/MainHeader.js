import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './MainHeader.module.css';

import { Add, ShoppingCartOutlined } from '@material-ui/icons';
import Image from 'next/image';
import Logo from '../../../public/bookasura_logo.png';

import { isAuth, logout } from '../../../helpers/from-end/is_auth';
import { useDispatch } from 'react-redux';
import { userAction } from '../../../context/context-slices/user-slice';
import PCNavBar from '../../ChildComponents/PCNavBar/PCNavBar';
import MobileNavBar from '../../ChildComponents/MobileNavBar/MobileNavBar';
import { useSelector } from 'react-redux';

const MainHeader = () => {
  const router = useRouter();
  let isAuthenticated = isAuth();
  const dispatch = useDispatch();

  const role = useSelector((state) => state.user.role);

  const authPage = router.pathname.includes('auth');

  const authButtonHandler = (authType) => {
    if (authType === 'login') {
      router.push('/auth');
    }

    if (authType === 'logout') {
      logout();
      dispatch(userAction.logoutUser());
      router.replace('/');
    }
    return;
  };

  const loggedInIcons = (
    <div className={styles.logged__in__icons}>
      <Link href={'/cart'} passHref={true}>
        <ShoppingCartOutlined className={styles.icon} />
      </Link>
      <button
        className={styles.login__button}
        onClick={() => authButtonHandler('logout')}
      >
        Logout
      </button>
    </div>
  );

  return (
    <header className={styles.header}>
      <div className={styles.logo__div}>
        {role === 'admin' ? (
          <Link href={'/books/edit/add_book'} passHref={true}>
            <Add />
          </Link>
        ) : (
          <div></div>
        )}
        <Image
          src={Logo}
          alt="Booksasura_Logo"
          width={'100rem'}
          height={'60rem'}
        />
        {!authPage && isAuthenticated ? (
          loggedInIcons
        ) : !authPage ? (
          <button
            onClick={() => authButtonHandler('login')}
            className={styles.login__button}
          >
            Login
          </button>
        ) : (
          <div></div>
        )}
      </div>
      <PCNavBar />
      <MobileNavBar />
    </header>
  );
};

export default MainHeader;

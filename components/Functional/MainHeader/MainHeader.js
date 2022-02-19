import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './MainHeader.module.css';

import { ShoppingCartOutlined } from '@material-ui/icons';
import Image from 'next/image';
import Logo from '../../../public/bookasura_logo.png';

import { isAuth, logout } from '../../../helpers/from-end/is_auth';
import { useDispatch } from 'react-redux';
import { userAction } from '../../../context/context-slices/user-slice';

const MainHeader = () => {
  const router = useRouter();
  let isAuthenticated = isAuth();
  const dispatch = useDispatch();

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
        <div></div>
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
      <nav className={styles.navbar}>
        <ul>
          <li
            className={(router.pathname === '/' && styles.active__link) || ''}
          >
            <Link href={'/'}>Home</Link>
          </li>

          <li
            className={
              (router.pathname === '/all_books' && styles.active__link) || ''
            }
          >
            <Link href={'/all_books'}>All Books</Link>
          </li>
          <li
            className={
              (router.pathname === '/fiction_books' && styles.active__link) ||
              ''
            }
          >
            <Link href={'/fiction_books'}>Fiction</Link>
          </li>
          <li
            className={
              (router.pathname === '/non_fiction' && styles.active__link) || ''
            }
          >
            <Link href={'/non_fiction'}>Non-Fiction</Link>
          </li>
          <li
            className={
              (router.pathname === '/manga' && styles.active__link) || ''
            }
          >
            <Link href={'/manga'}>Manga</Link>
          </li>
          <li
            className={
              (router.pathname === '/about_us' && styles.active__link) || ''
            }
          >
            <Link href={'/about_us'}>About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

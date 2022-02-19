import React, { useState } from 'react';
import Link from 'next/link';

import styles from './MobileNavBar.module.css';
import { useRouter } from 'next/router';
import { MenuOutlined } from '@material-ui/icons';

import { isAuth, logout } from '../../../helpers/from-end/is_auth';
import { useDispatch } from 'react-redux';
import { userAction } from '../../../context/context-slices/user-slice';

const MobileNavBar = () => {
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

  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    showNav ? setShowNav(false) : null;
    !showNav ? setShowNav(true) : null;
  };

  if (typeof window !== 'undefined') {
    router.events.on('routeChangeComplete', () => {
      setShowNav(false);
    });
  }

  return (
    <section className={styles.navbar__section}>
      <div className={styles.menu__icon} onClick={showNavHandler}>
        <MenuOutlined />
      </div>
      <nav className={`${styles.navbar} ${showNav && styles.activeNav}`}>
        <ul>
          <li>
            {!authPage && !isAuthenticated && (
              <button onClick={() => authButtonHandler('login')}>Login</button>
            )}
            {!authPage && isAuthenticated && (
              <button onClick={() => authButtonHandler('logout')}>
                Logout
              </button>
            )}
          </li>
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
    </section>
  );
};

export default MobileNavBar;

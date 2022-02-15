import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './MainHeader.module.css';

import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import Image from 'next/image';
import Logo from '../../../public/bookasura_logo.png';

const MainHeader = ({ showSearchHandler }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.logo__div}>
        <Search className={styles.icon} onClick={showSearchHandler} />
        <Image
          src={Logo}
          alt="Booksasura_Logo"
          width={'100rem'}
          height={'60rem'}
        />
        <ShoppingCartOutlined className={styles.icon} />
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
              (router.pathname === '/orders' && styles.active__link) || ''
            }
          >
            <Link href={'/orders'}>Fiction</Link>
          </li>
          <li
            className={
              (router.pathname === '/orders' && styles.active__link) || ''
            }
          >
            <Link href={'/orders'}>Non-Fiction</Link>
          </li>
          <li
            className={
              (router.pathname === '/orders' && styles.active__link) || ''
            }
          >
            <Link href={'/orders'}>Manga</Link>
          </li>
          <li
            className={
              (router.pathname === '/about' && styles.active__link) || ''
            }
          >
            <Link href={'/about'}>About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

import React from 'react';
import Link from 'next/link';

import styles from './PCNavBar.module.css';
import { useRouter } from 'next/router';

const PCNavBar = () => {
  const router = useRouter();

  return (
    
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
  );
};

export default PCNavBar;

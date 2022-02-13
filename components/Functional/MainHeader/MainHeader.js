import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './MainHeader.module.css';

import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import Image from 'next/image';
import Logo from '../../../public/bookasura_logo.png';
const MainHeader = () => {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.logo__div}>
        <Search className={styles.icon} />
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
          <li className={router.pathname === '/' && styles.active__link}>
            <Link href={'/'}>Home</Link>
          </li>
          <li className={router.pathname === '/about' && styles.active__link}>
            <Link href={'/about'}>About</Link>
          </li>
          <li className={router.pathname === '/about' && styles.active__link}>
            <Link href={'/about'}>View Products</Link>
          </li>
          <li className={router.pathname === '/orders' && styles.active__link}>
            <Link href={'/orders'}>View Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;

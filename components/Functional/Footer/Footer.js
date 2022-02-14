import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

import { GitHub, Mail, PhoneAndroidOutlined } from '@material-ui/icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className={styles.footer}>
      {/* Row 1 */}
      <div className={styles.footer__contents}>
        {/* Column 1 */}
        <div className={styles.footer__menu}>
          <p className={styles.footer__heading}>Menu</p>
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/about'}>View Products</Link>
            </li>
            <li>
              <Link href={'/orders'}>View Orders</Link>
            </li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className={styles.footer__logo}>
          <Image src="https://i.ibb.co/ZSSxt99/onlybook.png" alt="logo" width={"200%"} height={"200%"}/>
        </div>
        {/* Column 3 */}
        <div className={styles.contact__us}>
          <p className={styles.footer__heading}>Contact Us</p>
          <p>
            <a href="mailto:shaik.arham@gmail.com">
              <Mail className={styles.icon} /> shaik.arham@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+919880151166">
              <PhoneAndroidOutlined className={styles.icon} /> +91 9880151166
            </a>
          </p>
        </div>
      </div>
      {/* Row 2 */}
      <div className={styles.footer__social}>
        <ul>
          <li>
            <a href="https://github.com/arhamsc">
              <GitHub />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;

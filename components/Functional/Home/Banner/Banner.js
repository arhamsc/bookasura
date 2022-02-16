import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Banner.module.css';

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.intro__card}>
        <div>
          <h2>Are you a, Bookasura too?</h2>
          <p>Relish your mind with these books.</p>
          <button>
            <Link href={'/all_books'}>Lets Read</Link>
          </button>
        </div>
      </div>
      <div className={styles.intro__image}>
        <Image
          src={'https://i.ibb.co/hBGy7H4/book-image.jpg'}
          alt={'book'}
          layout={'fill'}
          className={styles.image}
        />
      </div>
    </section>
  );
}

export default Banner;

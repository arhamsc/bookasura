import Image from 'next/image';
import React from 'react';

import Logo from '../../../../public/bookasura_logo.png';

import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about__overview}>
      <div className={styles.about__us__heading}>
        <p>About Us</p>
      </div>

      <div className={styles.about__us__content}>
        <p>
          Bookasura is a brand for the book enthusiasts by books enthusiasts.
          Our goal is satisfy your hunger for books. We are operating with the
          same goal in place and serving a lots a <i>Bookasuras</i> everyday.
        </p>
      </div>
      {/* Image */}
      <div className={styles.logo}>
        <Image src={Logo} alt={'Logo'} width={'300%'} height={'200%'} />
      </div>
      <div className={styles.tag__line}>
        <p>
          Are you also a Bookasura? <br />
          Then this is the place for you.
        </p>
      </div>
    </section>
  );
};

export default About;

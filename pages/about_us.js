import React from 'react';
import About from '../components/Functional/MainPages/AboutUs/About/About';
import Quote from '../components/Functional/Home/Quote/Quote';
import ContactUs from '../components/Functional/MainPages/AboutUs/ContactUs/ContactUs';
import Head from 'next/head';

import homeStyles from '../styles/Home.module.css';

const AboutUS = () => {
  return (
    <main>
      <Head>
        <title>About Bookasura</title>
        <meta name="description" content="Know a little bit about bookasura." />
      </Head>
      <About />
      <section
      className={homeStyles.about__us__padding}
        
        
      
      
      >
        <Quote />
      </section>
      <ContactUs />
    </main>
  );
};

export default AboutUS;

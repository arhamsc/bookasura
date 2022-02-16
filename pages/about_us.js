import React from 'react';
import About from '../components/Functional/AboutUs/About/About';
import Quote from '../components/Functional/Home/Quote/Quote';
import ContactUs from '../components/Functional/AboutUs/ContactUs/ContactUs';

const AboutUS = () => {
  return (
    <main>
      <About />
      <section
        style={{
          marginBottom: '20rem',
        }}
      >
        <Quote />
      </section>
      <ContactUs />
    </main>
  );
};

export default AboutUS;

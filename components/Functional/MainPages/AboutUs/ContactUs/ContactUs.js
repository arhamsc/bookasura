import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(
        'https://sheet.best/api/sheets/6ee71d1a-1fd7-4855-8fba-570e709ada4d',
        {
          name,
          phone,
          email,
          query,
        },
        {
          'Content-Type': 'application/json',
        },
      );
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
    setName('');
    setPhone('');
    setEmail('');
    setQuery('');
  };
  return (
    <section className={styles.contact__us}>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn about Bookasura and contact us if any query"
        />
      </Head>
      {/* Heading */}
      <div className={styles.contact__us__heading}>
        <p>Contact Us</p>
        <p>
          Have a query? Feel free to contact us, we will surely get back to you.
        </p>
      </div>
      {/* Form */}
      <div className={styles.contact__form__div}>
        <form onSubmit={submitHandler}>
          {/* Name and Email */}
          <div className={styles.name__email}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className={styles.phone}>
            <input
              type="tel"
              name="phone"
              value={phone}
              id="phone"
              placeholder="Phone"
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
          <div className={styles.query}>
            <textarea
              style={{
                width: '100%',
                height: '5rem',
              }}
              name="query"
              id="query"
              value={query}
              placeholder="Query"
              onChange={(event) => setQuery(event.target.value)}
              required
            ></textarea>
          </div>
          <div className={styles.send__button}>
            <button disabled={isLoading}>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

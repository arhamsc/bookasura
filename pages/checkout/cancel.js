import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { isAuth } from '../../helpers/from-end/is_auth';

const CancelPage = () => {
  const router = useRouter();
  let isAuthenticated = isAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/auth');
    }
  }, [isAuthenticated, router]);
  return (
    <main>
      <Head>
        <title>Payment Cancelled</title>
      </Head>
      <section
        style={{
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            color: 'red',
          }}
        >
          Something went wrong with the checkout
        </h1>
        <p
          style={{
            paddingBottom: '2rem',
          }}
        >
          Please try again
        </p>
        <form action="/">
          <button
            style={{
              background: '#f27f34',
              border: 'none',
              fontSize: '2rem',
              color: 'white',
              fontFamily: 'inherit',
              padding: '1rem 2rem',
            }}
          >
            Go to Home
          </button>
        </form>
      </section>
    </main>
  );
};

export default CancelPage;

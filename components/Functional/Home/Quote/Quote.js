import React from 'react';

import styles from './Quote.module.css';

const Quote = () => {
  return (
    <section className={styles.quote}>
      <figure>
        <q>
          The figure element represents some flow content, optionally with a
          caption, that is self-contained and is typically referenced as a
          single unit from the main flow of the document.
        </q>
        <figcaption>Charles W. Eliot</figcaption>
      </figure>
    </section>
  );
}

export default Quote
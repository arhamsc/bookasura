import React from 'react';
import styles from './CategoryNavigation.module.css';

import NavigationCard from '../../../UI/NavigationCard/NavigationCard';

const CategoryNavigation = () => {
  return (
    <section className={styles.category__navigation}>
      <NavigationCard
        categoryName={'Fiction'}
        imageUrl={
          'https://i.ibb.co/xD99JyP/madalyn-cox-Vk-GGIZul-OE0-unsplash.jpg'
        }
      />
      <NavigationCard
        categoryName={'Manga'}
        imageUrl={
          'https://upload.wikimedia.org/wikipedia/en/9/9a/Guilty_Crown_Blu-ray_Volume_1.jpg'
        }
      />
      <NavigationCard
        categoryName={'Non-Fiction'}
        imageUrl={
          'https://i.ibb.co/GsqXjY9/shiromani-kant-Hqbkgga0r-NQ-unsplash.jpg'
        }
      />
    </section>
  );
}

export default CategoryNavigation
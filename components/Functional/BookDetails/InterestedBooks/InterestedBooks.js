import React from 'react'
import { getRandom } from '../../../../utils/random_array_ele'
import ProductShowcase from '../../Home/ProductShowcase/ProductShowcase'

const InterestedBooks = ({books}) => {
  const popularBooks = getRandom(books, 4);
  return (
    <ProductShowcase popularBooks={popularBooks} />
  )
}

export default InterestedBooks
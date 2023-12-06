import { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
      quantity: 1,
      totalItemPrice: price
    };
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 px-4 pt-10 pb-6">
      <p className="absolute top-2 right-2 text-xs text-gray-400">{category}</p>
      <Image
        src={image}
        height={150}
        width={150}
        className='mx-auto my-auto'
        alt={title}
      />
      <h4 className="mt-5 mb-3">{title}</h4>
      {/* <div className="flex"> */}
        {/* {Array(rating).fill().map((_, i) => (
          // <StarIcon key={i} className="h-5 text-yellow-500" />
          // <p>x</p>
        ))} */}

        {/* {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} className="h-5 text-yellow-500" />
        ))} */}
      {/* </div> */}
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <NumericFormat
          value={price}
          displayType={'text'}
          prefix={'$'}
          thousandSeparator={true}
          decimalScale={2}
          fixedDecimalScale
        />
      </div>
      {/* {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )} */}
      <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;

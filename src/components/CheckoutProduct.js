import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import NumberFormat from "react-number-format";

import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
  quantity, 
  totalItemPrice
}) {
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
      quantity: 1
    };

    dispatch(addToBasket(product));
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  }

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating).fill().map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">
          {description}
        </p>
        <p>Quantity: {quantity}</p>
        <NumberFormat
          value={totalItemPrice}
          displayType={'text'}
          prefix={'$'}
          thousandSeparator={true}
          decimalScale={2}
          fixedDecimalScale={true}
        />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free next day delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button px-7" onClick={addItemToBasket}>+</button>
        <button className="button px-7" onClick={removeItemFromBasket}>-</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

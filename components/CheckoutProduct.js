import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
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
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5 mb-12 last:mb-4">
      <Image
        src={image}
        height={150}
        width={150}
        alt={title}
      />

      <div className="col-span-4 ml-8 mr-5">
        <p>{title}</p>

        {/* <div className="flex">
          {Array(rating).fill().map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
        </div> */}

        <p className="text-xs my-2 line-clamp-3">
          {description}
        </p>

        <div className="flex justify-between">
          <div>
            <p>Quantity: {quantity}</p>
            <NumericFormat
              value={totalItemPrice}
              displayType={'text'}
              prefix={'$'}
              thousandSeparator={true}
              decimalScale={2}
              fixedDecimalScale={true}
            />
            {/* {hasPrime && (
              <div className="flex items-center space-x-2">
                <img
                  loading="lazy"
                  className="w-12"
                  src="https://links.papareact.com/fdw"
                  alt=""
                />
                <p className="text-xs text-gray-500">Free next day delivery</p>
              </div>
            )} */}
          </div>

          <div className="flex h-fit font-semibold gap-x-2">
            <button className="button w-8" onClick={addItemToBasket}>+</button>
            <button className="button w-8" onClick={removeItemFromBasket}>-</button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default CheckoutProduct;

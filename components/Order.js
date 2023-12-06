import moment from "moment";
import { NumericFormat } from "react-number-format";

function Order({ id, amount, amountShipping, items, timestamp, images, name }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div className="mt-5">
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
        </div>
        <div className="mt-5">
          <p className="font-bold text-xs">TOTAL</p>
          <p>
            <NumericFormat
              value={amount}
              displayType={'text'}
              prefix={'$'}
              thousandSeparator={true}
            />
            {' '} - Next Day Delivery {' '}
            <NumericFormat
              value={amountShipping}
              displayType={'text'}
              prefix={'$'}
              thousandSeparator={true}
            />
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-lg self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          <div className="flex space-x-10">
            {images.map(image => (
              <img className="h-20 w-20 object-contain sm:h-32" src={image} alt="" />
            ))}
          </div>
          <div>{name}</div>
        </div>
      </div>
    </div>
  );
}

export default Order;
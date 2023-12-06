import { Fragment } from 'react';
import Head from 'next/head';
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems, selectTotalPrice, selectTotalQuantity } from '../slices/basketSlice';
import { NumericFormat } from 'react-number-format';
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Footer from '../components/Footer';

const stripePromise = loadStripe(process.env.stripe_public_key.toString());

function Checkout() {
  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantity = useSelector(selectTotalQuantity);

  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
      email: session.user.email
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-100 h-full">
      <Head>
        <title>Amazon.com Shopping Basket</title>
      </Head>

      <Header />

      <main className="grid grid-cols-8 max-w-screen-2xl mx-auto my-8">
        <div className="col-span-full lg:col-span-6 mx-5">
          <Image
            // src='https://links.papareact.com/ikj'
            src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/falkor/gtm/reader/batch2/KBHPBanners/KV_Reader_Launch_KBHP_Desktop_2x_3000x600.jpg'
            width={1400}
            height={250}
            alt="Amazon illustration"
          />
          
          <div className="flex flex-col p-5 mt-4 bg-white rounded-md">
            <h1 className="text-2xl border-b pb-4 mb-8">{items.length === 0 ? 'Your Amazon Basket is empty' : 'Shopping Basket'}</h1>
            
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                quantity={item.quantity}
                totalItemPrice={item.totalItemPrice}
              />
            ))}
          </div>
        </div>

        <div className="col-span-full h-fit lg:col-span-2 bg-white p-5 rounded-md shadow-md mx-5 mt-5 lg:mt-0">
          {items.length === 0 && (
            <Fragment>
              <h2 className="whitespace-nowrap">Subtotal: {' '}
                <span className="font-bold">
                  <NumericFormat
                    value={0}
                    displayType={'text'}
                    prefix={'$'}
                    thousandSeparator={true}
                  />
                </span>
              </h2>
            </Fragment>
          )}
          
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">Subtotal ({totalQuantity} items) : {' '}
                <span className="font-bold">
                  <NumericFormat
                    value={totalPrice}
                    displayType={'text'}
                    prefix={'$'}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale
                  />
                </span>
              </h2>
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Checkout;

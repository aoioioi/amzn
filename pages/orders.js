import Header from "../components/Header";
import Order from '../components/Order';
import Head from 'next/head';
import { getSession, useSession, signIn, signOut } from 'next-auth/react';
import db from '../firebase';
import moment from 'moment';
import Footer from "../components/Footer";

function Orders({ orders }) {
	const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Amazon.com Orders</title>
      </Head>

      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-2xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>

        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <div>
            <h2>Please log in to see your orders.</h2>
            <button className="button my-5" onClick={!session ? signIn : signOut}>Sign In</button>
            <a className="text-sm" href="/">Don't have an account? Click here to sign up.</a>
          </div>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map(order => (
            <Order
              key={order.id}
              id={order.id}
              amount={order.amount}
              amountShipping={order.amountShipping}
              items={order.items}
              images={order.images}
              timestamp={order.timestamp}
              name={order.name}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  const session = await getSession(context);

  if (!session) {
    return {
      props: {}
    };
  }

  const stripeOrders = await db
    .collection('users')
    .doc(session.user.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders: orders
    }
  };
}

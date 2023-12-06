import Head from 'next/head';

import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';
import Footer from '../components/Footer';

import { getSession } from 'next-auth/react';

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon.com. Spend less. Smile more.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const products = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .catch(err => {
      return [];
    });

  return {
    props: {
      products: products,
      session: session
    },
  };
}

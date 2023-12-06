import Header from '../components/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function Success() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Amazon.com Checkout Successful</title>
      </Head>

      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white mt-8 mx-3 rounded-md">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-2xl">Thanks, your order was received!</h1>
          </div>
          <p>
            Thanks for shopping with us. You should receive an email with your tracking details once your item has shipped.
          </p>
          <button
            onClick={() => router.push('/orders')}
            className="button mt-8"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  )
}

export default Success;

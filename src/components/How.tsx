import React from 'react';
import { useState } from 'react';
import heroImg from './heroImg.png';

const How = () => {
  const [activeTab, setActiveTab] = useState('productListing');

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <header className="w-full py-6 ">
        <h1 className="text-center text-xl font-semibold text-primaryBtn">
          Comment ça marche ?{' '}
        </h1>
        <p className="text-center text-3xl text-secondary text-2xl font-bold font-inter mt-2">
          Débloquez plus de ventes en 3 étapes faciles.
        </p>
      </header>

      <nav className="flex mt-8 space-x-4 bg-violetaClear px-2 py-2 rounded-full">
        <button
          onClick={() => setActiveTab('productListing')}
          className={`text-1xl font-semibold px-4 py-3 rounded-full ${
            activeTab === 'productListing'
              ? 'bg-primaryBtn text-white'
              : ' text-gray-700'
          }`}
        >
          Personnalisez votre popup
        </button>
        <button
          onClick={() => setActiveTab('productDetail')}
          className={`text-1xl font-semibold px-4 py-3 rounded-full ${
            activeTab === 'productDetail'
              ? 'bg-primaryBtn text-white'
              : ' text-gray-700'
          }`}
        >
          Intègrez le script
        </button>
        <button
          onClick={() => setActiveTab('productCheckout')}
          className={`text-1xl font-semibold px-4 py-3  rounded-full ${
            activeTab === 'productCheckout'
              ? 'bg-primaryBtn text-white 	 '
              : ' text-gray-700'
          }`}
        >
          Augmentez vos ventes
        </button>
      </nav>

      <main className="mt-12 flex flex-col items-center">
        {activeTab === 'productListing' && (
          <div className="bg-gray-50  rounded-lg p-6 w-3/4 flex">
            <div className="flex-1 flex justify-center">
              <div className=" w-3/4 h-48 rounded-md flex items-center justify-center">
                <img
                  src={heroImg}
                  alt="Product Listing"
                  className="w-150 h-150"
                />
              </div>
            </div>
            <div className="flex-1 ml-6">
              <h2 className="text-xl font-bold text-secondary mb-2">
                Gagner des clients grâce à l'authenticité{' '}
              </h2>
              <p className="text-gray-600 mb-4">
                Use the wisdom of the crowd to encourage visitors. Showcase
                popular products to trigger FOMO and leverage live visitors to
                generate curiosity about your
              </p>
              <button className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300   px-6 py-2 bg-primaryBtn text-white rounded-lg shadow-xl pb-3 mt-5">
                Commencer
              </button>
            </div>
          </div>
        )}

        {activeTab === 'productDetail' && (
          <div className="bg-gray-50  rounded-lg p-6 w-3/4  flex">
            <div className="flex-1 flex justify-center">
              <div className="w-3/4 h-48 rounded-md flex items-center justify-center">
                <img
                  src={heroImg}
                  alt="Product Detail"
                  className="w-150 h-150"
                />
              </div>
            </div>
            <div className="flex-1 ml-6">
              <h2 className="text-xl text-secondary  font-bold mb-2">
                Say goodbye to checkout stress
              </h2>
              <p className="text-gray-600 mb-4">
                Drive revenue with scarcity and free shipping. Create FOMO with
                low-stock notifications & prompt customers to hit the "BUY NOW"
                button & complete checkout.
              </p>
              <button className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300   px-6 py-2 bg-primaryBtn text-white shadow-xl rounded-lg pb-3 mt-5">
                Commencer
              </button>
            </div>
          </div>
        )}

        {activeTab === 'productCheckout' && (
          <div className="bg-gray-50  rounded-lg p-6 w-3/4 flex mb-10">
            <div className="flex-1 flex justify-center">
              <div className=" w-3/4 h-48 rounded-md flex items-center justify-center">
                <img
                  src={heroImg}
                  alt="Product Checkout"
                  className="w-150 h-150"
                />
              </div>
            </div>
            <div className="flex-1 ml-6">
              <h2 className="text-xl font-bold text-secondary mb-2">
                Make Your Business Great Again
              </h2>
              <p className="text-gray-600 mb-4">
                Enjoy a seamless and secure checkout experience. Ensure your
                customers feel confident and satisfied with their purchase
                decisions.
              </p>
              <button className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300    px-6 py-2 bg-primaryBtn text-white shadow-xl rounded-lg pb-3 mt-5">
                Commencer
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default How;

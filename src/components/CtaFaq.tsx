import React from 'react';

const CtaFaq = () => {
  return (
    <div>
      <div className="flex mx-auto  bg-violet-100 w-8/12 h-64 rounded-3xl relative  px-8 mt-4 mb-24 ">
        <h1 className="font-semibold text-secondary pt-8">
          Augmentez instantanément votre taux de conversion
        </h1>
        <div>
          <button className=" transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300    px-6 py-2 bg-primaryBtn text-white shadow-xl rounded-lg pb-3 mt-5">
            Obtenir la popup
          </button>
        </div>{' '}
      </div>
    </div>
  );
};

export default CtaFaq;


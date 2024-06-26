import React from 'react';

const CssGrid = () => {
  return (
    <div>
      <h1 className="text-center text-primary  py-7 font-medium text-base">
        Le moyen le plus rapide d'augmenter vos ventes.
      </h1>
      <div className="max-w-2xl px-4 py-8 lg-max-w7x1 grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-8 lg:grid-cols-3 xl-grid-cols-4">
        <div className="bg-white shadow-lg rounded-lg">
          <img
            src="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg"
            alt=""
            className="rounded-t-lg w-full h-12 object-cover object-center"
          />

          <div className="p-4">
            <div className="flex mb-5 ">
              <h3 className="text-2xl">eree</h3>
              <p className="mt-1 ml-auto text-lg font-medium">55</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-between px-5 py-1 shadow-sm rounded-md bg-blue-300"
            >
              <span className="text-lg">Click</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssGrid;

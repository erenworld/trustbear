import React from 'react';

const Form = () => {
  return (
    <div>
      <div className=" ">
        <form action="">
          <div className="relative mt-8 max-w-sm mx-auto">
            <input
              name="email"
              className="pr-24 focus:outline-none focus:ring focus:ring-violet-300 p-4 w-full bg-white rounded-lg"
              type="email"
              placeholder="you@example.com"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primaryBtn text-white px-3 py-2 rounded"
            >
              Commencer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

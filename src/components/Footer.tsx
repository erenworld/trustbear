import React from 'react';

const Footer = () => {
  return (
    <div className="container relative mx-auto ">
      <div className="h-28 flex justify-between  border-t-2 border-gray-100 pt-9 text-gray-400 items-center">
        <div className="">
          <a href="" className="text-xl">
            <img
              src="https://asset.brandfetch.io/idWfyG1b10/idEAu1lhUl.svg"
              alt=""
              className="w-20 h-20 hover:text-zinc-600"
            />
          </a>
        </div>
        <div>
          <span>
            © 2024 Trustbear.{' '}
            <a
              href=""
              className="underline decoration-slate-300 hover:text-gray-500"
            >
              Terms
            </a>{' '}
            &{' '}
            <a
              href=""
              className="underline decoration-slate-300 hover:text-gray-500"
            >
              Privacy
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Mission = () => {
  return (
    <div className="bg-red-500 h-96">
      <nav className="relative container mx-auto  ">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img
              src="https://asset.brandfetch.io/idWfyG1b10/idEAu1lhUl.svg"
              alt="logo"
              width={100}
            />
          </div>
          {/* menu */}
          <div className="hidden md:flex space-x-5">
            <a href="">Product</a>
            <a href="">Product</a>
            <a href="">Product</a>
            <a href="">Product</a>
            <a href="">Product</a>
          </div>
          <a href="" className="hidden md:block  p-3 px-6 pt-2 text-grey">
            Click
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Mission;

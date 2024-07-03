const Hero = () => {
  return (
    <div className="container mx-auto mt-24">
      <div className="text-center relative">
        <h2 className="font-PTserif text-4xl font-bold text-primary">
          Rencontrez le widget
        </h2>
        <p className="text-secondary font-roboto mt-3">
          C'est convivial, rapide et léger.
        </p>
        <span>
          <svg
            width="42"
            height="61"
            viewBox="0 0 42 61"
            fill="none"
            className="css-6z3v8v absolute left-96 "
          >
            <path
              d="M27.147 3.228C7.794 18.443 6.296 44.021 21.7 56.675m0 0l-.081-6.964m.08 6.964l-6.2.898"
              stroke="#FF6A00"
              stroke-width="2"
            ></path>
          </svg>
        </span>
      </div>
      <div>
        <div className="bg-white-500 rounded-xl shadow-lg w-56 h-28 mt-8  mx-auto">
          <div className="text-center">
            <h2>Dis-moi tout</h2>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="flex flex-col">
              <span>ERE</span>
              <button>Problème</button>
            </div>
            <div className="flex flex-col">
              <span>RERE</span>
              <button>Idée</button>
            </div>
            <div className="flex flex-col">
              <span>eRE</span>
              <button>Autre</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-gradient-to-r from-violeta from-20% via-rose via-60% to-beige to-100%  pt-16  px-20 mx-auto  md:flex h-screen w-screen m-auto">
    //   {/*  xl:px-28 */}
    //   <div className="flex-row text-center ">
    //     <h1 className="font-Inter justify-center text-center  text-primaryBtn text-lg font-semibold">
    //       Le moyen le plus rapide d'augmenter vos ventes
    //     </h1>
    //     <div className="">
    //       <h1 className="font-bold mt-5 text-5xl font-Inter text-secondary">
    //         Créez instantanément la{' '}
    //         <span className="text-primaryBtn">confiance.</span>
    //       </h1>
    //       <p className="mt-6 font-Inter text-base font-medium text-secondarygrey w-auto leading-6 px-28">
    //         Augmentez facilement vos ventes en affichant les transactions
    //         récentes dans une fenêtre contextuelle à laquelle les utilisateurs
    //         font confiance. Personnalisez-la, copiez le script et c'est parti !
    //         Oui, c'est aussi simple que ça.
    //       </p>
    //     </div>
    //     <div>
    //       <Form />
    //     </div>
    //     <div className="flex justify-center items-center">
    //       <a href="">
    //         <img src={heroImg} alt="" className="mt-12 drop-shadow-2xl " />
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;

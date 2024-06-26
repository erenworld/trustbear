import React from 'react';
import heroImg from './heroImg.png';
import Form from './Form';

const Hero = () => {
  return (
    <div className=" hidden mt-20 md:flex h-24 px-10 xl:px-28  max-w-screen-2xl m-auto ">
      <div className="flex-row text-center ">
        <h1 className="font-Inter justify-center text-center  text-primaryBtn text-lg font-semibold">
          Le moyen le plus rapide d'augmenter vos ventes
        </h1>
        <div className="">
          <h1 className="font-bold mt-5 text-5xl font-Inter text-secondary">
            Créez instantanément la{' '}
            <span className="text-primaryBtn">confiance.</span>
          </h1>
          <p className="mt-6 font-Inter text-base font-medium text-secondarygrey w-auto leading-6">
            Augmentez facilement vos ventes en affichant les transactions
            récentes dans une fenêtre contextuelle à laquelle les utilisateurs
            font confiance. Personnalisez-la, copiez le script et c'est parti !
            Oui, c'est aussi simple que ça.
          </p>
        </div>
        <div>
          <Form />
        </div>
        <div className="flex justify-center items-center">
          <a href="">
            <img src={heroImg} alt="" className="mt-12 drop-shadow-2xl " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

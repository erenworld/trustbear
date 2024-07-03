const Why = () => {
  return (
    <div className=" bg-gray-50 flex flex-col items-center pb-28 ">
      <header className="w-full py-6 mt-10 ">
        <h1 className="text-center text-xl font-semibold text-primaryBtn">
          Pourquoi cela fonctionne si bien ?{' '}
        </h1>
        <p className="text-center text-3xl text-secondary  font-bold font-inter ">
          Le secret des meilleurs entreprises
        </p>
      </header>
      <div className="w-96 mx-auto w-">
        <p className="w-51 mb-4 mt-5 text-secondary">
          {' '}
          La preuve sociale est le premier moyen le plus simple d'augmenter vos
          ventes. Des études montrent qu'
          <span className="font-semibold text-secondary">
            elle peut augmenter le taux de conversion jusqu'à 35 %.
          </span>
        </p>
        <p className="w-51 mb-4 mt-5 text-secondary">
          Mais une bonne preuve sociale est difficile à obtenir,{' '}
          <span className="font-semibold text-secondary">
            {' '}
            99% des clients ne laisseront jamais de témoignage même s'ils aiment
            le produit.
          </span>
        </p>
        <p className="w-51 mb-4 mt-5 text-secondary">
          <span className="font-semibold text-secondary mr-1">
            Avec Trustbear, tout achat devient une preuve sociale.
          </span>
          L'application collecte les activités sur votre site et les affiche
          dans une belle fenêtre contextuelle à l'attention de tous vos
          visiteurs.
        </p>
        <p className="w-51 mb-4 mt-5 text-secondary">
          C'est l'équivalent de voir une énorme file d'attente devant un
          restaurant.{' '}
          <span className="font-semibold text-secondary">
            Si tant de gens attendent, c'est que c'est bon, n'est-ce pas ?
          </span>
        </p>
        <p className="w-51 mb-4 mt-5 text-secondary">
          Le simple fait d'ajouter des fenêtres contextuelles de vente{' '}
          <span className="font-semibold text-secondary">
            peut augmenter le taux de conversion de 15 à 20 %.{' '}
          </span>
        </p>
      </div>
      <button className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300    px-6 py-2 bg-primaryBtn text-white shadow-xl rounded-lg pb-3 mt-5">
        Obtenir la popup
      </button>
    </div>
  );
};

export default Why;

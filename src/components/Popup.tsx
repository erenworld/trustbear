const Popup = () => {
  return (
    <div>
      <div className=" p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 bottom-2 left-2  fixed">
        <div className="shrink-0">
          <img
            src="https://assets.hermes.com/is/image/hermesproduct/sneakers-free--222831ZH90-worn-3-0-0-800-800_g.jpg"
            alt="sneaker"
            className="w-12 h-12  rounded"
          />
        </div>
        <div>
          <div className=" font-medium text-black bg-eren">
            18 personnes ont acheté ce produit dans les dernières 24 heures
          </div>
          <p className="text-slate-500 mt-1">Vérifié par Trustbear</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;

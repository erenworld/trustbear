const Inspiration = () => {
  return (
    <div className="container bg-white mx-auto flex flex-col items-center pb-20  ">
      <header className="w-full py-6 mt-10 ">
        <h1 className="text-center text-xl font-semibold text-primaryBtn">
          Influence les visiteurs{' '}
        </h1>
        <p className="text-center text-3xl text-secondary  font-bold font-inter mt-2">
          La confiance est la clé du succès{' '}
        </p>
      </header>
      {/* cards */}
      <div className="bg-blue-50 rounded-xl relative w-/6 h-40 px-8 grid grid-cols-2 items-center mt-12">
        <div>
          <h1 className="font-semibold text-secondary mb-3 text-2xl mt-1">
            L'effet du bouche à oreille{' '}
          </h1>
          <p className="text-secondary w-96">
            Créez un sentiment d'urgence et motivez les utilisateurs à effectuer
            un achat en présentant les ventes récentes et le comptoir des
            ventes.
          </p>
        </div>
        <div>
          <img
            src="https://wisernotify.com/wp-content/uploads/2023/06/box-noti1.svg"
            alt=""
            className="float-right"
          />
        </div>
      </div>
      <div className="bg-green-50 rounded-xl relative w-/6 h-40 px-8 grid grid-cols-2 items-center mt-12">
        <div>
          <h1 className="font-semibold text-secondary mb-2 text-2xl mt-1">
            Activités de vente
          </h1>
          <p className="text-secondary w-96">
            Créez un sentiment d'urgence et motivez les utilisateurs à effectuer
            un achat en présentant les ventes récentes et le comptoir des
            ventes.
          </p>
        </div>
        <div>
          <img
            src="https://wisernotify.com/wp-content/uploads/2023/06/box-noti2.svg"
            alt=""
            className="float-right"
          />
        </div>
      </div>
      <div className="bg-orange-50 rounded-xl relative w-/6 h-40 px-8 grid grid-cols-2 items-center mt-12">
        <div>
          <h1 className="font-semibold text-secondary mb-2 text-2xl mt-1">
            Activités de vente
          </h1>
          <p className="text-secondary w-96">
            Créez un sentiment d'urgence et motivez les utilisateurs à effectuer
            un achat en présentant les ventes récentes et le comptoir des
            ventes.
          </p>
        </div>
        <div>
          <img
            src="https://wisernotify.com/wp-content/uploads/2023/06/box-noti5.svg"
            alt=""
            className="float-right"
          />
        </div>
      </div>
      <div className="bg-red-50 rounded-xl relative w-/6 h-40 px-8 grid grid-cols-2 items-center mt-12">
        <div>
          <h1 className="font-semibold text-secondary mb-2 text-2xl mt-1">
            Activités de vente
          </h1>
          <p className="text-secondary w-96">
            Créez un sentiment d'urgence et motivez les utilisateurs à effectuer
            un achat en présentant les ventes récentes et le comptoir des
            ventes.
          </p>
        </div>
        <div>
          <img
            src="https://wisernotify.com/wp-content/uploads/2023/06/box-noti3.svg"
            alt=""
            className="float-right"
          />
        </div>
      </div>
      <button className="mt-14 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300    px-6 py-2 bg-primaryBtn text-white shadow-xl rounded-lg pb-3 ">
        Obtenir la popup
      </button>

      {/* <button className="transition ease-out hover:bg-indigo-500    px-6 py-2 bg-primaryBtn text-white shadow-xl rounded-lg pb-3 mt-5">
        Démarrer{' '}
      </button> */}
    </div>
  );
};

export default Inspiration;

// const Inspiration = () => {
//     return (
//       <div className="container bg-white mx-auto flex flex-col items-center pb-20">
//         <header className="w-full py-6 mt-10">
//           <h1 className="text-center text-xl font-semibold text-primaryBtn">
//             Influence les visiteurs{' '}
//           </h1>
//           <p className="text-center text-3xl text-secondary font-bold font-inter mt-2">
//             Trustbear en action
//           </p>
//         </header>
//         {/* cards */}
//         <div className="bg-blue-50 rounded-xl relative w-/6 h-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center mt-12">
//           <div>
//             <h1 className="font-semibold text-secondary mb-3 text-2xl mt-1">
//               Activités de vente
//             </h1>
//             <p className="text-secondary w-full md:w-96">
//               Créez un sentiment d'urgence et motivez les utilisateurs à effectuer
//               un achat en présentant les ventes récentes et le comptoir des
//               ventes.
//             </p>
//           </div>
//           <div className="mt-4 md:mt-0">
//             <img
//               src="https://wisernotify.com/wp-content/uploads/2023/06/box-noti1.svg"
//               alt=""
//               className="mx-auto md:float-right"
//             />
//           </div>
//         </div>
//         <div className="bg-green-50 rounded-xl relative w-/6 h-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center mt-12">
//           <div>
//             <h1 className="font-semibold text-secondary mb-2 text-2xl mt-1">
//               Activités de vente
//             </h1>
//             <p className="text-secondary w-full md:w-96">
//               Créez un sentiment d'urgence et motivez les utilisateurs à effectuer
//               un achat en présentant les ventes récentes et le comptoir des
//               ventes.
//             </p>
//           </div>
//           <div className="mt-4 md:mt-0">
//             <img
//               src="https://wisernotify.com/wp-content/uploads/2023/06/box-noti2.svg"
//               alt=""
//               className="mx-auto md:float-right"
//             />
//           </div>
//         </div>
//         <div className="bg-orange-50 rounded-xl relative w-/6 h-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center mt-12">
//           <div>
//             <h1 className="font-semibold text-secondary mb-2 text-2xl mt-1">
//               Activités de vente
//             </h1>
//             <p className="text-secondary w-full md:w-96">
//               Créez un sentiment d'urgence et motivez les utilisateurs à effectuer
//               un achat en présentant les ventes récentes et le comptoir des
//               ventes.
//             </p>
//           </div>
//           <div className="mt-4 md:mt-0">
//             <img
//               src="https://wisernotify.com/wp-content/uploads/2023/06/box-noti5.svg"
//               alt=""
//               className="mx-auto md:float-right"
//             />
//           </div>
//         </div>
//         <div className="bg-red-50 rounded-xl relative w-/6 h-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center mt-12">
//           <div>
//             <h1 className="font-semibold text-secondary mb-2 text-2xl mt-1">
//               Activités de vente
//             </h1>
//             <p className="text-secondary w-full md:w-96">
//               Créez un sentiment d'urgence et motivez les utilisateurs à effectuer
//               un achat en présentant les ventes récentes et le comptoir des
//               ventes.
//             </p>
//           </div>
//           <div className="mt-4 md:mt-0">
//             <img
//               src="https://wisernotify.com/wp-content/uploads/2023/06/box-noti3.svg"
//               alt=""
//               className="mx-auto md:float-right"
//             />
//           </div>
//         </div>

//         {/* <button className="transition ease-out hover:bg-indigo-500    px-6 py-2 bg-primaryBtn text-white shadow-xl rounded-lg pb-3 mt-5">
//           Démarrer{' '}
//         </button> */}
//       </div>
//     );
//   };

//   export default Inspiration;

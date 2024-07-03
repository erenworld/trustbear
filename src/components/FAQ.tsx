import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleCollapse = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center pb-24">
      <div className="w-6/12">
        <header className="w-full py-6 ">
          <h1 className="text-center text-xl font-semibold text-primaryBtn">
            FAQ{' '}
          </h1>
          <p className="text-center text-3xl text-secondary text-2xl font-bold font-inter mt-2">
            Questions fréquemment posées{' '}
          </p>
        </header>

        <div className="mt-10">
          {[
            {
              title: 'Je ne peux pas simplement coder le mien ?',
              content:
                "Bien sur que oui ! Mais les utilisateurs vous feront-ils confiance ? En faisant appel à un tiers, vous montrez à vos utilisateurs que n'essayez pas de les tromper. S'ils cliquent sur le badge vérifié, ils seront redirigés vers une page prouvant que la transaction est réelle. Vous n'obtenez pas simplement une fenêtre contextuelle, vous obtenez la confiance.",
            },
            {
              title: "Qu'est-ce que Trustbear ? ",
              content:
                "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
            },
            {
              title: 'Est-ce que ça fonctionne avec Stripe ?',
              content:
                "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
            },
            {
              title: 'Trustbear fonctionne en plusieurs langues ?',
              content:
                "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
            },
            {
              title:
                'Puis-je masquer les transactions datant de plus de X jours ?',
              content:
                "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
            },
            {
              title: 'Comment Trustbear gère-t-il la confidentialité ?',
              content:
                "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
            },
            {
              title: "Et si j'ai besoin d'aide ",
              content:
                "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
            },
            {
              title: 'Puis-je annuler mon abonnement ?',
              content:
                "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative mb-3 border-b border-solid cursor-pointer border-slate-100"
            >
              <h6 className="mb-0">
                <button
                  className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in  cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                  onClick={() => toggleCollapse(index)}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg ">{item.title}</span>
                    <span className="">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </button>
              </h6>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === index ? 'h-auto' : 'h-0'
                }`}
              >
                <div className="p-4 pt-1  text-slate-500 leading-normal ">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

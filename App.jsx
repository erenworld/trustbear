import './App.css';
import Eren from './Eren';
import Greet from './Greet';
import ListPick from './ListPick';
import DoubleDice from './DoubleDice';
import ColorList from './ColorList';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Toggler from './Toggler';

const properties = [
  { id: 129031, name: 'Desert Yurt', rating: 4.9, price: 150 },
  { id: 129331, name: 'Lone Mountain Cabin', rating: 4.8, price: 250 },
  { id: 129032, name: 'Cactus Retreat', rating: 4.75, price: 300 },
  { id: 129033, name: 'Redwood Treehouse Escape', rating: 4.9, price: 120 },
  { id: 129034, name: 'Oceanview Condo', rating: 4.7, price: 140 },
  { id: 129035, name: 'Gold Miner Campground', rating: 4.69, price: 96 },
];

const colors = ['green', 'red', 'grey', 'blue', 'cyan', 'brown', 'black'];

function App() {
  return (
    <>
      <div className="Grid">
        <ColorBoxGrid colors={colors} />

        {/* <Clicker message="Hi!!!!" buttonText="Please click" />
        <Clicker message="Please Stop Clicking" buttonText="do not click" />
        <Counter />
        <Toogler />
         */}
        {/* <PropertyList properties={properties} /> */}
        {/* <DoubleDice />
        <DoubleDice />
        <Heading color="teal" text="eren" />
        <ColorList colors={['red', 'blue', 'pink']} />  */}
        {/* <ListPick values={[1, 2, 3]} />
        <ListPick values={['a', 'b', 'c']} />
        <ListPick values={{ name: 'eren' }} />

        { <Greet person="Zouzou" from="aysa" />
        <Greet person="Rosa" from="aysa" />

        <Eren numSides={20} /> } */}
      </div>
    </>
  );
}

export default App;

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// Écrivez le code pour additionner tous les salaires et les enregistrer dans la variable sum. Devrait être égale à 390 dans l’exemple ci-dessus.

// Si salaries est vide, le résultat doit être 0.
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[keys];
// }
// alert(sum);

// //////////////////
// Créez une fonction multiplyNumeric(obj) qui multiplie
// toutes les valeurs de propriétés numériques de obj par 2.

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }

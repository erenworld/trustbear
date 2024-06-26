import './App.css';
import Navbar from './components/Navbar';
import How from './components/How';
import Why from './components/Why';

function App() {
  return (
    <>
      <div
        className="overflow-x-hidden	 block top-0 z-[-2] w-screen h-screen bg-gradient-to-r from-violeta from-20% via-rose via-60% to-beige to-100%
 p-0 m-0"
      >
        {/* bg-gradient-to-r from-beige-200 from-20% via-rose-100 via-60% to-orange-100 to-100% */}
        <Navbar />
        <How />
        <Why />
      </div>
    </>
  );
}

export default App;

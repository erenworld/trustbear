import './App.css';
import Navbar from './components/Navbar';
// import How from './components/How';
// import Why from './components/Why';
// import Inspiration from './components/Inspiration';
import Hero from './components/Hero';
// import Footer from './components/Footer';
// import FAQ from './components/FAQ';
// import CtaFaq from './components/CtaFaq';

function App() {
  return (
    <>
      <div className="p-0 m-0">
        {/* bg-gradient-to-r from-beige-200 from-20% via-rose-100 via-60% to-orange-100 to-100% */}
        <Navbar />
        <Hero />
        {/* <How />
        <Why />
        <Inspiration />
        <FAQ />
        <CtaFaq />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;

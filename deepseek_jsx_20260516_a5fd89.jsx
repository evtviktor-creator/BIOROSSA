// src/App.jsx
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import WhereToBuy from './components/WhereToBuy';
import Reliability from './components/Reliability';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';

function App() {
  return (
    <div className="bg-black text-white font-['Inter'] selection:bg-amber-400/30">
      <Hero />
      <ProductSection />
      <WhereToBuy />
      <Reliability />
      <Footer />
      <StickyContact />
    </div>
  );
}

export default App;
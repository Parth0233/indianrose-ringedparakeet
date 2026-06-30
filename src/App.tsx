import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import PhysicalCharacteristics from './sections/PhysicalCharacteristics';
import Habitat from './sections/Habitat';
import Diet from './sections/Diet';
import Behaviour from './sections/Behaviour';
import CareGuide from './sections/CareGuide';
import Conservation from './sections/Conservation';
import InterestingFacts from './sections/InterestingFacts';
import Gallery from './sections/Gallery';
import AudioGuide from './sections/AudioGuide';
import EducationalImportance from './sections/EducationalImportance';
import QuickFacts from './sections/QuickFacts';
import FAQ from './sections/FAQ';
import ConservationTips from './sections/ConservationTips';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <Hero />
      <About />
      <PhysicalCharacteristics />
      <Habitat />
      <Diet />
      <Behaviour />
      <CareGuide />
      <Conservation />
      <InterestingFacts />
      <Gallery />
      <AudioGuide />
      <EducationalImportance />
      <QuickFacts />
      <FAQ />
      <ConservationTips />
      <Footer />
    </div>
  );
}

export default App;

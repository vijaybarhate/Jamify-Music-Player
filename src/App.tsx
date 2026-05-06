import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Showcase } from './components/sections/Showcase';
import { Discovery } from './components/sections/Discovery';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Discovery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

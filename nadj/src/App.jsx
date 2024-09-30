import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import ConnectSection from "./components/ConnectSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <ConnectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

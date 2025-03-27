import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TransitionWrapper from "./components/TransitionWrapper";

export default function Home() {
  return (
    <TransitionWrapper>
      <Header />
      <HeroSection />
      <ServicesSection />
    </TransitionWrapper>
  );
}
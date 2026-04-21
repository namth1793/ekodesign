import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Packages from '../components/Packages';
import Portfolio from '../components/Portfolio';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Portfolio />
      <Industries />
      <Packages />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}

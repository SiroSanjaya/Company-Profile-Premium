import { Helmet } from "react-helmet-async";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";
import StatsSection from "../components/sections/StatsSection";
import PricingCalculator from "../components/PricingCalculator";
import PortfolioShowcase from "../components/PortfolioShowcase";
import FAQSection from "../components/FAQSection";
import TeamSection from "../components/TeamSection";

const Home = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <Helmet>
        <title>Premium React Template – Modern, Responsive, Customizable</title>
        <meta
          name="description"
          content="Elevate your business with our cutting-edge React.js templates. Modern, responsive, and fully customizable solutions that drive results."
        />
      </Helmet>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PortfolioShowcase />
      <TeamSection />
      <PricingCalculator />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import OrderMethodsSection from "@/components/sections/OrderMethodsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AdvantagesSection />
      <ServicesSection />
      <ProductsSection />
      <OrderMethodsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

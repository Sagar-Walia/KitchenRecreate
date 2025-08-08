import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MenuSection from "@/components/menu-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <div className="font-body bg-warm-orange-50">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

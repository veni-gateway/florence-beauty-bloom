import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";
import Hero from "@/components/site/Hero";
import Story from "@/components/site/Story";
import Services from "@/components/site/Services";
import Transformation from "@/components/site/Transformation";
import Bridal from "@/components/site/Bridal";
import Testimonials from "@/components/site/Testimonials";
import Gallery from "@/components/site/Gallery";
import Relatable from "@/components/site/Relatable";
import CTA from "@/components/site/CTA";
import { SEOHead } from "@/components/SEOHead";
import { pageMetadata, serviceSchema } from "@/lib/seo";

const Index = () => (
  <main className="min-h-screen bg-background">
    <SEOHead
      title={pageMetadata.home.title}
      description={pageMetadata.home.description}
      keywords={pageMetadata.home.keywords}
      canonicalUrl={pageMetadata.home.canonicalUrl}
      schema={serviceSchema}
    />
    <Navbar />
    <h1 className="sr-only">Florence Beauty Studio — Hair, Skin, Makeup &amp; Bridal in Mumbai</h1>
    <Hero />
    <Story />
    <Services />
    <Transformation />
    <Bridal />
    <Testimonials />
    <Gallery />
    <Relatable />
    <CTA />
    <Footer />
    <FloatingActions />
  </main>
);

export default Index;

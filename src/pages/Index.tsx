import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyChooseUs />
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Prêt à commander ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Découvrez notre sélection complète de produits frais et passez votre commande en quelques clics.
          </p>
          <Link to="/boutique">
            <Button variant="hero" size="xl">
              Parcourir la boutique
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

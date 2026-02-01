import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, ShieldCheck, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full gradient-hero blur-3xl" />
        <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full gradient-secondary blur-3xl" />
      </div>

      <div className="container-custom relative py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Livraison à Cotonou et environs
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Commandez vos produits du marché{' '}
            <span className="text-gradient">sans vous déplacer</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Fruits, légumes, viandes, poissons et produits locaux livrés directement chez vous. 
            Qualité garantie, prix du marché.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/boutique">
              <Button variant="hero" size="xl">
                Commander maintenant
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/a-propos">
              <Button variant="outline" size="xl">
                En savoir plus
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Livraison rapide</p>
                <p className="text-sm text-muted-foreground">Le jour même</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10">
                <ShieldCheck className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Qualité garantie</p>
                <p className="text-sm text-muted-foreground">Produits frais</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Paiement facile</p>
                <p className="text-sm text-muted-foreground">À la livraison</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

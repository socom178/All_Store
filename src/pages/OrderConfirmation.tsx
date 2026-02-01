import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Package, Phone } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <Layout>
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 mb-8 animate-scale-in">
            <CheckCircle className="h-10 w-10 text-secondary" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 animate-slide-up">
            Commande confirmée !
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Merci pour votre commande. Nous avons bien reçu votre demande et nous vous contacterons bientôt pour confirmer la livraison.
          </p>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-xl p-6 shadow-card">
              <Package className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Préparation</h3>
              <p className="text-sm text-muted-foreground">
                Votre commande est en cours de préparation par notre équipe.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card">
              <Phone className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Confirmation</h3>
              <p className="text-sm text-muted-foreground">
                Nous vous appellerons pour confirmer l'heure de livraison.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/boutique">
              <Button variant="hero" size="lg">
                Continuer mes achats
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;

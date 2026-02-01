import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              À propos de <span className="text-primary">ALL</span>
            </h1>
            <p className="text-lg md:text-xl text-background/80 leading-relaxed">
              ALL (Achat Local Livré) est né d'un constat simple : après un déménagement, 
              accéder aux marchés locaux devient un véritable défi. Nous avons créé la solution.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tout a commencé quand notre fondateur a déménagé dans un nouveau quartier 
                  de Cotonou. Habitué à faire ses courses au marché, il s'est retrouvé 
                  éloigné de ses vendeurs habituels et sans moyen de transport pratique.
                </p>
                <p>
                  Les trajets en taxi-moto pour quelques tomates et du poisson frais 
                  devenaient coûteux et chronophages. Il fallait une solution moderne 
                  pour un besoin ancestral : avoir accès aux produits frais du marché.
                </p>
                <p>
                  <strong className="text-foreground">ALL est né de cette frustration.</strong> 
                  {' '}Notre mission est simple : vous apporter les produits du marché directement 
                  chez vous, avec la même qualité et les mêmes prix qu'au marché.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-muted overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  🛒
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl gradient-hero opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
            Nos valeurs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Rapidité</h3>
              <p className="text-muted-foreground">
                Livraison le jour même pour que vos produits restent toujours frais.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 mb-6">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Confiance</h3>
              <p className="text-muted-foreground">
                Des produits de qualité sélectionnés avec soin, comme si vous étiez au marché.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Proximité</h3>
              <p className="text-muted-foreground">
                Une équipe locale qui comprend vos besoins et vos attentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Notre vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Devenir la référence du e-commerce local au Bénin. Nous voulons faciliter 
              la vie de tous les Béninois en leur permettant d'accéder aux produits du 
              marché en quelques clics, où qu'ils soient à Cotonou et ses environs.
            </p>
            <Link to="/boutique">
              <Button variant="hero" size="xl">
                Découvrir nos produits
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

import { Truck, Shield, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Livraison rapide',
    description: 'Recevez vos produits le jour même à Cotonou et ses environs.',
  },
  {
    icon: Shield,
    title: 'Qualité garantie',
    description: 'Nous sélectionnons les meilleurs produits frais du marché pour vous.',
  },
  {
    icon: Clock,
    title: 'Gain de temps',
    description: 'Plus besoin de vous déplacer. Commandez depuis chez vous en quelques clics.',
  },
  {
    icon: Headphones,
    title: 'Support client',
    description: 'Notre équipe est disponible pour répondre à toutes vos questions.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-foreground text-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Pourquoi choisir ALL ?
          </h2>
          <p className="text-background/70">
            Nous nous engageons à vous offrir la meilleure expérience d'achat locale
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-background/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

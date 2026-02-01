import Layout from '@/components/layout/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="bg-muted/30 py-8 md:py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Conditions Générales de Vente
          </h1>
          <p className="text-muted-foreground">
            Dernière mise à jour : Janvier 2026
          </p>
        </div>
      </div>

      <div className="container-custom py-8 md:py-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="bg-card rounded-xl shadow-card p-6 md:p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Présentation</h2>
              <p className="text-muted-foreground leading-relaxed">
                ALL (Achat Local Livré) est une plateforme e-commerce basée au Bénin, 
                spécialisée dans la livraison de produits du marché local à Cotonou et ses environs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Commandes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Toute commande passée sur notre plateforme constitue un accord entre vous et ALL. 
                Les commandes sont confirmées par téléphone avant la livraison.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Prix et Paiement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les prix sont affichés en Francs CFA (FCFA). Le paiement s'effectue à la livraison 
                en espèces. Nous nous réservons le droit de modifier les prix à tout moment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Livraison</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous livrons à Cotonou et ses environs. Les délais de livraison sont indicatifs 
                et peuvent varier selon la disponibilité des produits et les conditions de circulation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Qualité des produits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous nous engageons à fournir des produits frais et de qualité. Si vous n'êtes 
                pas satisfait de la qualité d'un produit, veuillez nous contacter immédiatement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Annulations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les commandes peuvent être annulées avant le début de la préparation. 
                Contactez-nous par téléphone ou WhatsApp pour toute demande d'annulation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant ces conditions, contactez-nous à 
                contact@all-benin.com ou par téléphone au +229 XX XX XX XX.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;

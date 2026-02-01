import Layout from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="bg-muted/30 py-8 md:py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Politique de Confidentialité
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
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Collecte des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous collectons les informations que vous nous fournissez lors de vos commandes : 
                nom, adresse, numéro de téléphone et email (optionnel). Ces données sont nécessaires 
                pour traiter vos commandes et vous contacter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Utilisation des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données personnelles sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                <li>Traiter et livrer vos commandes</li>
                <li>Vous contacter concernant vos commandes</li>
                <li>Améliorer nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Protection des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous prenons la sécurité de vos données au sérieux. Vos informations personnelles 
                ne sont jamais vendues ni partagées avec des tiers à des fins commerciales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Conservation des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données sont conservées aussi longtemps que nécessaire pour fournir nos services 
                et respecter nos obligations légales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vous avez le droit d'accéder à vos données personnelles, de les modifier ou de 
                demander leur suppression. Contactez-nous pour exercer ces droits.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Ces cookies sont essentiels au bon fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant notre politique de confidentialité, contactez-nous 
                à contact@all-benin.com ou par téléphone au +229 XX XX XX XX.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;

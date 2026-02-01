import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">ALL</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Votre partenaire de confiance pour la livraison de produits du marché à Cotonou et ses environs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/boutique" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-background/70 hover:text-primary text-sm transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/conditions-generales" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/mon-compte" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Mon compte
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+229 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@all-benin.com</span>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Cotonou, Bénin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} ALL - Achat Local Livré. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

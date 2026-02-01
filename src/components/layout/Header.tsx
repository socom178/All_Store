import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

const Header = () => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Boutique', path: '/boutique' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif font-bold text-gradient">ALL</span>
            <span className="hidden sm:block text-xs text-muted-foreground font-medium">
              Livraison Locale
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search - Desktop */}
            <div className="hidden lg:flex items-center relative">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher..."
                className="pl-10 w-64 bg-muted/50 border-transparent focus:border-primary"
              />
            </div>

            {/* Search - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Account */}
            <Link to="/mon-compte">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/panier" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden pb-4 animate-slide-up">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un produit..."
                className="pl-10 bg-muted/50 border-transparent focus:border-primary"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

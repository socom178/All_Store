import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-2xl font-serif font-bold text-foreground mb-4">
            Votre panier est vide
          </h1>
          <p className="text-muted-foreground mb-8">
            Découvrez nos produits et ajoutez-les à votre panier
          </p>
          <Link to="/boutique">
            <Button variant="hero" size="lg">
              Parcourir la boutique
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-muted/30 py-8 md:py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Panier
          </h1>
          <p className="text-muted-foreground">
            {totalItems} article{totalItems > 1 ? 's' : ''} dans votre panier
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-card rounded-xl shadow-card"
              >
                {/* Image */}
                <Link to={`/produit/${item.id}`} className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col">
                  <Link
                    to={`/produit/${item.id}`}
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                  
                  <span className="text-lg font-bold text-primary mt-auto">
                    {formatPrice(item.price)}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-end justify-between">
                  {/* Remove */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>

                  {/* Quantity */}
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 rounded-r-none"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 rounded-l-none"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-xl shadow-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Résumé de la commande
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span className="font-medium">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Livraison</span>
                  <span className="font-medium text-secondary">Gratuite</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="text-xl font-bold text-primary">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>
              </div>

              <Link to="/checkout">
                <Button variant="hero" size="lg" className="w-full">
                  Passer la commande
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              <Link
                to="/boutique"
                className="block text-center text-sm text-primary hover:underline mt-4"
              >
                Continuer mes achats
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

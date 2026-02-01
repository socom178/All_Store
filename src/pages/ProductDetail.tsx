import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { products, formatPrice } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { ShoppingCart, Minus, Plus, Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import ProductCard from '@/components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
          <Link to="/boutique">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la boutique
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast.error('Ce produit est en rupture de stock');
      return;
    }
    
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} x ${product.name} ajouté${quantity > 1 ? 's' : ''} au panier`);
  };

  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span>/</span>
          <Link to="/boutique" className="hover:text-primary transition-colors">Boutique</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.originalPrice && (
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-destructive text-destructive-foreground text-sm font-bold">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'fill-muted text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} avis)
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Availability */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="inline-flex items-center gap-2 text-secondary font-medium">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  En stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 text-destructive font-medium">
                  <span className="w-2 h-2 rounded-full bg-destructive"></span>
                  Rupture de stock
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            {product.inStock && (
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-foreground">Quantité :</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-r-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-l-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <Button
              variant="hero"
              size="xl"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full md:w-auto mb-8"
            >
              <ShoppingCart className="h-5 w-5" />
              Ajouter au panier
            </Button>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Livraison le jour même</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm text-muted-foreground">Qualité garantie</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
              Produits similaires
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;

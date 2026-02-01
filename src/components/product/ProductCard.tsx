import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product, formatPrice } from '@/lib/data';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!product.inStock) {
      toast.error('Ce produit est en rupture de stock');
      return;
    }
    
    addToCart(product);
    toast.success(`${product.name} ajouté au panier`);
  };

  return (
    <Link to={`/produit/${product.id}`} className="group">
      <div className="card-product">
        {/* Image */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Discount badge */}
          {product.originalPrice && (
            <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-destructive text-destructive-foreground text-xs font-bold">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </div>
          )}
          
          {/* Out of stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
              <span className="px-4 py-2 bg-card text-foreground text-sm font-semibold rounded-lg">
                Rupture de stock
              </span>
            </div>
          )}
          
          {/* Quick add button */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              variant="default"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="rounded-full shadow-elevated"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium text-foreground">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Name */}
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

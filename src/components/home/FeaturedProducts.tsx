import { Link } from 'react-router-dom';
import { products } from '@/lib/data';
import ProductCard from '@/components/product/ProductCard';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 md:py-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              Produits populaires
            </h2>
            <p className="text-muted-foreground">
              Les favoris de nos clients
            </p>
          </div>
          <Link
            to="/boutique"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Voir tous les produits
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

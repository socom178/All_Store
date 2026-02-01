import { Link } from 'react-router-dom';
import { categories } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              Nos catégories
            </h2>
            <p className="text-muted-foreground">
              Découvrez notre sélection de produits frais du marché
            </p>
          </div>
          <Link
            to="/boutique"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Voir tout
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/boutique?category=${category.id}`}
              className="group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="bg-card rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-elevated">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {category.productCount} produits
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

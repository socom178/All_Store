import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const selectedCategory = searchParams.get('category') || '';

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === selectedCategory) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchQuery('');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className="bg-muted/30 py-8 md:py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Boutique
          </h1>
          <p className="text-muted-foreground">
            Découvrez tous nos produits frais du marché
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">Catégories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                    <span className="ml-auto text-xs opacity-70">
                      {category.productCount}
                    </span>
                  </button>
                ))}
              </div>
              
              {(selectedCategory || searchQuery) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="mt-4 w-full"
                >
                  <X className="h-4 w-4 mr-2" />
                  Effacer les filtres
                </Button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Mobile Filter Toggle */}
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un produit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </Button>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mb-6 p-4 bg-card rounded-xl shadow-card animate-slide-up">
                <h3 className="font-semibold text-foreground mb-4">Catégories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted hover:bg-muted/80 text-foreground'
                      }`}
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results Count */}
            <p className="text-sm text-muted-foreground mb-6">
              {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''} trouvé{filteredProducts.length !== 1 ? 's' : ''}
            </p>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  Aucun produit trouvé pour votre recherche.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Effacer les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;

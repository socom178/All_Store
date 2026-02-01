import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { CheckCircle, Truck } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Cotonou',
    notes: '',
  });

  if (items.length === 0) {
    navigate('/panier');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.address) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate order submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    clearCart();
    toast.success('Commande passée avec succès !');
    navigate('/commande-confirmee');
  };

  return (
    <Layout>
      <div className="bg-muted/30 py-8 md:py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Finaliser la commande
          </h1>
          <p className="text-muted-foreground">
            Entrez vos informations de livraison
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Info */}
              <div className="bg-card rounded-xl shadow-card p-6">
                <h2 className="text-lg font-semibold text-foreground mb-6">
                  Informations personnelles
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jean"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Dupont"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+229 XX XX XX XX"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-card rounded-xl shadow-card p-6">
                <h2 className="text-lg font-semibold text-foreground mb-6">
                  Adresse de livraison
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse complète *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Quartier, rue, repère..."
                      rows={3}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Ville</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Cotonou"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Instructions de livraison (optionnel)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Sonnez deux fois, portail bleu..."
                      rows={2}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-xl shadow-card p-6">
                <h2 className="text-lg font-semibold text-foreground mb-6">
                  Mode de paiement
                </h2>
                <div className="flex items-center gap-4 p-4 border-2 border-primary rounded-xl bg-primary/5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Paiement à la livraison</p>
                    <p className="text-sm text-muted-foreground">
                      Payez en espèces à la réception de votre commande
                    </p>
                  </div>
                  <CheckCircle className="h-6 w-6 text-primary ml-auto" />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-xl shadow-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Votre commande
                </h2>

                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {item.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Qté: {item.quantity}
                        </p>
                        <p className="text-sm font-semibold text-primary">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sous-total</span>
                    <span className="font-medium">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Livraison</span>
                    <span className="font-medium text-secondary">Gratuite</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="text-xl font-bold text-primary">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full mt-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Traitement...' : 'Confirmer la commande'}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;

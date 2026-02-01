import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Package, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock order data
const mockOrders = [
  {
    id: 'CMD-001',
    date: '28 Jan 2026',
    status: 'Livré',
    statusColor: 'text-secondary',
    total: 4500,
    items: 3,
  },
  {
    id: 'CMD-002',
    date: '25 Jan 2026',
    status: 'En livraison',
    statusColor: 'text-primary',
    total: 2800,
    items: 2,
  },
  {
    id: 'CMD-003',
    date: '20 Jan 2026',
    status: 'En préparation',
    statusColor: 'text-accent-foreground',
    total: 6200,
    items: 5,
  },
];

const Account = () => {
  return (
    <Layout>
      <div className="bg-muted/30 py-8 md:py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Mon compte
          </h1>
          <p className="text-muted-foreground">
            Gérez votre compte et suivez vos commandes
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-xl shadow-card p-6">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Client</p>
                  <p className="text-sm text-muted-foreground">client@exemple.com</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium">
                  <Package className="h-5 w-5" />
                  Mes commandes
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors">
                  <User className="h-5 w-5" />
                  Mon profil
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-colors">
                  <LogOut className="h-5 w-5" />
                  Déconnexion
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl shadow-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Historique des commandes
              </h2>

              {mockOrders.length > 0 ? (
                <div className="space-y-4">
                  {mockOrders.map(order => (
                    <div
                      key={order.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <div>
                        <p className="font-semibold text-foreground">
                          Commande {order.id}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {order.date} • {order.items} article{order.items > 1 ? 's' : ''}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-medium ${order.statusColor}`}>
                          {order.status}
                        </span>
                        <span className="font-bold text-primary">
                          {new Intl.NumberFormat('fr-FR').format(order.total)} FCFA
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Vous n'avez pas encore de commandes
                  </p>
                  <Link to="/boutique">
                    <Button variant="hero">
                      Commencer mes achats
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;

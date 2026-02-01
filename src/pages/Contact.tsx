import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      toast.error('Veuillez remplir les champs obligatoires');
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message envoyé avec succès !');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="bg-muted/30 py-8 md:py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Contactez-nous
          </h1>
          <p className="text-muted-foreground">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>
      </div>

      <div className="container-custom py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-xl shadow-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone / WhatsApp</p>
                    <p className="text-muted-foreground">+229 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@all-benin.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">Cotonou, Bénin</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Horaires</p>
                    <p className="text-muted-foreground">Lun - Sam: 7h - 19h</p>
                    <p className="text-muted-foreground">Dim: 8h - 14h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-secondary/10 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Besoin d'une réponse rapide ?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contactez-nous directement sur WhatsApp pour une assistance immédiate.
              </p>
              <Button variant="success" className="w-full">
                <Phone className="h-4 w-4" />
                Ouvrir WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-card p-6 md:p-8">
              <h2 className="text-lg font-semibold text-foreground mb-6">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
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
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+229 XX XX XX XX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Comment pouvons-nous vous aider ?"
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

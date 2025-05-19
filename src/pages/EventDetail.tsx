
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '@/data/events';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const event = events.find(e => e.id === id);
  
  const [ticketType, setTicketType] = useState('standard');
  const [quantity, setQuantity] = useState(1);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Événement non trouvé</h1>
          <Button onClick={() => navigate('/')}>Retour à l'accueil</Button>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(event.date).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleBuyTickets = () => {
    toast({
      title: "Tickets réservés !",
      description: `Vous avez réservé ${quantity} billet(s) ${ticketType} pour ${event.title}`,
    });
  };

  const totalPrice = event.price[ticketType as keyof typeof event.price] * quantity;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Event Hero */}
        <div className="relative h-64 md:h-96">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="container relative z-20 h-full flex flex-col justify-end pb-8 px-4 md:px-6">
            <div className="text-white">
              <span className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold mb-2">
                {event.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{event.title}</h1>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">À propos de cet événement</h2>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                  <h3 className="font-medium">Date et heure</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                  <h3 className="font-medium">Lieu</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <div>{event.location.name}</div>
                      <div>{event.location.address}</div>
                      <div>{event.location.city}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <div key={index} className="badge-special">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Réserver des billets</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type de billet</label>
                      <select 
                        className="w-full p-2 border rounded-md"
                        value={ticketType}
                        onChange={(e) => setTicketType(e.target.value)}
                      >
                        <option value="standard">Standard - {event.price.standard}€</option>
                        {event.price.vip && (
                          <option value="vip">VIP - {event.price.vip}€</option>
                        )}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Quantité</label>
                      <select 
                        className="w-full p-2 border rounded-md"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between mb-2">
                        <span>Prix unitaire:</span>
                        <span>{event.price[ticketType as keyof typeof event.price]}€</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Quantité:</span>
                        <span>{quantity}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                        <span>Total:</span>
                        <span>{totalPrice}€</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4" 
                      size="lg"
                      onClick={handleBuyTickets}
                    >
                      Acheter maintenant
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Il reste {event.availableTickets} billets disponibles
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Events */}
        <div className="bg-secondary/50 py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Événements similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter(e => e.id !== event.id && e.category === event.category)
                .slice(0, 3)
                .map(relatedEvent => (
                  <div key={relatedEvent.id} className="bg-card rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={relatedEvent.imageUrl} 
                      alt={relatedEvent.title} 
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium">{relatedEvent.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(relatedEvent.date).toLocaleDateString('fr-FR')} · {relatedEvent.location.city}
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-3 w-full"
                        onClick={() => navigate(`/event/${relatedEvent.id}`)}
                      >
                        Voir les détails
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;

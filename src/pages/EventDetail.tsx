
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '@/data/events';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, Send, Bell } from 'lucide-react';
import { EventReview, DiscussionMessage, Notification } from '@/types/event';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const event = events.find(e => e.id === id);
  
  const [ticketType, setTicketType] = useState('standard');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [localReviews, setLocalReviews] = useState<EventReview[]>([]);
  const [localMessages, setLocalMessages] = useState<DiscussionMessage[]>([]);
  const [localNotifications, setLocalNotifications] = useState<Notification[]>([]);
  const [hasJoinedGroup, setHasJoinedGroup] = useState(false);

  useEffect(() => {
    if (event) {
      setLocalReviews(event.reviews || []);
      setLocalMessages(event.discussionGroup?.messages || []);
      setLocalNotifications(event.notifications || []);
    }
  }, [event]);

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

  const handleSubmitReview = () => {
    if (userRating === 0) {
      toast({
        title: "Erreur",
        description: "Veuillez attribuer une note à l'événement",
        variant: "destructive"
      });
      return;
    }

    const newReview: EventReview = {
      id: (localReviews.length + 1).toString(),
      userId: "user-1", // Dans une vraie app, nous utiliserions l'ID de l'utilisateur connecté
      userName: "Utilisateur", // Idem pour le nom
      rating: userRating,
      comment: userComment,
      date: new Date().toISOString()
    };

    setLocalReviews([newReview, ...localReviews]);
    setUserComment('');
    setUserRating(0);
    
    toast({
      title: "Avis envoyé",
      description: "Merci pour votre avis sur cet événement !"
    });
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage: DiscussionMessage = {
      id: (localMessages.length + 1).toString(),
      userId: "user-1",
      userName: "Vous",
      content: messageInput,
      timestamp: new Date().toISOString()
    };

    setLocalMessages([...localMessages, newMessage]);
    setMessageInput('');
  };

  const handleJoinGroup = () => {
    setHasJoinedGroup(true);
    toast({
      title: "Groupe rejoint",
      description: `Vous avez rejoint le groupe de discussion de l'événement ${event.title}`
    });
    
    // Ajouter une notification de bienvenue
    const welcomeNotification: Notification = {
      id: (localNotifications.length + 1).toString(),
      title: "Bienvenue dans le groupe !",
      message: `Bienvenue dans le groupe de discussion de l'événement ${event.title}. Restez informé des dernières actualités.`,
      timestamp: new Date().toISOString(),
      read: false
    };
    
    setLocalNotifications([welcomeNotification, ...localNotifications]);
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
              <div className="flex items-center mt-2">
                <span className="inline-block bg-secondary/70 rounded-full px-3 py-1 text-sm">
                  {event.status === 'upcoming' ? 'À venir' : event.status === 'ongoing' ? 'En cours' : 'Terminé'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Event Tabs */}
        <div className="container px-4 md:px-6 py-6">
          <Tabs defaultValue="details" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Détails</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
              <TabsTrigger value="reviews">Avis</TabsTrigger>
            </TabsList>
            
            {/* Détails */}
            <TabsContent value="details" className="py-4">
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
                          <div>{event.location.city}, {event.location.country}</div>
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
                  
                  {/* Notifications */}
                  {hasJoinedGroup && localNotifications.length > 0 && (
                    <Card className="mt-4">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium">Notifications</h3>
                          <Bell className="h-4 w-4" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-3 max-h-48 overflow-y-auto">
                          {localNotifications.map(notification => (
                            <div key={notification.id} className="p-2 rounded-lg bg-secondary/30 border-l-4 border-primary">
                              <h4 className="font-medium">{notification.title}</h4>
                              <p className="text-sm text-muted-foreground">{notification.message}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {new Date(notification.timestamp).toLocaleDateString('fr-FR')}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>
            
            {/* Sessions */}
            <TabsContent value="sessions" className="py-4">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Sessions de l'événement</h2>
                
                {event.sessions && event.sessions.length > 0 ? (
                  <div className="space-y-4">
                    {event.sessions.map(session => (
                      <Card key={session.id} className="overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="space-y-1">
                              <h3 className="text-lg font-bold">{session.title}</h3>
                              <p className="text-muted-foreground">{session.description}</p>
                              {session.speaker && (
                                <p className="text-sm font-medium">Présenté par: {session.speaker}</p>
                              )}
                            </div>
                            <div className="text-sm bg-secondary/50 p-2 rounded whitespace-nowrap">
                              {session.startTime} - {session.endTime}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Aucune session n'a encore été ajoutée pour cet événement.</p>
                )}
              </div>
            </TabsContent>
            
            {/* Discussion */}
            <TabsContent value="discussion" className="py-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Groupe de discussion</h2>
                  {!hasJoinedGroup && (
                    <Button onClick={handleJoinGroup}>
                      Rejoindre le groupe
                    </Button>
                  )}
                </div>
                
                {hasJoinedGroup ? (
                  <div className="space-y-4">
                    <Card className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="h-96 overflow-y-auto p-2 space-y-3 bg-secondary/20 rounded-md">
                            {localMessages.length > 0 ? (
                              localMessages.map(message => (
                                <div 
                                  key={message.id} 
                                  className={`flex ${message.userName === 'Vous' ? 'justify-end' : 'justify-start'}`}
                                >
                                  <div className={`max-w-[80%] p-3 rounded-lg ${message.userName === 'Vous' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                                    <div className="font-medium text-sm">{message.userName}</div>
                                    <div>{message.content}</div>
                                    <div className="text-xs opacity-70 mt-1">
                                      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="text-center text-muted-foreground p-4">
                                Aucun message pour le moment. Soyez le premier à écrire !
                              </div>
                            )}
                          </div>
                          
                          <div className="flex gap-2">
                            <Input 
                              placeholder="Écrivez votre message..." 
                              value={messageInput}
                              onChange={(e) => setMessageInput(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <Button onClick={handleSendMessage}>
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="text-center p-8 border rounded-lg bg-secondary/10">
                    <p className="text-muted-foreground">
                      Rejoignez le groupe de discussion pour échanger avec l'organisateur et les autres participants.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Reviews */}
            <TabsContent value="reviews" className="py-4">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Avis et commentaires</h2>
                
                {event.status === 'completed' && (
                  <Card className="overflow-hidden">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium mb-3">Laissez votre avis</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Votre note:</p>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star
                                key={star}
                                className={`h-6 w-6 cursor-pointer ${userRating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => setUserRating(star)}
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-2">Votre commentaire:</p>
                          <Textarea
                            placeholder="Partagez votre expérience..."
                            value={userComment}
                            onChange={(e) => setUserComment(e.target.value)}
                            rows={3}
                          />
                        </div>
                        <Button onClick={handleSubmitReview}>
                          Soumettre
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">{localReviews.length} avis</h3>
                  
                  {localReviews.length > 0 ? (
                    <div className="space-y-4">
                      {localReviews.map(review => (
                        <Card key={review.id} className="overflow-hidden">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium">{review.userName}</div>
                              <div className="text-sm text-muted-foreground">
                                {new Date(review.date).toLocaleDateString('fr-FR')}
                              </div>
                            </div>
                            <div className="flex gap-1 mb-2">
                              {[1, 2, 3, 4, 5].map(star => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${review.rating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-8 border rounded-lg bg-secondary/10">
                      <p className="text-muted-foreground">
                        {event.status === 'completed' 
                          ? "Cet événement n'a pas encore reçu d'avis. Soyez le premier à donner votre opinion !" 
                          : "Les avis seront disponibles une fois l'événement terminé."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
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

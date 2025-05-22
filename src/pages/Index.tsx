
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import { events } from '@/data/events'; // Updated import path
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const featuredEvents = events.filter(event => event.featured);
  const upcomingEvents = events.slice(0, 3);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4 animate-fade-in">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Découvrez des événements extraordinaires
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl">
              Réservez vos places pour les meilleurs concerts, spectacles, conférences et plus encore.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => navigate('/events')}
              >
                Explorer les événements
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => navigate('/about')}
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center text-center space-y-4 mb-8">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Événements en vedette
                </h2>
                <p className="text-muted-foreground max-w-[700px]">
                  Ne manquez pas nos événements les plus populaires et exclusifs.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredEvents.map(event => (
                  <div key={event.id} className="animate-fade-in" style={{ animationDelay: `${parseFloat(event.id) * 0.1}s` }}>
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Upcoming Events */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Événements à venir
              </h2>
              <p className="text-muted-foreground max-w-[700px]">
                Parcourez notre sélection d'événements à ne pas manquer dans les prochains mois.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <div key={event.id} className="animate-fade-in" style={{ animationDelay: `${parseFloat(event.id) * 0.1}s` }}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button size="lg" onClick={() => navigate('/events')}>
                Voir tous les événements
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Parcourir les catégories
              </h2>
              <p className="text-muted-foreground max-w-[700px]">
                Trouvez facilement des événements qui vous intéressent parmi nos différentes catégories.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {["Concert", "Conférence", "Sport", "Exposition", "Gastronomie", "Théâtre", "Festival", "Atelier"].map((category, index) => (
                <div 
                  key={index}
                  className="animate-fade-in bg-secondary rounded-lg p-6 text-center transition-all hover:bg-primary hover:text-primary-foreground cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-medium">{category}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                Restez informé
              </h2>
              <p className="text-muted-foreground max-w-[500px] mb-4">
                Abonnez-vous à notre newsletter pour ne manquer aucun événement et recevoir des offres exclusives.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input 
                  type="email" 
                  placeholder="votre@email.com" 
                  className="flex flex-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button>S'abonner</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

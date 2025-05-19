
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import { events } from '@/data/events';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const categories = ['Tous', ...new Set(events.map(event => event.category))];
  const cities = ['Toutes', ...new Set(events.map(event => event.location.city))];
  const countries = ['Tous', ...new Set(events.map(event => event.location.country))];
  
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Tous' || 
                           event.category === selectedCategory;
    
    const matchesCity = selectedCity === '' || selectedCity === 'Toutes' || 
                       event.location.city === selectedCity;
                       
    const matchesCountry = selectedCountry === '' || selectedCountry === 'Tous' || 
                          event.location.country === selectedCountry;
    
    return matchesSearch && matchesCategory && matchesCity && matchesCountry;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="hero-gradient py-10 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Découvrez tous nos événements
              </h1>
              <p className="max-w-[700px] mx-auto text-lg">
                Trouvez et réservez vos places pour les meilleurs événements à venir
              </p>
              <div className="flex justify-center mt-6">
                <Link to="/create-event">
                  <Button className="gap-2">
                    <PlusCircle size={16} />
                    Créer un événement
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Rechercher</label>
                    <Input 
                      placeholder="Nom d'événement, description, etc." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Catégorie</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ville</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                    >
                      {cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Pays</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                      {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Trier par</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Date (plus récent)</option>
                      <option>Date (plus ancien)</option>
                      <option>Prix (croissant)</option>
                      <option>Prix (décroissant)</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Events List */}
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                {filteredEvents.length} événement(s) trouvé(s)
              </h2>
            </div>
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-muted-foreground">
                  Aucun événement ne correspond à votre recherche
                </h3>
                <p className="mt-2">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map(event => (
                  <div key={event.id} className="animate-fade-in" style={{ animationDelay: `${parseFloat(event.id) * 0.1}s` }}>
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;

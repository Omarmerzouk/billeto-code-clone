
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventForm from '@/components/EventForm';
import { toast } from 'sonner';
import { events } from '@/data/events';

const CreateEvent = () => {
  const navigate = useNavigate();

  const handleCreateEvent = (eventData: any) => {
    // Dans une application réelle, nous enverrions ces données à une API
    // Ici, nous simulons simplement l'ajout à notre tableau d'événements
    const newEvent = {
      id: (events.length + 1).toString(),
      ...eventData,
      availableTickets: parseInt(eventData.availableTickets),
      price: {
        standard: parseInt(eventData.standardPrice),
        ...(eventData.vipPrice && { vip: parseInt(eventData.vipPrice) }),
      },
    };
    
    console.log("Nouvel événement créé:", newEvent);
    toast.success("Événement créé avec succès!");
    navigate('/events');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="hero-gradient py-10 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Créer un nouvel événement
              </h1>
              <p className="max-w-[700px] mx-auto text-lg">
                Remplissez le formulaire ci-dessous pour créer votre événement
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container px-4 md:px-6">
            <EventForm onSubmit={handleCreateEvent} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreateEvent;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventForm from '@/components/EventForm';
import { toast } from 'sonner';
import { events } from '@/data/events';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, X } from 'lucide-react';
import { EventSession } from '@/types/event';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<EventSession[]>([]);
  const [currentSession, setCurrentSession] = useState<EventSession>({
    id: '',
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    speaker: ''
  });

  const handleSessionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentSession(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addSession = () => {
    if (!currentSession.title || !currentSession.startTime || !currentSession.endTime) {
      toast.error("Veuillez remplir au moins le titre et les horaires de la session");
      return;
    }

    const newSession = {
      ...currentSession,
      id: `new-${sessions.length + 1}`
    };

    setSessions([...sessions, newSession]);
    setCurrentSession({
      id: '',
      title: '',
      description: '',
      startTime: '',
      endTime: '',
      speaker: ''
    });
  };

  const removeSession = (id: string) => {
    setSessions(sessions.filter(session => session.id !== id));
  };

  const handleCreateEvent = (eventData: any) => {
    // Dans une application réelle, nous enverrions ces données à une API
    // Ici, nous simulons simplement l'ajout à notre tableau d'événements
    const newEvent = {
      id: (events.length + 1).toString(),
      ...eventData,
      availableTickets: parseInt(eventData.availableTickets),
      status: 'upcoming',
      sessions: sessions.length > 0 ? sessions : undefined,
      organizerId: "current-user", // Dans une vraie app, ce serait l'ID de l'utilisateur connecté
      discussionGroup: {
        id: `g-${events.length + 1}`,
        name: eventData.title,
        messages: [
          {
            id: "welcome-msg",
            userId: "current-user",
            userName: "Organisateur",
            content: `Bienvenue dans le groupe de discussion de l'événement ${eventData.title} !`,
            timestamp: new Date().toISOString()
          }
        ]
      },
      notifications: [] 
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <EventForm onSubmit={handleCreateEvent} />
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Ajouter des sessions</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <Label htmlFor="title">Titre de la session</Label>
                        <Input
                          id="title"
                          name="title"
                          value={currentSession.title}
                          onChange={handleSessionChange}
                          placeholder="Ex: Atelier d'introduction"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={currentSession.description}
                          onChange={handleSessionChange}
                          placeholder="Décrivez cette session..."
                          rows={3}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="startTime">Heure de début</Label>
                          <Input
                            id="startTime"
                            name="startTime"
                            value={currentSession.startTime}
                            onChange={handleSessionChange}
                            placeholder="Ex: 10:00"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="endTime">Heure de fin</Label>
                          <Input
                            id="endTime"
                            name="endTime"
                            value={currentSession.endTime}
                            onChange={handleSessionChange}
                            placeholder="Ex: 11:30"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="speaker">Intervenant (optionnel)</Label>
                        <Input
                          id="speaker"
                          name="speaker"
                          value={currentSession.speaker || ''}
                          onChange={handleSessionChange}
                          placeholder="Ex: Jean Dupont"
                        />
                      </div>
                      
                      <Button onClick={addSession} className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Ajouter cette session
                      </Button>
                    </div>
                    
                    {sessions.length > 0 && (
                      <>
                        <h4 className="font-semibold mb-2">Sessions ajoutées ({sessions.length})</h4>
                        <div className="space-y-3 max-h-80 overflow-y-auto">
                          {sessions.map(session => (
                            <div key={session.id} className="bg-secondary/30 p-3 rounded-md relative pr-8">
                              <button 
                                className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                                onClick={() => removeSession(session.id)}
                              >
                                <X className="h-4 w-4" />
                              </button>
                              <h5 className="font-medium">{session.title}</h5>
                              <div className="text-sm text-muted-foreground">
                                {session.startTime} - {session.endTime}
                              </div>
                              {session.speaker && (
                                <div className="text-sm mt-1">Intervenant: {session.speaker}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    
                    <div className="mt-6 text-sm text-muted-foreground">
                      <p>Ajoutez des sessions à votre événement pour permettre aux participants de connaître le programme détaillé.</p>
                      <p className="mt-2">Vous pourrez également mettre à jour ces informations plus tard.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-4">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Fonctionnalités incluses</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                        <span>Groupe de discussion automatique</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                        <span>Système de notifications</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                        <span>Avis et évaluations après l'événement</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreateEvent;

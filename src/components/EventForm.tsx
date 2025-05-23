
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const formSchema = z.object({
  title: z.string().min(3, { message: 'Le titre doit contenir au moins 3 caractères' }),
  description: z.string().min(10, { message: 'La description doit contenir au moins 10 caractères' }),
  date: z.string(),
  time: z.string(),
  'location.name': z.string().min(3, { message: 'Le nom du lieu est requis' }),
  'location.address': z.string().min(3, { message: 'L\'adresse est requise' }),
  'location.city': z.string().min(2, { message: 'La ville est requise' }),
  'location.country': z.string().min(2, { message: 'Le pays est requis' }),
  imageUrl: z.string().url({ message: 'Veuillez entrer une URL valide' }),
  category: z.string(),
  tags: z.string(),
  availableTickets: z.string().refine((val) => !isNaN(parseInt(val)), { message: 'Doit être un nombre' }),
  standardPrice: z.string().refine((val) => !isNaN(parseInt(val)), { message: 'Doit être un nombre' }),
  vipPrice: z.string().optional(),
  eventType: z.enum(['in-person', 'online', 'hybrid']),
  isFree: z.boolean().default(false),
});

interface EventFormProps {
  onSubmit: (data: any) => void;
}

const EventForm = ({ onSubmit }: EventFormProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      date: '',
      time: '',
      'location.name': '',
      'location.address': '',
      'location.city': '',
      'location.country': '',
      imageUrl: '',
      category: '',
      tags: '',
      availableTickets: '',
      standardPrice: '',
      vipPrice: '',
      eventType: 'in-person' as const,
      isFree: false,
    },
  });

  const eventType = form.watch('eventType');
  const isFree = form.watch('isFree');

  const handleSubmit = (data: any) => {
    // Restructurer les données pour correspondre au modèle Event
    const formattedData = {
      title: data.title,
      description: data.description,
      date: data.date,
      time: data.time,
      location: data.eventType === 'online' ? null : {
        name: data['location.name'],
        address: data['location.address'],
        city: data['location.city'],
        country: data['location.country'],
      },
      eventType: data.eventType,
      imageUrl: data.imageUrl,
      category: data.category,
      tags: data.tags.split(',').map((tag: string) => tag.trim()),
      availableTickets: data.availableTickets,
      isFree: data.isFree,
      price: data.isFree ? null : {
        standard: parseInt(data.standardPrice),
        ...(data.vipPrice ? { vip: parseInt(data.vipPrice) } : {}),
      },
    };
    
    onSubmit(formattedData);
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Informations sur l'événement</h2>
              
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titre de l'événement</FormLabel>
                    <FormControl>
                      <Input placeholder="Festival de Jazz de Paris" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Décrivez votre événement" 
                        className="min-h-32" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Type d'événement</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="in-person" />
                          </FormControl>
                          <FormLabel className="font-normal">Présentiel</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="online" />
                          </FormControl>
                          <FormLabel className="font-normal">En ligne</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="hybrid" />
                          </FormControl>
                          <FormLabel className="font-normal">Hybride</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Heure</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            {(eventType === 'in-person' || eventType === 'hybrid') && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Lieu de l'événement</h2>
                
                <FormField
                  control={form.control}
                  name="location.name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom du lieu</FormLabel>
                      <FormControl>
                        <Input placeholder="Parc de la Villette" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location.address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse</FormLabel>
                      <FormControl>
                        <Input placeholder="211 Avenue Jean Jaurès" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="location.city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ville</FormLabel>
                        <FormControl>
                          <Input placeholder="Paris" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location.country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pays</FormLabel>
                        <FormControl>
                          <Input placeholder="France" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Détails supplémentaires</h2>
              
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL de l'image</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/image.jpg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Catégorie</FormLabel>
                    <FormControl>
                      <select 
                        className="w-full p-2 border rounded-md"
                        {...field}
                      >
                        <option value="">Sélectionner une catégorie</option>
                        <option value="Conférence">Conférence</option>
                        <option value="Séminaire">Séminaire</option>
                        <option value="Sommet">Sommet</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Webinar">Webinar</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags (séparés par des virgules)</FormLabel>
                    <FormControl>
                      <Input placeholder="Technologie, Business, Innovation" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="availableTickets"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de places disponibles</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="isFree"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="h-4 w-4"
                      />
                    </FormControl>
                    <FormLabel>Événement gratuit</FormLabel>
                  </FormItem>
                )}
              />
              
              {!isFree && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="standardPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prix standard (€)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="45" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="vipPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prix VIP (€) (optionnel)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="120" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
            
            <Button type="submit" className="w-full">Créer l'événement</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EventForm;

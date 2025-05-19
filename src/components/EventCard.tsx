
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Event } from '../types/event';
import { useNavigate } from 'react-router-dom';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate();
  const formattedDate = new Date(event.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Card className="event-card overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="event-image"
        />
        {event.featured && (
          <span className="absolute top-2 left-2 badge-special">
            En vedette
          </span>
        )}
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <div className="text-right">
            <div className="text-sm font-medium text-primary">{event.price.standard}€</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span>{formattedDate} à {event.time}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{event.location.name}, {event.location.city}</span>
          </div>
          <div className="mt-2">
            <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-1">
              {event.category}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-primary"
          onClick={() => navigate(`/event/${event.id}`)}
        >
          Détails
        </Button>
        <Button 
          onClick={() => navigate(`/event/${event.id}`)}
          size="sm"
        >
          Acheter
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;

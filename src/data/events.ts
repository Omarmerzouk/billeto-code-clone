
import { Event } from "../types/event";

export const events: Event[] = [
  {
    id: "1",
    title: "Festival de Jazz de Paris",
    description: "Le plus grand festival de jazz de l'année avec des artistes de renommée mondiale. Une expérience musicale unique dans un cadre exceptionnel au cœur de Paris.",
    date: "2025-06-15",
    time: "19:00",
    location: {
      name: "Parc de la Villette",
      address: "211 Avenue Jean Jaurès",
      city: "Paris"
    },
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 45,
      vip: 120
    },
    category: "Concert",
    tags: ["Jazz", "Festival", "Musique"],
    availableTickets: 500,
    featured: true
  },
  {
    id: "2",
    title: "Conférence Tech Innovation",
    description: "Découvrez les dernières tendances technologiques avec des présentations d'experts de l'industrie et des opportunités de networking.",
    date: "2025-07-22",
    time: "09:00",
    location: {
      name: "Palais des Congrès",
      address: "2 Place de la Porte Maillot",
      city: "Paris"
    },
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 120,
      vip: 350
    },
    category: "Conférence",
    tags: ["Tech", "Innovation", "Business"],
    availableTickets: 300
  },
  {
    id: "3",
    title: "Marathon de Lyon",
    description: "Participez au célèbre marathon de Lyon qui traverse les plus beaux quartiers de la ville. Un parcours exceptionnel pour tous les amateurs de course à pied.",
    date: "2025-10-03",
    time: "08:00",
    location: {
      name: "Place Bellecour",
      address: "Place Bellecour",
      city: "Lyon"
    },
    imageUrl: "https://images.unsplash.com/photo-1600077063877-6b1dae98deef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 50
    },
    category: "Sport",
    tags: ["Course", "Marathon", "Sport"],
    availableTickets: 2000,
    featured: true
  },
  {
    id: "4",
    title: "Exposition d'Art Moderne",
    description: "Une collection unique d'œuvres d'art moderne des plus grands artistes contemporains. Une immersion dans le monde de l'art visuel innovant.",
    date: "2025-08-10",
    time: "10:00",
    location: {
      name: "Centre Pompidou",
      address: "Place Georges-Pompidou",
      city: "Paris"
    },
    imageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 15,
      vip: 30
    },
    category: "Exposition",
    tags: ["Art", "Moderne", "Culture"],
    availableTickets: 1000
  },
  {
    id: "5",
    title: "Salon du Vin",
    description: "Découvrez les meilleurs vins de France et du monde entier lors de ce salon prestigieux. Dégustations, masterclasses et rencontres avec des vignerons passionnés.",
    date: "2025-11-18",
    time: "11:00",
    location: {
      name: "Porte de Versailles",
      address: "1 Place de la Porte de Versailles",
      city: "Paris"
    },
    imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 25,
      vip: 75
    },
    category: "Gastronomie",
    tags: ["Vin", "Dégustation", "Gastronomie"],
    availableTickets: 800
  },
  {
    id: "6",
    title: "Concert Symphonique",
    description: "Un concert exceptionnel de l'Orchestre National de France avec un programme varié allant des grands classiques aux compositions contemporaines.",
    date: "2025-09-05",
    time: "20:00",
    location: {
      name: "Philharmonie de Paris",
      address: "221 Avenue Jean Jaurès",
      city: "Paris"
    },
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 35,
      vip: 90
    },
    category: "Concert",
    tags: ["Classique", "Orchestre", "Musique"],
    availableTickets: 600,
    featured: true
  }
];

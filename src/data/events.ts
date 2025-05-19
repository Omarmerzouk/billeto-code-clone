
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
      city: "Paris",
      country: "France"
    },
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 45,
      vip: 120
    },
    category: "Concert",
    tags: ["Jazz", "Festival", "Musique"],
    availableTickets: 500,
    featured: true,
    organizerId: "org-1",
    status: "upcoming",
    sessions: [
      {
        id: "1-1",
        title: "Ouverture du Festival",
        description: "Cérémonie d'ouverture avec un ensemble de jazz et présentation du programme",
        startTime: "19:00",
        endTime: "20:00"
      },
      {
        id: "1-2",
        title: "Concert de John Smith Quartet",
        description: "Performance exclusive du célèbre quartet de jazz contemporain",
        startTime: "20:30",
        endTime: "22:00",
        speaker: "John Smith"
      },
      {
        id: "1-3",
        title: "Jam Session",
        description: "Session improvisée avec participation du public",
        startTime: "22:30",
        endTime: "00:00"
      }
    ],
    discussionGroup: {
      id: "g-1",
      name: "Festival de Jazz 2025",
      messages: [
        {
          id: "m-1",
          userId: "org-1",
          userName: "Organisateur",
          content: "Bienvenue dans le groupe de discussion du Festival de Jazz 2025 ! Nous sommes ravis de vous accueillir pour cette édition exceptionnelle.",
          timestamp: "2025-05-01T10:30:00.000Z"
        },
        {
          id: "m-2",
          userId: "user-2",
          userName: "Marie",
          content: "Est-ce qu'il y aura une possibilité de rencontrer les artistes après les concerts ?",
          timestamp: "2025-05-02T14:15:00.000Z"
        },
        {
          id: "m-3",
          userId: "org-1",
          userName: "Organisateur",
          content: "Oui, les détenteurs de billets VIP auront accès à une séance de dédicace après le concert principal !",
          timestamp: "2025-05-02T15:30:00.000Z"
        }
      ]
    },
    notifications: [
      {
        id: "n-1",
        title: "Rappel événement",
        message: "Le Festival de Jazz de Paris approche ! N'oubliez pas d'acheter vos billets.",
        timestamp: "2025-05-15T09:00:00.000Z",
        read: false
      },
      {
        id: "n-2",
        title: "Programme mis à jour",
        message: "Le programme du festival a été mis à jour avec de nouveaux artistes !",
        timestamp: "2025-05-10T11:30:00.000Z",
        read: true
      }
    ]
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
      city: "Paris",
      country: "France"
    },
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 120,
      vip: 350
    },
    category: "Conférence",
    tags: ["Tech", "Innovation", "Business"],
    availableTickets: 300,
    organizerId: "org-2",
    status: "upcoming",
    sessions: [
      {
        id: "2-1",
        title: "Les tendances de l'IA en 2025",
        description: "Découvrez les dernières avancées en matière d'intelligence artificielle",
        startTime: "09:30",
        endTime: "10:30",
        speaker: "Dr. Sophie Martin"
      },
      {
        id: "2-2",
        title: "Cybersécurité : défis et solutions",
        description: "Panel sur les enjeux actuels de la cybersécurité",
        startTime: "11:00",
        endTime: "12:30",
        speaker: "Panel d'experts"
      },
      {
        id: "2-3",
        title: "Atelier pratique : Blockchain",
        description: "Atelier pratique sur les applications de la blockchain",
        startTime: "14:00",
        endTime: "16:00",
        speaker: "Marc Dubois"
      }
    ],
    discussionGroup: {
      id: "g-2",
      name: "Tech Innovation 2025",
      messages: [
        {
          id: "m-4",
          userId: "org-2",
          userName: "Organisateur",
          content: "Bienvenue à tous les participants de la conférence Tech Innovation 2025 ! N'hésitez pas à poser vos questions.",
          timestamp: "2025-06-01T08:00:00.000Z"
        }
      ]
    },
    notifications: [
      {
        id: "n-3",
        title: "Nouvel intervenant",
        message: "Nous sommes ravis d'annoncer la participation de Dr. Sophie Martin, experte en IA.",
        timestamp: "2025-06-10T10:00:00.000Z",
        read: false
      }
    ]
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
      city: "Lyon",
      country: "France"
    },
    imageUrl: "https://images.unsplash.com/photo-1600077063877-6b1dae98deef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 50
    },
    category: "Sport",
    tags: ["Course", "Marathon", "Sport"],
    availableTickets: 2000,
    featured: true,
    organizerId: "org-3",
    status: "upcoming",
    sessions: [
      {
        id: "3-1",
        title: "Retrait des dossards",
        description: "Venez retirer votre dossard et votre pack de bienvenue",
        startTime: "La veille, 10:00",
        endTime: "La veille, 18:00"
      },
      {
        id: "3-2",
        title: "Échauffement collectif",
        description: "Échauffement collectif guidé par un coach professionnel",
        startTime: "07:00",
        endTime: "07:45"
      },
      {
        id: "3-3",
        title: "Course principale",
        description: "Marathon 42,195 km",
        startTime: "08:00",
        endTime: "14:00"
      },
      {
        id: "3-4",
        title: "Remise des prix",
        description: "Cérémonie de remise des prix aux vainqueurs",
        startTime: "15:00",
        endTime: "16:00"
      }
    ],
    discussionGroup: {
      id: "g-3",
      name: "Marathon de Lyon 2025",
      messages: [
        {
          id: "m-5",
          userId: "org-3",
          userName: "Organisateur",
          content: "Bienvenue aux coureurs du Marathon de Lyon 2025 ! Ce groupe sera utilisé pour partager les informations importantes.",
          timestamp: "2025-08-01T09:00:00.000Z"
        },
        {
          id: "m-6",
          userId: "user-5",
          userName: "Thomas",
          content: "Quel est le dénivelé total du parcours cette année ?",
          timestamp: "2025-08-02T16:45:00.000Z"
        },
        {
          id: "m-7",
          userId: "org-3",
          userName: "Organisateur",
          content: "Le dénivelé total est de 320m. Le parcours est disponible sur notre site web !",
          timestamp: "2025-08-02T17:30:00.000Z"
        }
      ]
    },
    notifications: [
      {
        id: "n-4",
        title: "Entraînement collectif",
        message: "Un entraînement collectif est organisé le 15 septembre. Inscrivez-vous sur le site !",
        timestamp: "2025-08-20T08:00:00.000Z",
        read: false
      }
    ]
  },
  {
    id: "4",
    title: "Exposition d'Art Moderne",
    description: "Une collection unique d'œuvres d'art moderne des plus grands artistes contemporains. Une immersion dans le monde de l'art visuel innovant.",
    date: "2024-12-10",
    time: "10:00",
    location: {
      name: "Centre Pompidou",
      address: "Place Georges-Pompidou",
      city: "Paris",
      country: "France"
    },
    imageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 15,
      vip: 30
    },
    category: "Exposition",
    tags: ["Art", "Moderne", "Culture"],
    availableTickets: 1000,
    organizerId: "org-4",
    status: "completed",
    sessions: [
      {
        id: "4-1",
        title: "Visite guidée",
        description: "Découverte des œuvres avec un guide spécialisé",
        startTime: "10:30",
        endTime: "12:00"
      },
      {
        id: "4-2",
        title: "Atelier créatif",
        description: "Atelier de création inspiré par les œuvres exposées",
        startTime: "14:00",
        endTime: "16:00"
      }
    ],
    discussionGroup: {
      id: "g-4",
      name: "Exposition Art Moderne",
      messages: [
        {
          id: "m-8",
          userId: "org-4",
          userName: "Organisateur",
          content: "Bienvenue dans le groupe de l'exposition ! N'hésitez pas à partager vos impressions.",
          timestamp: "2024-11-01T10:00:00.000Z"
        }
      ]
    },
    reviews: [
      {
        id: "r-1",
        userId: "user-10",
        userName: "Camille",
        rating: 5,
        comment: "Une exposition extraordinaire ! Les œuvres sont impressionnantes et l'organisation parfaite.",
        date: "2024-12-12T18:30:00.000Z"
      },
      {
        id: "r-2",
        userId: "user-11",
        userName: "Alexandre",
        rating: 4,
        comment: "Très belle exposition, j'ai particulièrement apprécié la section sur l'art abstrait.",
        date: "2024-12-14T11:15:00.000Z"
      }
    ],
    notifications: []
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
      city: "Paris",
      country: "France"
    },
    imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 25,
      vip: 75
    },
    category: "Gastronomie",
    tags: ["Vin", "Dégustation", "Gastronomie"],
    availableTickets: 800,
    organizerId: "org-5",
    status: "upcoming",
    sessions: [
      {
        id: "5-1",
        title: "Masterclass vins de Bourgogne",
        description: "Dégustation commentée des grands crus bourguignons",
        startTime: "11:30",
        endTime: "13:00",
        speaker: "Jean Dupont, sommelier"
      },
      {
        id: "5-2",
        title: "Atelier accord mets et vins",
        description: "Découvrez les secrets des accords parfaits",
        startTime: "14:30",
        endTime: "16:00",
        speaker: "Marie Laurent, chef"
      }
    ],
    discussionGroup: {
      id: "g-5",
      name: "Salon du Vin 2025",
      messages: [
        {
          id: "m-9",
          userId: "org-5",
          userName: "Organisateur",
          content: "Bienvenue aux amateurs de vin ! Ce groupe servira à partager les informations sur le salon et répondre à vos questions.",
          timestamp: "2025-10-01T11:00:00.000Z"
        }
      ]
    },
    notifications: [
      {
        id: "n-5",
        title: "Nouvel exposant",
        message: "Nous sommes heureux d'accueillir le Domaine de la Romanée-Conti pour cette édition !",
        timestamp: "2025-10-15T09:30:00.000Z",
        read: false
      }
    ]
  },
  {
    id: "6",
    title: "Concert Symphonique",
    description: "Un concert exceptionnel de l'Orchestre National de France avec un programme varié allant des grands classiques aux compositions contemporaines.",
    date: "2024-11-05",
    time: "20:00",
    location: {
      name: "Philharmonie de Paris",
      address: "221 Avenue Jean Jaurès",
      city: "Paris",
      country: "France"
    },
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 35,
      vip: 90
    },
    category: "Concert",
    tags: ["Classique", "Orchestre", "Musique"],
    availableTickets: 600,
    featured: true,
    organizerId: "org-6",
    status: "completed",
    sessions: [
      {
        id: "6-1",
        title: "Première partie",
        description: "Mozart - Concerto pour piano n°23",
        startTime: "20:00",
        endTime: "20:45",
        speaker: "Pierre Durand, piano"
      },
      {
        id: "6-2",
        title: "Deuxième partie",
        description: "Beethoven - Symphonie n°7",
        startTime: "21:00",
        endTime: "22:00",
        speaker: "Orchestre National de France"
      }
    ],
    discussionGroup: {
      id: "g-6",
      name: "Concert Symphonique",
      messages: [
        {
          id: "m-10",
          userId: "org-6",
          userName: "Organisateur",
          content: "Bienvenue dans le groupe du concert symphonique !",
          timestamp: "2024-10-01T09:00:00.000Z"
        }
      ]
    },
    reviews: [
      {
        id: "r-3",
        userId: "user-20",
        userName: "Laurent",
        rating: 5,
        comment: "Une soirée magnifique ! L'acoustique était parfaite et l'interprétation de la 7ème de Beethoven exceptionnelle.",
        date: "2024-11-06T23:15:00.000Z"
      },
      {
        id: "r-4",
        userId: "user-21",
        userName: "Sophie",
        rating: 4,
        comment: "Très beau concert, j'ai particulièrement apprécié le concerto pour piano. Dommage que la salle était un peu chaude.",
        date: "2024-11-07T10:30:00.000Z"
      }
    ],
    notifications: []
  }
];

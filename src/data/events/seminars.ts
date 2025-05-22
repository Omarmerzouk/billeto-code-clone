
import { Event } from "../../types/event";

export const seminarsEvents: Event[] = [
  {
    id: "2",
    title: "Séminaire sur la Mobilité Urbaine Durable",
    description: "Un séminaire international dédié aux solutions de mobilité urbaine durable, avec un focus sur l'intégration des véhicules électriques dans les infrastructures urbaines.",
    date: "2025-07-22",
    time: "10:00",
    location: {
      name: "Berlin Congress Center",
      address: "Alexanderstraße 11",
      city: "Berlin",
      country: "Allemagne"
    },
    eventType: "in-person",
    imageUrl: "https://images.unsplash.com/photo-1520608760-eff2c38b6cdf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 80,
      vip: 220
    },
    isFree: false,
    category: "Séminaire",
    tags: ["Mobilité Urbaine", "Développement Durable", "Smart Cities"],
    availableTickets: 400,
    organizerId: "org-2",
    status: "upcoming",
    sessions: [
      {
        id: "2-1",
        title: "Mobilité partagée électrique",
        description: "Solutions de mobilité partagée pour réduire l'empreinte carbone urbaine",
        startTime: "10:30",
        endTime: "12:00",
        speaker: "Hans Weber, Mobilité Berlin"
      },
      {
        id: "2-2",
        title: "Planification urbaine et transports électriques",
        description: "Comment concevoir les villes de demain autour des transports propres",
        startTime: "13:30",
        endTime: "15:00",
        speaker: "Frau Dr. Schmidt, Université Technique de Berlin"
      }
    ],
    discussionGroup: {
      id: "g-2",
      name: "Mobilité Urbaine Durable",
      messages: [
        {
          id: "m-4",
          userId: "org-2",
          userName: "Organisateur",
          content: "Bienvenue à tous les participants du séminaire sur la Mobilité Urbaine Durable ! N'hésitez pas à poser vos questions.",
          timestamp: "2025-06-01T08:00:00.000Z"
        }
      ]
    },
    notifications: [
      {
        id: "n-3",
        title: "Confirmation intervenant",
        message: "Le maire de Berlin participera à la session d'ouverture du séminaire.",
        timestamp: "2025-06-10T10:00:00.000Z",
        read: false
      }
    ]
  },
  {
    id: "6",
    title: "Séminaire sur l'Infrastructure de Recharge Rapide",
    description: "Un séminaire technique détaillant les dernières avancées en matière d'infrastructure de recharge rapide pour véhicules électriques, avec démonstrations pratiques.",
    date: "2025-08-18",
    time: "09:30",
    location: {
      name: "RAI Amsterdam",
      address: "Europaplein 24",
      city: "Amsterdam",
      country: "Pays-Bas"
    },
    eventType: "in-person",
    imageUrl: "https://images.unsplash.com/photo-1558389158-f468349e1d2c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 90,
      vip: 240
    },
    isFree: false,
    category: "Séminaire",
    tags: ["Infrastructure", "Recharge", "Technologie"],
    availableTickets: 350,
    organizerId: "org-6",
    status: "upcoming",
    sessions: [
      {
        id: "6-1",
        title: "Standards de recharge rapide",
        description: "Comparaison des différents standards mondiaux de recharge rapide",
        startTime: "10:00",
        endTime: "11:30",
        speaker: "Jan van der Berg, European EV Association"
      },
      {
        id: "6-2",
        title: "Démonstration de technologies de recharge",
        description: "Présentation pratique des dernières stations de recharge ultra-rapide",
        startTime: "13:00",
        endTime: "15:00"
      }
    ],
    discussionGroup: {
      id: "g-6",
      name: "Séminaire Recharge Rapide",
      messages: []
    },
    notifications: []
  },
  {
    id: "12",
    title: "Séminaire Latino-américain sur la Mobilité Électrique",
    description: "Un séminaire régional explorant les défis et opportunités spécifiques à l'Amérique latine pour le déploiement des véhicules électriques et des infrastructures associées.",
    date: "2025-12-03",
    time: "10:00",
    location: {
      name: "Centro de Convenciones de Cartagena",
      address: "Calle 24 #8A-344",
      city: "Carthagène",
      country: "Colombie"
    },
    eventType: "hybrid",
    imageUrl: "https://images.unsplash.com/photo-1559242810-2089301ab3d5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: null,
    isFree: true,
    category: "Séminaire",
    tags: ["Amérique Latine", "Infrastructure", "Développement régional"],
    availableTickets: 400,
    organizerId: "org-12",
    status: "upcoming",
    sessions: [
      {
        id: "12-1",
        title: "Modèles de financement pour l'infrastructure de recharge",
        description: "Stratégies adaptées aux marchés émergents",
        startTime: "10:30",
        endTime: "12:00",
        speaker: "Carlos Rodríguez, Banque Interaméricaine de Développement"
      },
      {
        id: "12-2",
        title: "Étude de cas: Le programme d'électrification du Chili",
        description: "Analyse du succès de l'électrification des transports au Chili",
        startTime: "13:30",
        endTime: "15:00",
        speaker: "Isabella Martínez, Ministère chilien de l'Énergie"
      }
    ],
    discussionGroup: {
      id: "g-12",
      name: "Séminaire Latino-américain",
      messages: []
    },
    notifications: []
  },
  {
    id: "17",
    title: "Séminaire en Ligne sur la Formation des Techniciens VE",
    description: "Un séminaire gratuit axé sur les programmes de formation nécessaires pour développer une main d'œuvre qualifiée dans le secteur des véhicules électriques.",
    date: "2025-09-10",
    time: "15:00",
    location: null,
    eventType: "online",
    imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: null,
    isFree: true,
    category: "Séminaire",
    tags: ["Formation", "Compétences", "Emploi"],
    availableTickets: 1500,
    organizerId: "org-17",
    status: "upcoming",
    sessions: [
      {
        id: "17-1",
        title: "Besoins en compétences de l'industrie",
        description: "Analyse des compétences recherchées par les constructeurs et les réseaux de maintenance",
        startTime: "15:00",
        endTime: "16:00",
        speaker: "Thomas Martin, Association des Constructeurs Automobiles"
      },
      {
        id: "17-2",
        title: "Programmes de formation innovants",
        description: "Présentation des méthodes d'apprentissage adaptées aux technologies de VE",
        startTime: "16:30",
        endTime: "17:30",
        speaker: "Prof. Laura Wilson, Centre de Formation Technique Automobile"
      }
    ],
    discussionGroup: {
      id: "g-17",
      name: "Formation Techniciens VE",
      messages: []
    },
    notifications: []
  },
  {
    id: "18",
    title: "Workshop Pratique sur la Maintenance des VE",
    description: "Un atelier pratique pour les techniciens et ingénieurs souhaitant se spécialiser dans la maintenance et la réparation des véhicules électriques.",
    date: "2025-10-05",
    time: "09:00",
    location: {
      name: "Centre Technique Automobile",
      address: "25 Rue de l'Innovation",
      city: "Lyon",
      country: "France"
    },
    eventType: "in-person",
    imageUrl: "https://images.unsplash.com/photo-1622186477895-f2af6a0f5522?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 250
    },
    isFree: false,
    category: "Séminaire",
    tags: ["Maintenance", "Formation pratique", "Technique"],
    availableTickets: 50,
    organizerId: "org-18",
    status: "upcoming",
    sessions: [
      {
        id: "18-1",
        title: "Diagnostic des systèmes haute tension",
        description: "Techniques et outils pour diagnostiquer les problèmes dans les systèmes haute tension",
        startTime: "09:00",
        endTime: "12:00",
        speaker: "Jean Dupont, Expert Technique VE"
      },
      {
        id: "18-2",
        title: "Réparation des modules batterie",
        description: "Procédures sécurisées pour la manipulation et la réparation des modules batterie",
        startTime: "13:30",
        endTime: "16:30",
        speaker: "Marie Laurent, Ingénieure en Systèmes Électriques"
      }
    ],
    discussionGroup: {
      id: "g-18",
      name: "Workshop Maintenance VE",
      messages: []
    },
    notifications: []
  }
];

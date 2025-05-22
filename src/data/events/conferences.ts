
import { Event } from "../../types/event";

export const conferencesEvents: Event[] = [
  {
    id: "1",
    title: "Conférence Internationale sur les Véhicules Électriques",
    description: "Une conférence mondiale réunissant les plus grands experts et constructeurs de véhicules électriques. Venez découvrir les dernières innovations et technologies du secteur.",
    date: "2025-06-15",
    time: "09:00",
    location: {
      name: "Palais des Congrès",
      address: "2 Place de la Porte Maillot",
      city: "Paris",
      country: "France"
    },
    eventType: "in-person",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 120,
      vip: 350
    },
    isFree: false,
    category: "Conférence",
    tags: ["Véhicules Électriques", "Innovation", "Technologie"],
    availableTickets: 800,
    featured: true,
    organizerId: "org-1",
    status: "upcoming",
    sessions: [
      {
        id: "1-1",
        title: "Ouverture et présentation",
        description: "Cérémonie d'ouverture et présentation des intervenants",
        startTime: "09:00",
        endTime: "09:45"
      },
      {
        id: "1-2",
        title: "L'avenir des batteries lithium",
        description: "Présentation des dernières avancées en matière de batteries pour véhicules électriques",
        startTime: "10:00",
        endTime: "11:30",
        speaker: "Dr. Marie Dubois, Tesla Motors"
      },
      {
        id: "1-3",
        title: "Table ronde: Infrastructure de recharge",
        description: "Discussion sur les défis et solutions pour l'infrastructure de recharge mondiale",
        startTime: "13:00",
        endTime: "14:30",
        speaker: "Panel d'experts internationaux"
      }
    ],
    discussionGroup: {
      id: "g-1",
      name: "Conférence VE 2025",
      messages: [
        {
          id: "m-1",
          userId: "org-1",
          userName: "Organisateur",
          content: "Bienvenue dans le groupe de discussion de la Conférence Internationale sur les Véhicules Électriques 2025 !",
          timestamp: "2025-05-01T10:30:00.000Z"
        },
        {
          id: "m-2",
          userId: "user-2",
          userName: "Pierre",
          content: "Est-ce que les présentations seront disponibles après la conférence ?",
          timestamp: "2025-05-02T14:15:00.000Z"
        },
        {
          id: "m-3",
          userId: "org-1",
          userName: "Organisateur",
          content: "Oui, toutes les présentations seront partagées avec les participants après l'événement.",
          timestamp: "2025-05-02T15:30:00.000Z"
        }
      ]
    },
    notifications: [
      {
        id: "n-1",
        title: "Rappel événement",
        message: "La Conférence Internationale sur les Véhicules Électriques approche ! N'oubliez pas d'acheter vos billets.",
        timestamp: "2025-05-15T09:00:00.000Z",
        read: false
      },
      {
        id: "n-2",
        title: "Nouvel intervenant confirmé",
        message: "Nous sommes ravis d'annoncer que le PDG de Tesla participera à notre conférence !",
        timestamp: "2025-05-10T11:30:00.000Z",
        read: true
      }
    ]
  },
  {
    id: "5",
    title: "Conférence sur les Technologies de Conduite Autonome",
    description: "Une conférence spécialisée sur l'intégration des technologies de conduite autonome dans les véhicules électriques, abordant les défis techniques et réglementaires.",
    date: "2025-11-08",
    time: "10:00",
    location: {
      name: "Tokyo International Forum",
      address: "5-1 Marunouchi 3-chome, Chiyoda-ku",
      city: "Tokyo",
      country: "Japon"
    },
    eventType: "in-person",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 180,
      vip: 450
    },
    isFree: false,
    category: "Conférence",
    tags: ["Conduite Autonome", "IA", "Technologie"],
    availableTickets: 500,
    organizerId: "org-5",
    status: "upcoming",
    sessions: [
      {
        id: "5-1",
        title: "Défis de l'IA pour la conduite autonome",
        description: "Les dernières avancées en intelligence artificielle pour la conduite autonome",
        startTime: "10:30",
        endTime: "12:00",
        speaker: "Akira Nakamura, Honda R&D"
      },
      {
        id: "5-2",
        title: "Sécurité et réglementation",
        description: "État des lieux des cadres réglementaires internationaux",
        startTime: "13:30",
        endTime: "15:00",
        speaker: "Emily Wang, International Transport Forum"
      }
    ],
    discussionGroup: {
      id: "g-5",
      name: "Conduite Autonome 2025",
      messages: []
    },
    notifications: []
  },
  {
    id: "9",
    title: "Conférence sur la Reconversion des Véhicules Classiques",
    description: "Une conférence spécialisée sur les techniques et réglementations pour la conversion de véhicules classiques en véhicules électriques, alliant patrimoine automobile et technologie moderne.",
    date: "2025-07-08",
    time: "10:00",
    location: {
      name: "Turin Exhibition Centre",
      address: "Via Nizza 294",
      city: "Turin",
      country: "Italie"
    },
    eventType: "in-person",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2570&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 85,
      vip: 200
    },
    isFree: false,
    category: "Conférence",
    tags: ["Conversion", "Voitures classiques", "Restauration"],
    availableTickets: 300,
    organizerId: "org-9",
    status: "upcoming",
    sessions: [
      {
        id: "9-1",
        title: "Aspects techniques de la conversion",
        description: "Guide pratique pour la conversion de voitures classiques en électriques",
        startTime: "10:30",
        endTime: "12:30",
        speaker: "Roberto Bianchi, Classic EV Conversions"
      },
      {
        id: "9-2",
        title: "Préservation de l'héritage automobile",
        description: "Comment respecter l'authenticité tout en modernisant la motorisation",
        startTime: "14:00",
        endTime: "15:30",
        speaker: "Sofia Romano, Museo dell'Automobile"
      }
    ],
    discussionGroup: {
      id: "g-9",
      name: "Reconversion VE",
      messages: []
    },
    notifications: []
  },
  {
    id: "15",
    title: "Conférence Africaine sur les Solutions de Transport Durable",
    description: "Une conférence panafricaine dédiée aux solutions de transport électrique adaptées aux défis spécifiques du continent, avec un accent sur les modèles économiques innovants et les infrastructures résilientes.",
    date: "2026-04-15",
    time: "09:30",
    location: {
      name: "Cape Town International Convention Centre",
      address: "Convention Square, 1 Lower Long Street",
      city: "Le Cap",
      country: "Afrique du Sud"
    },
    eventType: "hybrid",
    imageUrl: "https://images.unsplash.com/photo-1566788250155-5e04c3163280?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: null,
    isFree: true,
    category: "Conférence",
    tags: ["Afrique", "Développement durable", "Solutions locales"],
    availableTickets: 600,
    organizerId: "org-15",
    status: "upcoming",
    sessions: [
      {
        id: "15-1",
        title: "Leapfrogging: Opportunités pour l'Afrique dans la mobilité électrique",
        description: "Comment l'Afrique peut sauter des étapes dans son développement de transport",
        startTime: "10:00",
        endTime: "11:30",
        speaker: "Dr. Nelson Mandela Jr., African Development Institute"
      },
      {
        id: "15-2",
        title: "Microréseaux et mobilité: Solutions intégrées",
        description: "Utilisation des énergies renouvelables locales pour la mobilité électrique",
        startTime: "13:00",
        endTime: "14:30",
        speaker: "Aisha Nkosi, Renewable Energy Solutions Africa"
      },
      {
        id: "15-3",
        title: "Table ronde: Politiques publiques et investissements",
        description: "Stratégies pour attirer les investissements dans l'écosystème de mobilité électrique africain",
        startTime: "15:00",
        endTime: "16:30",
        speaker: "Panel d'experts et décideurs politiques"
      }
    ],
    discussionGroup: {
      id: "g-15",
      name: "Conférence Africaine",
      messages: []
    },
    notifications: []
  },
  {
    id: "16",
    title: "Conférence Virtuelle sur les Innovations en Batteries",
    description: "Une conférence 100% en ligne explorant les dernières avancées dans les technologies de batteries pour véhicules électriques et leurs applications dans d'autres secteurs.",
    date: "2025-07-30",
    time: "14:00",
    location: null,
    eventType: "online",
    imageUrl: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 50
    },
    isFree: false,
    category: "Conférence",
    tags: ["Batteries", "Innovation", "Recherche"],
    availableTickets: 2000,
    organizerId: "org-16",
    status: "upcoming",
    sessions: [
      {
        id: "16-1",
        title: "Les nouvelles chimies de batteries",
        description: "Exploration des nouvelles compositions chimiques promettant une densité énergétique supérieure",
        startTime: "14:00",
        endTime: "15:30",
        speaker: "Prof. Li Ming, Stanford University"
      },
      {
        id: "16-2",
        title: "Durabilité et recyclage",
        description: "Solutions pour une économie circulaire des batteries",
        startTime: "16:00",
        endTime: "17:30",
        speaker: "Dr. Anna Schmidt, European Battery Alliance"
      }
    ],
    discussionGroup: {
      id: "g-16",
      name: "Innovations Batteries 2025",
      messages: []
    },
    notifications: []
  }
];


import { Event } from "../../types/event";

export const summitsEvents: Event[] = [
  {
    id: "3",
    title: "Symposium Asiatique sur les Batteries de Nouvelle Génération",
    description: "Un symposium scientifique centré sur les avancées technologiques dans le domaine des batteries pour véhicules électriques, réunissant les meilleurs chercheurs d'Asie et du monde.",
    date: "2025-09-05",
    time: "08:00",
    location: {
      name: "Shanghai International Convention Center",
      address: "2727 Riverside Avenue",
      city: "Shanghai",
      country: "Chine"
    },
    eventType: "in-person",
    imageUrl: "https://images.unsplash.com/photo-1635416973598-9f7ca9d49a96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 150,
      vip: 400
    },
    isFree: false,
    category: "Symposium",
    tags: ["Batteries", "R&D", "Technologie"],
    availableTickets: 600,
    organizerId: "org-3",
    status: "upcoming",
    sessions: [
      {
        id: "3-1",
        title: "Batteries à électrolyte solide",
        description: "État de la recherche sur les batteries à électrolyte solide",
        startTime: "09:00",
        endTime: "10:30",
        speaker: "Prof. Li Wei, Université de Tsinghua"
      },
      {
        id: "3-2",
        title: "Recyclage des batteries lithium-ion",
        description: "Solutions durables pour le recyclage des batteries de véhicules électriques",
        startTime: "11:00",
        endTime: "12:30",
        speaker: "Dr. Tanaka Hiroshi, Tokyo Institute of Technology"
      },
      {
        id: "3-3",
        title: "Matériaux alternatifs pour batteries",
        description: "Exploration des matériaux alternatifs pour réduire la dépendance aux terres rares",
        startTime: "14:00",
        endTime: "15:30",
        speaker: "Dr. Kim Sun-ji, Seoul National University"
      }
    ],
    discussionGroup: {
      id: "g-3",
      name: "Symposium Batteries 2025",
      messages: []
    },
    notifications: []
  },
  {
    id: "4",
    title: "Forum Américain de l'Industrie Automobile Électrique",
    description: "Le plus grand rassemblement américain dédié à l'industrie automobile électrique, réunissant constructeurs, équipementiers, start-ups et investisseurs pour façonner l'avenir du secteur.",
    date: "2025-10-12",
    time: "09:00",
    location: {
      name: "Moscone Center",
      address: "747 Howard Street",
      city: "San Francisco",
      country: "États-Unis"
    },
    eventType: "hybrid",
    imageUrl: "https://images.unsplash.com/photo-1556221620-7af0944f8c30?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 200,
      vip: 550
    },
    isFree: false,
    category: "Forum",
    tags: ["Industrie Automobile", "Investissement", "Innovation"],
    availableTickets: 1200,
    featured: true,
    organizerId: "org-4",
    status: "upcoming",
    sessions: [
      {
        id: "4-1",
        title: "État du marché américain des véhicules électriques",
        description: "Analyse des tendances et projections pour les 5 prochaines années",
        startTime: "09:30",
        endTime: "11:00",
        speaker: "Sarah Johnson, EV Market Analytics"
      },
      {
        id: "4-2",
        title: "Financer l'innovation dans la mobilité électrique",
        description: "Panel de discussion avec des investisseurs majeurs du secteur",
        startTime: "13:00",
        endTime: "14:30",
        speaker: "Panel d'investisseurs"
      },
      {
        id: "4-3",
        title: "Start-up Pitch Session",
        description: "Les start-ups les plus prometteuses présentent leurs innovations",
        startTime: "15:00",
        endTime: "17:00"
      }
    ],
    discussionGroup: {
      id: "g-4",
      name: "Forum Américain VE",
      messages: []
    },
    notifications: []
  },
  {
    id: "7",
    title: "Conférence Nordique sur le Transport Électrique",
    description: "Une conférence explorant les solutions de transport électrique adaptées aux conditions climatiques nordiques, avec un accent sur l'autonomie et la performance par temps froid.",
    date: "2026-01-15",
    time: "09:00",
    location: {
      name: "Stockholmsmässan",
      address: "Mässvägen 1",
      city: "Stockholm",
      country: "Suède"
    },
    eventType: "in-person",
    imageUrl: "https://images.unsplash.com/photo-1581141388767-99d35f2e638b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 110,
      vip: 280
    },
    isFree: false,
    category: "Conférence",
    tags: ["Transport", "Climat froid", "Performance"],
    availableTickets: 400,
    organizerId: "org-7",
    status: "upcoming",
    sessions: [
      {
        id: "7-1",
        title: "Optimisation des batteries pour climat froid",
        description: "Recherches sur l'amélioration des performances des batteries en conditions hivernales",
        startTime: "09:30",
        endTime: "11:00",
        speaker: "Dr. Anders Eriksson, Université de Stockholm"
      },
      {
        id: "7-2",
        title: "Étude de cas: Flotte de bus électriques à Oslo",
        description: "Retour d'expérience sur l'exploitation de bus électriques en Norvège",
        startTime: "13:00",
        endTime: "14:30",
        speaker: "Ingrid Hansen, Oslo Transport Authority"
      }
    ],
    discussionGroup: {
      id: "g-7",
      name: "Conférence Nordique VE",
      messages: []
    },
    notifications: []
  },
  {
    id: "8",
    title: "Forum International des Politiques de Transport Électrique",
    description: "Un forum réunissant décideurs politiques, urbanistes et experts pour discuter des politiques publiques favorisant l'adoption des véhicules électriques à l'échelle mondiale.",
    date: "2025-09-25",
    time: "10:00",
    location: {
      name: "Kenyatta International Convention Centre",
      address: "Harambee Avenue",
      city: "Nairobi",
      country: "Kenya"
    },
    eventType: "hybrid",
    imageUrl: "https://images.unsplash.com/photo-1550717278-5d6fcaf5bfd7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 130,
      vip: 380
    },
    isFree: false,
    category: "Forum",
    tags: ["Politique Publique", "Transport", "Développement"],
    availableTickets: 450,
    featured: true,
    organizerId: "org-8",
    status: "upcoming",
    sessions: [
      {
        id: "8-1",
        title: "Incitations fiscales pour les véhicules électriques",
        description: "Analyse comparative des politiques fiscales à travers le monde",
        startTime: "10:30",
        endTime: "12:00",
        speaker: "Dr. Mwangi Kimenyi, African Development Bank"
      },
      {
        id: "8-2",
        title: "Table ronde: Transport électrique dans les économies émergentes",
        description: "Défis et opportunités pour l'adoption massive des véhicules électriques",
        startTime: "14:00",
        endTime: "16:00",
        speaker: "Panel d'experts internationaux"
      }
    ],
    discussionGroup: {
      id: "g-8",
      name: "Forum Politiques VE",
      messages: []
    },
    notifications: []
  },
  {
    id: "10",
    title: "Sommet Australasien sur le Transport Durable",
    description: "Un sommet majeur réunissant leaders de l'industrie, innovateurs et décideurs politiques pour accélérer la transition vers des solutions de transport durables en Australie et Asie-Pacifique.",
    date: "2025-11-20",
    time: "08:30",
    location: {
      name: "International Convention Centre",
      address: "14 Darling Drive",
      city: "Sydney",
      country: "Australie"
    },
    eventType: "hybrid",
    imageUrl: "https://images.unsplash.com/photo-1562426509-5044a121aa49?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 160,
      vip: 420
    },
    isFree: false,
    category: "Sommet",
    tags: ["Transport Durable", "Industrie", "Innovation"],
    availableTickets: 700,
    organizerId: "org-10",
    status: "upcoming",
    sessions: [
      {
        id: "10-1",
        title: "L'électrification des flottes commerciales",
        description: "Stratégies pour la transition des flottes d'entreprises vers l'électrique",
        startTime: "09:00",
        endTime: "10:30",
        speaker: "Michael Thompson, Fleet Electrification Consultants"
      },
      {
        id: "10-2",
        title: "Transport public électrique",
        description: "Études de cas de villes ayant réussi l'électrification de leur réseau public",
        startTime: "11:00",
        endTime: "12:30",
        speaker: "Lisa Wong, Transport Authority Singapore"
      },
      {
        id: "10-3",
        title: "Solutions de micromobilité pour les environnements urbains",
        description: "Innovations en matière de transport individuel électrique pour les derniers kilomètres",
        startTime: "14:00",
        endTime: "15:30",
        speaker: "Dr. James Wilson, University of Melbourne"
      }
    ],
    discussionGroup: {
      id: "g-10",
      name: "Sommet Australasien",
      messages: []
    },
    notifications: []
  },
  {
    id: "11",
    title: "Conférence Moyen-Orient sur l'Énergie et la Mobilité",
    description: "Une conférence examinant l'intégration des énergies renouvelables et de la mobilité électrique dans la région du Moyen-Orient, avec un accent sur les défis spécifiques au climat désertique.",
    date: "2026-02-10",
    time: "09:00",
    location: {
      name: "Dubai World Trade Centre",
      address: "Sheikh Zayed Road",
      city: "Dubai",
      country: "Émirats Arabes Unis"
    },
    eventType: "in-person",
    imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 190,
      vip: 480
    },
    isFree: false,
    category: "Conférence",
    tags: ["Énergie Renouvelable", "Mobilité", "Climat désertique"],
    availableTickets: 550,
    organizerId: "org-11",
    status: "upcoming",
    sessions: [
      {
        id: "11-1",
        title: "Intégration des énergies solaires et mobilité électrique",
        description: "Solutions pour alimenter les infrastructures de recharge par énergie solaire",
        startTime: "09:30",
        endTime: "11:00",
        speaker: "Sheikh Mohammad Al Maktoum, Dubai Clean Energy Strategy"
      },
      {
        id: "11-2",
        title: "Optimiser les performances des VE en climat chaud",
        description: "Technologies adaptées aux conditions extrêmes des pays du Golfe",
        startTime: "13:00",
        endTime: "14:30",
        speaker: "Dr. Fatima Al-Suwaidi, UAE University"
      }
    ],
    discussionGroup: {
      id: "g-11",
      name: "Conférence Moyen-Orient",
      messages: []
    },
    notifications: []
  },
  {
    id: "13",
    title: "Congrès Indien sur les Solutions de Mobilité Électrique",
    description: "Un congrès majeur explorant les solutions de transport électrique adaptées au marché indien, abordant à la fois les zones urbaines denses et les régions rurales.",
    date: "2026-03-05",
    time: "09:00",
    location: {
      name: "Hyderabad International Convention Centre",
      address: "HITEC City",
      city: "Hyderabad",
      country: "Inde"
    },
    eventType: "in-person",
    imageUrl: "https://images.unsplash.com/photo-1653028339015-ea30d656942e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 75,
      vip: 200
    },
    isFree: false,
    category: "Congrès",
    tags: ["Mobilité", "Marché indien", "Zones rurales"],
    availableTickets: 800,
    featured: true,
    organizerId: "org-13",
    status: "upcoming",
    sessions: [
      {
        id: "13-1",
        title: "Véhicules électriques abordables pour le marché indien",
        description: "Stratégies pour développer des VE adaptés aux besoins et budgets locaux",
        startTime: "09:30",
        endTime: "11:00",
        speaker: "Raj Patel, Tata Motors Electric Division"
      },
      {
        id: "13-2",
        title: "Microréseaux solaires et recharge en zones rurales",
        description: "Solutions innovantes pour les régions à faible infrastructure électrique",
        startTime: "13:00",
        endTime: "14:30",
        speaker: "Dr. Priya Singh, Indian Institute of Technology Delhi"
      },
      {
        id: "13-3",
        title: "Rickshaws et vélos électriques",
        description: "L'électrification des modes de transport traditionnels",
        startTime: "15:00",
        endTime: "16:30",
        speaker: "Vikram Mehta, Urban Mobility Solutions"
      }
    ],
    discussionGroup: {
      id: "g-13",
      name: "Congrès Indien VE",
      messages: []
    },
    notifications: []
  },
  {
    id: "14",
    title: "Forum Canadien sur l'Électrification des Transports",
    description: "Un forum axé sur les défis spécifiques de l'électrification des transports dans les régions froides et peu peuplées du Canada, avec un accent sur l'autonomie et les infrastructures rurales.",
    date: "2025-10-08",
    time: "09:00",
    location: {
      name: "Vancouver Convention Centre",
      address: "1055 Canada Place",
      city: "Vancouver",
      country: "Canada"
    },
    eventType: "in-person",
    imageUrl: "https://images.unsplash.com/photo-1599293509168-f6454cbe8999?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 140,
      vip: 350
    },
    isFree: false,
    category: "Forum",
    tags: ["Régions froides", "Infrastructure rurale", "Grandes distances"],
    availableTickets: 450,
    organizerId: "org-14",
    status: "upcoming",
    sessions: [
      {
        id: "14-1",
        title: "Réseau de recharge pour grands espaces",
        description: "Planification stratégique des corridors de recharge entre zones urbaines distantes",
        startTime: "09:30",
        endTime: "11:00",
        speaker: "Michelle Thompson, Transport Canada"
      },
      {
        id: "14-2",
        title: "Véhicules électriques et températures extrêmes",
        description: "Solutions pour maintenir l'autonomie en conditions hivernales sévères",
        startTime: "13:00",
        endTime: "14:30",
        speaker: "Prof. Robert Williams, University of British Columbia"
      }
    ],
    discussionGroup: {
      id: "g-14",
      name: "Forum Canadien",
      messages: []
    },
    notifications: []
  }
];

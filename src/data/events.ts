
import { Event } from "../types/event";

export const events: Event[] = [
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
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 120,
      vip: 350
    },
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
    imageUrl: "https://images.unsplash.com/photo-1520608760-eff2c38b6cdf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 80,
      vip: 220
    },
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
    imageUrl: "https://images.unsplash.com/photo-1635416973598-9f7ca9d49a96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 150,
      vip: 400
    },
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
    imageUrl: "https://images.unsplash.com/photo-1556221620-7af0944f8c30?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 200,
      vip: 550
    },
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
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 180,
      vip: 450
    },
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
    imageUrl: "https://images.unsplash.com/photo-1558389158-f468349e1d2c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 90,
      vip: 240
    },
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
    imageUrl: "https://images.unsplash.com/photo-1581141388767-99d35f2e638b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 110,
      vip: 280
    },
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
    imageUrl: "https://images.unsplash.com/photo-1550717278-5d6fcaf5bfd7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 130,
      vip: 380
    },
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
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2570&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 85,
      vip: 200
    },
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
    imageUrl: "https://images.unsplash.com/photo-1562426509-5044a121aa49?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 160,
      vip: 420
    },
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
    imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 190,
      vip: 480
    },
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
    imageUrl: "https://images.unsplash.com/photo-1559242810-2089301ab3d5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 95,
      vip: 250
    },
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
    imageUrl: "https://images.unsplash.com/photo-1653028339015-ea30d656942e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 75,
      vip: 200
    },
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
    imageUrl: "https://images.unsplash.com/photo-1599293509168-f6454cbe8999?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 140,
      vip: 350
    },
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
    imageUrl: "https://images.unsplash.com/photo-1566788250155-5e04c3163280?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: {
      standard: 110,
      vip: 290
    },
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
  }
];


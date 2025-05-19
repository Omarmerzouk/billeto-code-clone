
export interface EventSession {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  speaker?: string;
}

export interface EventReview {
  id: string;
  userId: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface DiscussionMessage {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
}

export interface DiscussionGroup {
  id: string;
  name: string;
  messages: DiscussionMessage[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: {
    name: string;
    address: string;
    city: string;
    country: string;
  };
  imageUrl: string;
  price: {
    standard: number;
    vip?: number;
  };
  category: string;
  tags: string[];
  availableTickets: number;
  featured?: boolean;
  organizerId?: string;
  organizerName?: string; // Ajouté pour l'intégration avec MySQL
  sessions?: EventSession[];
  reviews?: EventReview[];
  discussionGroup?: DiscussionGroup;
  notifications?: Notification[];
  status: 'upcoming' | 'ongoing' | 'completed';
  createdAt?: string; // Ajouté pour l'intégration avec MySQL
  updatedAt?: string; // Ajouté pour l'intégration avec MySQL
}

// Types pour l'intégration MySQL
export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // En pratique, toujours stocké crypté
  role: 'user' | 'organizer' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface Ticket {
  id: string;
  eventId: string;
  userId: string;
  type: 'standard' | 'vip';
  price: number;
  purchaseDate: string;
  status: 'valid' | 'used' | 'cancelled';
  qrCode?: string;
}

export interface Payment {
  id: string;
  ticketId: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: string;
  transactionId: string;
  date: string;
}

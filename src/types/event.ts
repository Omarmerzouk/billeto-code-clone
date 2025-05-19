
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
  sessions?: EventSession[];
  reviews?: EventReview[];
  discussionGroup?: DiscussionGroup;
  notifications?: Notification[];
  status: 'upcoming' | 'ongoing' | 'completed';
}

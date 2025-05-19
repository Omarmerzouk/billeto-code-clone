
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
}

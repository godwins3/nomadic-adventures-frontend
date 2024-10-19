

export interface Review {
  id: number;
  tourId: number;
  rating: number;
  comment: string;
  author: string;
  date: Date;
}

export interface BookingData {
  date: string;
  travelers: number;
  additionalOptions: string[];
}

export interface Destination {
  id: number;
  name: string;
}

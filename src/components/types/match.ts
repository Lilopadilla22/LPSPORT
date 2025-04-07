export type Match = {
  id: string;
  title: string;
  city: string;
  distance: number;
  date: string;
  level: 'novato' | 'intermedio' | 'avanzado';
  players: number;
  maxPlayers: number;
  location: string;
  image: any;
  available: boolean,
};

export type ReviewProps = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: 1 | 2 | 3 | 4 | 5;
  time: string;
  text: string;
}
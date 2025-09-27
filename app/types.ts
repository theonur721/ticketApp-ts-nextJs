export type TicketType = {
  title: string;
  description: string;
  category: "Yazılım Sorunu" | "Donanım Sorunu" | "Bağlantı Sorunu";
  priority: 1 | 2 | 3 | 4 | 5;
  progress: number;
  status: "Başladı" | "Başlamadı" | "Bitti";
  createdAt: string;
  _id: string;
};

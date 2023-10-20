export interface Ivehicle {
  title: string;
  description: string;
  number: string;
  price: string;
  category: string;
  type: string;
  country: string;
  city: string;
  km: string;
  year: string;
  mediaUrls: { url?: string; fileType?: string }[];
  createdAt?: Date;
  userId?: string; // Use o tipo correto para o ID do usuário (por exemplo, string)
}

export interface vehicleRepository {
  // findById(id: string): Promise<Iuser | null>;
  // findByEmail(email: string): Promise<Iuser | null>;
  create(data: Ivehicle): Promise<Ivehicle>;
}

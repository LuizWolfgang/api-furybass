export interface Iservice {
  title: string;
  description: string;
  number: string;
  price: string;
  category: string;
  type: string;
  country: string;
  city: string;
  mediaUrls: { url?: string; fileType?: string }[];
  createdAt?: Date;
  userId?: string; // Use o tipo correto para o ID do usuário (por exemplo, string)
}

export interface serviceRepository {
  // findById(id: string): Promise<Iuser | null>;
  // findByEmail(email: string): Promise<Iuser | null>;
  create(data: Iservice): Promise<Iservice>;
}

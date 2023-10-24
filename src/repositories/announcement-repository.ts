export interface Ivehicle {
  userId: string;
  title: string;
  description: string;
  number: string;
  price: string;
  category: string;
  type: string;
  country: string;
  city: string;
  brand?: string;
  km?: string;
  year?: string;
  mediaUrls: { url?: string; fileType?: string }[];
  createdAt?: Date;
}

export interface vehicleRepository {
  // findById(id: string): Promise<Iuser | null>;
  // findByEmail(email: string): Promise<Iuser | null>;
  findManyVehicles(page: number): Promise<Ivehicle[]>;
  create(data: Ivehicle): Promise<Ivehicle>;
}

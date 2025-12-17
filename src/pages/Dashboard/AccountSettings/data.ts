export interface UserData {
  firstName: string;
  lastName: string;
  documentId: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  address: string;
  city: string;
  profileImage?: string;
}

export const mockUserData: UserData = {
  firstName: "Carlos",
  lastName: "Rodríguez",
  documentId: "1234567890",
  email: "carlos.rodriguez@example.com",
  countryCode: "+57",
  phoneNumber: "3001234567",
  address: "Calle 123 #45-67",
  city: "Bogotá",
  profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
};

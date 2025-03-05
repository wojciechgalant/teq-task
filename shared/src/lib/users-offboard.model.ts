export interface Address {
  streetLine1: string;
  country: string;
  postalCode: string;
  receiver: string;
}

export interface ContactInfo {
  notes: string;
  phone: string;
  email: string;
}

export interface UserDetails {
  address: Address;
  contactInfo: ContactInfo;
}

export interface OffboardUserResponse {
  status: number;
  message: string;
}

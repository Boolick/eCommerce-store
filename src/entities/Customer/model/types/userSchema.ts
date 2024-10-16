// объявляем поля, которые нам возвращает бэкенд
export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  streetName: string;
  streetNumber: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface UserData {
  id: string;
  version: number;
  versionModifiedAt: string;
  lastMessageSequenceNumber: number;
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: {
    clientId: string | null;
    isPlatformClient: boolean;
    user?: {
      typeId: string;
      id: string;
    };
  } | null;
  createdBy: {
    isPlatformClient: boolean;
  };
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  addresses: Address[];
  shippingAddressIds: string[];
  billingAddressIds: string[];
  isEmailVerified: boolean;
  key: string | null;
  stores: string[];
  authenticationMode: string;
}
export interface UserState {
  data: UserData | null;
  token: string | null;
  error: string | null;
}

// features/loginForm/types/loginSchema.ts

export interface PreLoginResponse {
  access_token: string | null;
  expires_in: number;
  token_type: 'Bearer';
  scope: string;
  refresh_token: string;
}

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

export interface LoginResponse {
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
  };
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
  key: string;
  stores: string[];
  authenticationMode: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginSchema {
  loginData: LoginResponse | null;
  token: string | null;
}

export interface TokenResponse {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number;
  scope: string;
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

export interface SignUpResponse {
  customer: {
    id: string;
    version: number;
    versionModifiedAt: string;
    lastMessageSequenceNumber: number;
    createdAt: string;
    lastModifiedAt: string;
    lastModifiedBy: {
      clientId: string;
      isPlatformClient: boolean;
    };
    createdBy: {
      clientId: string;
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
    stores: string[];
    authenticationMode: string;
  };
}

export interface SignUpRequest {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface SignUpSchema {
  SignUpData: SignUpResponse | null;
  token: string | null;
  error: string | null;
}

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
export interface UserAddressesProps {
  addresses: Address[];
  shippingAddressIds: string[];
  billingAddressIds: string[];
}

export interface CustomerUpdateAction {
  action: string;
  [key: string]: unknown;
}

export interface CustomerUpdateRequest {
  id?: string;
  token: string;
  version?: number;
  actions: CustomerUpdateAction[];
}

export interface CustomerResponse {
  id: string;
  version: number;
  email: string;
  firstName: string;
  lastName: string;
  addresses: Address[];
  shippingAddressIds: string[];
  billingAddressIds: string[];
}

export interface ChangePasswordRequest {
  id: string;
  token: string;
  version: number;
  currentPassword: string;
  newPassword: string;
}

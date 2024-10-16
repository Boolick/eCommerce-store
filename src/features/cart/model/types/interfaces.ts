export interface Price {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}

export interface TaxRate {
  name: string;
  amount: number;
  includedInPrice: boolean;
  country: string;
  id: string;
  key: string;
  subRates: unknown[];
}

export interface LineItem {
  id: string;
  productId: string;
  productKey: string;
  name: Record<string, string>;
  variant: {
    id: number;
    sku: string;
    prices: {
      id: string;
      value: Price;
      country: string;
    }[];
    images: {
      url: string;
      dimensions: {
        w: number;
        h: number;
      };
    }[];
    attributes: {
      name: string;
      value: Record<string, string>;
    }[];
    availability: {
      isOnStock: boolean;
      availableQuantity: number;
    };
  };
  price: {
    id: string;
    value: Price;
    country: string;
  };
  quantity: number;
  totalPrice: Price;
  taxedPrice: {
    totalNet: Price;
    totalGross: Price;
    taxPortions: {
      rate: number;
      amount: Price;
      name: string;
    }[];
    totalTax: Price;
  };
}

export interface CartInterface {
  type: string;
  id: string;
  version: number;
  versionModifiedAt: string;
  createdAt: string;
  lastModifiedAt: string;
  key: string;
  customerId: string;
  customerEmail: string;
  lineItems: LineItem[];
}

export interface CartApiResponse {
  limit: number;
  offset: number;
  count: number;
  total: number;
  results: CartInterface[];
}

export interface CartCreateResponse {
  type: string;
  id: string;
  version: number;
  versionModifiedAt: string;
  createdAt: string;
  lastModifiedAt: string;
  lineItems: LineItem[];
}

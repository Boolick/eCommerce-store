export interface AnonymousTokenState {
  token: string | null;
  token_type: string | null;
  expires_in: number;
  refresh_token: string | null;
  scope: string | null;
}

export interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  imgSrc: string;
  price: string;
}

export interface ProductResponse {
  id: string;
  version: number;
  productType: ProductType;
  name: LocalizedString;
  description: LocalizedString;
  categories: Category[];
  categoryOrderHints: Record<string, string>;
  slug: LocalizedString;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  masterVariant: MasterVariant;
  variants: Variant[];
  searchKeywords: Record<string, unknown>;
  hasStagedChanges: boolean;
  published: boolean;
  key: string;
  priceMode: string;
  createdAt: string;
  lastModifiedAt: string;
}

interface ProductType {
  typeId: string;
  id: string;
}

interface LocalizedString {
  [key: string]: string;
}

interface Category {
  typeId: string;
  id: string;
}

export interface MasterVariant {
  id: number;
  sku: string;
  key: string;
  prices: Price[];
  images: Image[];
  attributes: unknown[];
  assets: unknown[];
  availability: Availability;
}

interface Price {
  id: string;
  value: PriceValue;
  country: string;
}

interface PriceValue {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}

interface Image {
  url: string;
  label: string;
  dimensions: Dimensions;
}

interface Dimensions {
  w: number;
  h: number;
}

interface Availability {
  isOnStock: boolean;
  availableQuantity: number;
  version: number;
  id: string;
}

interface Variant {
  // При необходимости можно тоже определить
}

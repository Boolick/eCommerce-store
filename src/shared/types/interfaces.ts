export interface AnonymousTokenResponse {
  access_token: string | null;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

import {
  AUTH_URL,
  ANONYMOUS_CLIENT_ID,
  ANONYMOUS_CLIENT_SECRET,
  PROJECT_KEY,
} from 'shared/const/client';
import {AnonymousTokenResponse} from '../types/interfaces';

export async function fetchToken(): Promise<AnonymousTokenResponse> {
  const response = await fetch(
    `${AUTH_URL}${PROJECT_KEY}/anonymous/token?grant_type=client_credentials`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${ANONYMOUS_CLIENT_ID}:${ANONYMOUS_CLIENT_SECRET}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials`,
    }
  );
  return response.json();
}

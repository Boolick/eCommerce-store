import {Middleware} from '@reduxjs/toolkit';
import {setToken} from 'entities/Customer';
import {fetchToken} from 'shared/functions/fetchToken';
import {StateSchema} from 'shared/types/StateSchema';

let isFetchingToken = false;

const tokenMiddleware: Middleware = (storeAPI) => (next) => async (action) => {
  const state = storeAPI.getState() as StateSchema;
  let {token} = state.user;

  if (!token && !isFetchingToken) {
    isFetchingToken = true;
    try {
      const tokenResponse = await fetchToken();
      token = tokenResponse.access_token;
      await storeAPI.dispatch(setToken(token));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching token:', error);
    } finally {
      isFetchingToken = false;
    }
  }

  return next(action);
};

export default tokenMiddleware;

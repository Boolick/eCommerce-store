import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StateSchema} from 'app/providers/StoreProvider';
import {fetchToken} from 'shared/functions/fetchToken';
import {setToken} from 'entities/Customer';

const useGetAnonymousToken = (): string | null => {
  const dispatch = useDispatch();
  const token = useSelector((state: StateSchema) => state.user.token);

  useEffect(() => {
    const getToken = async (): Promise<void> => {
      if (!token) {
        const tokenResponse = await fetchToken();
        dispatch(setToken(tokenResponse.access_token));
      }
    };

    getToken();
  }, [token, dispatch]);

  return token;
};

export default useGetAnonymousToken;

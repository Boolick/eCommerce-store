import {useContext} from 'react';
import {LOCAL_STORAGE_LOGGED_KEY, LoggedContext} from './LoggedContext';

interface UseLoggedResult {
  logged: boolean;
  toggleLogged: () => void;
}

export function useLogged(): UseLoggedResult {
  const {logged = false, setLogged} = useContext(LoggedContext);

  const toggleLogged = (): void => {
    const newLogged = !logged;
    if (setLogged) {
      setLogged(newLogged);
    }
    localStorage.setItem(LOCAL_STORAGE_LOGGED_KEY, String(newLogged));
  };

  return {logged, toggleLogged};
}

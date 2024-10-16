import {createContext} from 'react';

export interface LoggedContextProps {
  logged?: boolean;
  setLogged?: (logged: boolean) => void;
}

export const LoggedContext = createContext<LoggedContextProps>({});
export const LOCAL_STORAGE_LOGGED_KEY = 'logged';

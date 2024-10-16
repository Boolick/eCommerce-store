import {FC, ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_LOGGED_KEY, LoggedContext} from '../lib/LoggedContext';

const defaultValue: boolean = Boolean(localStorage.getItem(LOCAL_STORAGE_LOGGED_KEY)) || false;

interface LoggedProviderProps {
  children?: ReactNode;
}

const LoggedProvider: FC<LoggedProviderProps> = ({children}) => {
  const [logged, setLogged] = useState<boolean>(defaultValue);

  const defaultProps = useMemo(
    () => ({
      logged,
      setLogged,
    }),
    [logged]
  );

  return <LoggedContext.Provider value={defaultProps}>{children}</LoggedContext.Provider>;
};

export default LoggedProvider;

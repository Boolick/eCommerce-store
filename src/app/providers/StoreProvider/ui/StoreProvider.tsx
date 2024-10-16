import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {StateSchema} from 'shared/types/StateSchema';
import {createReduxStore} from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

const StoreProvider = ({children, initialState}: StoreProviderProps): JSX.Element => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

export {StoreProvider};

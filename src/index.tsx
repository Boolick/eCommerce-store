import ReactDOM from 'react-dom/client';
import {App} from 'app/App';
import {BrowserRouter} from 'react-router-dom';
import {StoreProvider} from 'app/providers/StoreProvider';
import 'app/styles/styles.scss';
import {LoggedProvider} from 'app/providers/LoggedProvider';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <LoggedProvider>
      <StoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </LoggedProvider>
  );
}

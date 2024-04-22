import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss"
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './provider/ThemeProvider';
import {store} from './store/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>    
      </BrowserRouter>
  </Provider>

    
);


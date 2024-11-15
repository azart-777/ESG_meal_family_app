import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux-store/store/store';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Suspense fallback="...is loading">
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </Suspense>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

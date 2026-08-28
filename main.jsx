import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import { Analytics } from '@vercel/analytics/react';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
      <Analytics />
    </React.StrictMode>
  );
}

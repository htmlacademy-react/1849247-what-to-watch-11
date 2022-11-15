import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { film, films } from './mocks/films'; // Моки -> будут заменены на fetch

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App promoFilm={film} films={films} />
  </React.StrictMode>
);

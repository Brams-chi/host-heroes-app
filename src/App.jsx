import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'
const HeroesList = lazy(() => import('heroesListMF/HeroesList'));
const HeroesFavorites = lazy(() => import('heroesFavoritesMF/FavoriteHeroes'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1>Marvel Microfrontends</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroesFavorites />
        <HeroesList />
      </Suspense>
    </div>
  </React.StrictMode>,
)

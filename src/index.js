import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import App from './App';
import Movie from './component/Movie/Movie';
import NotFound from './component/NotFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<App />} />
        <Route path=':id' element={<Movie />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './component/NotFound/NotFound';
import SeeDetails from './component/SeeDetails/SeeDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<App />} />
        <Route path='/:movie/:id' element={<SeeDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import APropos from './APropos';
import LogementPage from './LogementPage';
import Error404 from './Error404';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="APropos" element={<APropos />} />
      <Route path="/logement/:id" element={<LogementPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRouter;

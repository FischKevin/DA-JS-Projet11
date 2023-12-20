import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import APropos from './APropos';
import LogementDetails from './LogementDetails';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="APropos" element={<APropos />} />
      <Route path="/logement/:id" element={<LogementDetails />} />
    </Routes>
  );
}

export default AppRouter;

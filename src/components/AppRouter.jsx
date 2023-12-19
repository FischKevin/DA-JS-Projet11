import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import APropos from './APropos';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="APropos" element={<APropos />} />
    </Routes>
  );
}

export default AppRouter;

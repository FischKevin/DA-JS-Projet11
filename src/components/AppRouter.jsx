import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import APropos from './APropos';
import LogementPage from './LogementPage';
import Error404 from './Error404';

function AppRouter() {
  return (
    <Routes>
      {/* Route for the homepage. */}
      <Route path="/" element={<HomePage />} />
      {/* Route for the "APropos" page. */}
      <Route path="/APropos" element={<APropos />} />
      {/* Dynamic route for individual lodging pages. ":id" is a URL parameter. */}
      <Route path="/logement/:id" element={<LogementPage />} />
      {/* Catch-all route for handling 404 Not Found errors. */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRouter;

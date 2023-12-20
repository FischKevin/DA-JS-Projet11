import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div>
      <h1>404 - Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez n existe pas.</p>
      <Link to="/">Retourner à l accueil</Link>
    </div>
  );
}

export default Error404;

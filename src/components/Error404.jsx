import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Error404() {
  return (
    <>
      <Header />
      <div className="error-content">
        <h1 className='title404'>404</h1>
        <p className='text404'>Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link to="/" className='link404'>Retourner sur la page d&apos;accueil</Link>
      </div>
      <Footer />
    </>
  );
}

export default Error404;

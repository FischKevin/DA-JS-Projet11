import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Slideshow from './Slideshow';
import LogementInfo from './LogementInfo';

function LogementPage() {
  const [logement, setLogement] = useState(null);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        const foundLogement = data.find(item => item.id === id);
        if (!foundLogement) {
          navigate('/Error404', { replace: true });
        } else {
          setLogement(foundLogement);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        navigate('/Error404', { replace: true });
      });
  }, [id, navigate]);

  if (!logement) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <Header />
        <Slideshow logement={logement} />
        <LogementInfo logement={logement} />
      <Footer />
    </>
  );
}

export default LogementPage;

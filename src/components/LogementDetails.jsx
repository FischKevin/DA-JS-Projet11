import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function LogementDetails() {
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
    <div>
      <h2>{logement.title}</h2>
      <img src={logement.cover} alt={logement.title} />
    </div>
  );
}

export default LogementDetails;

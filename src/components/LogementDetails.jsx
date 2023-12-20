import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function LogementDetails() {
  const [logement, setLogement] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        const foundLogement = data.find(item => item.id === id);
        setLogement(foundLogement);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, [id]);

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

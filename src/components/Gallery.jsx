import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../sass/components/_gallery.scss';

function Gallery() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  // Add empty slots to have a multiple of 3 cards
  const emptySlots = 3 - (logements.length % 3);
  const emptyElements = emptySlots === 3 ? 0 : emptySlots; // To prevent adding 3 empty slots when there are already 3 cards

  return (
    <div className="gallerySection">
      {logements.map(logement => (
        <Link
          to={`/logement/${logement.id}`}
          key={logement.id}
          className="logementCard"
        >
          <img src={logement.cover} alt={logement.title} />
          <h3>{logement.title}</h3>
        </Link>
      ))}
      {/* Add empty slots */}
      {[...Array(emptyElements)].map((_, i) => (
        <div key={`empty-${i}`} className="logementCard empty"></div>
      ))}
    </div>
  );
}

export default Gallery;

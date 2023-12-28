import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../sass/components/_gallery.scss';

function Gallery() {
  // State to store the list of accommodations
  const [logements, setLogements] = useState([]);

  // useEffect to fetch accommodation data on component mount.
  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  // Calculate the number of empty slots needed to fill the last row.
  // Ensures that each row has a multiple of 3 cards for layout consistency.
  const emptySlots = 3 - (logements.length % 3);
  const emptyElements = emptySlots === 3 ? 0 : emptySlots;

  return (
    <div className="gallerySection">
      {/* Map through logements to create accommodation cards */}
      {logements.map(logement => (
        <Link
          to={`/logement/${logement.id}`}
          key={logement.id}
          className="logementCard"
        >
          {/* Accommodation image and title */}
          <img src={logement.cover} alt={logement.title} />
          <h3>{logement.title}</h3>
        </Link>
      ))}
      {/* Render empty slots to complete the row if necessary */}
      {[...Array(emptyElements)].map((_, i) => (
        <div key={`empty-${i}`} className="logementCard empty"></div>
      ))}
    </div>
  );
}

export default Gallery;

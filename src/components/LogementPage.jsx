import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Slideshow from './Slideshow';
import LogementInfo from './LogementInfo';

function LogementPage() {
  // State for storing the specific logement (accommodation) details
  const [logement, setLogement] = useState(null);
  // Extracting the 'id' parameter from the URL
  let { id } = useParams();
  // Hook for navigating between pages
  let navigate = useNavigate();

  // useEffect to fetch logement data based on the 'id' parameter
  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        // Find the logement with the matching 'id'
        const foundLogement = data.find(item => item.id === id);
        // Navigate to 404 page if no logement is found
        if (!foundLogement) {
          navigate('/Error404', { replace: true });
        } else {
          // Update the state with the found logement details
          setLogement(foundLogement);
        }
      })
      .catch(error => {
        // Handle any errors during fetching and navigate to 404 page.
        console.error('Error fetching data: ', error);
        navigate('/Error404', { replace: true });
      });
  }, [id, navigate]);

  // Display a loading message until the logement data is fetched.
  if (!logement) {
    return <div>Chargement...</div>;
  }

  // Render the logement page
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

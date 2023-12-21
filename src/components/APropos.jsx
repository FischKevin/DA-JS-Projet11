import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import Collapse from './Collapse';

function APropos() {
  const collapseData = [
    {
      title: 'Fiabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Sécurité',
      content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.',
    },
  ];


  return (
    <>
      <Header />
      <Banner image="src/assets/about_img.png" text=""/>
      <div className="collapse-section">
        {collapseData.map((data, index) => (
          <Collapse key={index} title={data.title} content={data.content} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default APropos;

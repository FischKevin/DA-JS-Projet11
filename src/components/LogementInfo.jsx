import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import Collapse from './Collapse';
import '../sass/components/_logementInfo.scss';

function LogementInfo({ logement }) {

  const collapseData = [
    {
      title: 'Description',
      content: logement.description,
    },
    {
      title: 'Équipements',
      content: (
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <>
      <div className='topContainer'>
        <div className='logementInfo'>
          <h2 className='logementTitle'>{logement.title}</h2>
          <h3 className='logementLocation'>{logement.location}</h3>
          <div className='logementTags'>
            {logement.tags.map((tag, index) => (
              <span key={index} className="logementTag">{tag}</span>
            ))}
          </div>
        </div>
        <div className='hostContainer'>
          <div className='hostInfoContainer'>
            <h2 className='hostName'>{logement.host.name}</h2>
            <img src={logement.host.picture} alt={logement.host.name} className='hostPicture'/>
          </div>
          <div className='logementRating'>
            <StarRating rating={parseInt(logement.rating, 10)} />
          </div>
        </div>
      </div>
      <div className='logementInfo-collapseSection collapse-section'>
        {collapseData.map((data, index) => (
            <Collapse key={index} title={data.title} content={data.content} />
          ))}
      </div>
    </>
  );
}

LogementInfo.propTypes = {
  logement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.array.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired
};

export default LogementInfo;

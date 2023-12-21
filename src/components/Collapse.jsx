import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '../assets/chevron-down-solid.svg';
import ChevronUpIcon from '../assets/chevron-up-solid.svg';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  const toggleOpen = () => {
    setIsOpen(prevIsOpen => {
      const newState = !prevIsOpen;
      setMaxHeight(newState ? contentRef.current.scrollHeight : 0);
      return newState;
    });
  };

  const containerStyle = {
    maxHeight: isOpen ? `${maxHeight}px` : '0px',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out'
  };

  const contentStyle = {
    transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div className="collapse-container">
      <div className="collapse-title" onClick={toggleOpen}>
        {title}
        {isOpen ? <img src={ChevronUpIcon} alt="Close" /> : <img src={ChevronDownIcon} alt="Open" />}
      </div>
      <div style={containerStyle} ref={contentRef}>
        <div className="collapse-content" style={contentStyle}>
          {content}
        </div>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse;

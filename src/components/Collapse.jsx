import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '../assets/chevron-down-solid.svg';
import ChevronUpIcon from '../assets/chevron-up-solid.svg';

function Collapse({ title, content }) {
  // State to manage whether the collapse is open or not.
  const [isOpen, setIsOpen] = useState(false);
  // Reference to the content div for measuring its scroll height.
  const contentRef = useRef(null);
  // State to manage the maximum height of the content container.
  const [maxHeight, setMaxHeight] = useState(0);

  // Function to toggle the collapse open and closed.
  const toggleOpen = () => {
    setIsOpen(prevIsOpen => {
      const newState = !prevIsOpen;
      // Set the max height of the content container when opening.
      setMaxHeight(newState ? contentRef.current.scrollHeight : 0);
      return newState;
    });
  };

  // Styles for animating the opening and closing of the collapse.
  const containerStyle = {
    maxHeight: isOpen ? `${maxHeight}px` : '0px',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out',
  };

  const contentStyle = {
    transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div className="collapse-container">
      {/* Collapse title that can be clicked to open/close the content */}
      <div className="collapse-title" onClick={toggleOpen}>
        {title}
        {/* Toggles the icon based on the collapse state */}
        {isOpen ? (
          <img src={ChevronUpIcon} alt="Close" />
        ) : (
          <img src={ChevronDownIcon} alt="Open" />
        )}
      </div>
      {/* Content container with dynamic style for animation */}
      <div style={containerStyle} ref={contentRef}>
        {/* Actual content of the collapse */}
        <div className="collapse-content" style={contentStyle}>
          {content}
        </div>
      </div>
    </div>
  );
}

// PropTypes for type checking the props passed to the component
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;

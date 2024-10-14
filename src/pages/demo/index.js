import React, { useState } from 'react';
import './style.css'; // Ensure to import the CSS file for styling

const NoteComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  

  const toggleNote = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className="note">
      <h3>Important Note</h3>
      <div className={`note-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
      Note: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <button onClick={toggleNote}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default NoteComponent;

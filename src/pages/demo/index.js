import React, { useState } from 'react';
import './style.css'; // Ensure to import the CSS file for styling

const NoteComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // The note content
  const noteContent = `Note: Lorem  jdbfoj jndoah 9ueg0efa djiehfo ncjo oqq onq oiq ipoee`;

  // Split the note content into words
  const words = noteContent.split(' ');
  const wordCount = words.length;

  // Toggle the state for expanding or collapsing the note
  const toggleNote = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className="note">
      <h3>Important Note</h3>
      <div className={`note-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {isExpanded || wordCount <= 10 ? noteContent : `${words.slice(0, 10).join(' ')}...`}
      </div>
      {wordCount > 10 && (
        <button onClick={toggleNote}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default NoteComponent;

// src/components/Toolbar.jsx
import React from 'react';

const Toolbar = ({ editor }) => {
  const toggleHighlight = () => {
    editor.commands.toggleHighlight();
  };

  // Check if highlight is active
  const isActive = editor.isActive('highlight');
  const buttonClass = isActive ? 'active' : 'inactive';

  return (
    <div className="toolbar">
      <button
        onClick={toggleHighlight}
        className={buttonClass}
      >
        Highlight
      </button>
    </div>
  );
};

export default Toolbar;

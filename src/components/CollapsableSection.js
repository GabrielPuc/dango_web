import React, { useState } from 'react';
import "./CollapsableSection.css"

export const CollapsableSection = ({ title, content }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="section">
      <div className="section-title" onClick={() => setExpanded(!isExpanded)}>
        <div>{title}</div>
        <div>{isExpanded ? '⭕' : '❌'}</div>
      </div>
      {isExpanded && <div className="section-content">{content}</div>}
    </div>
  );
};
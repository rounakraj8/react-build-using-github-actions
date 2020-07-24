import React from 'react';
import './App.css';

function LastUpdated() {
  return (
    <span className="LastUpdated">
      Last Updated - {process.env.REACT_APP_BUILD_TIME}
    </span>
  );
}

export default LastUpdated;

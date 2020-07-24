import React from 'react';
import './App.css';

function LastUpdated() {
  return (
    <div className="LastUpdated">
      Last Updated - {process.env.REACT_APP_BUILD_TIME}
    </div>
  );
}

export default LastUpdated;

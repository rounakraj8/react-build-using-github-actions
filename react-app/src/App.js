import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This page is build in React.js using GitHub Actions, so as soon as src code is commited to
          the master branch, GitHub Actions comes into action and build the React artifact(index.html). 
        </p>
      </header>
      <body>
        Build Time - {process.env.REACT_BUILD_TIME}
      </body>
    </div>
  );
}

export default App;

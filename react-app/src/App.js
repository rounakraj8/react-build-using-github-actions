import React from 'react';
import './App.css';
import LastUpdated from './LastUpdated';
import ViewOnGitHub from './ViewOnGitHub';
import ProjectTitle from './ProjectTitle';
import MainContainer from './MainContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectTitle />
        <ViewOnGitHub />
      </header>
      <MainContainer />
      <footer className="App-footer">
        <span><LastUpdated /></span>
        <span>
        &copy;Copyright 2020
        </span>
      </footer>
    </div>
  );
}

export default App;

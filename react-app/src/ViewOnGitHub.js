import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './ViewOnGitHub.css';

function ViewOnGitHub() {
  return (
    <a className="ViewOnGitHub-anchor" rel="noopener noreferrer" href="https://github.com/rounakraj8/react-build-using-github-actions" target="_blank">
      <div className="ViewOnGitHub-container">
        <GitHubIcon style={{ color: 'black' }} fontSize="large" />
        <div>View On GitHub</div>
      </div>
    </a>
  );
}

export default ViewOnGitHub;

import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import Imagen from '../assets/images/Imagen-modified.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Imagen} alt="Foto de Daniel Alvarez" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/DuneV" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/daniel-alejandro-alvarez-vanegas/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Daniel Alvarez</h1>
          <p>Electronic & Mechanical Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/DuneV" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/daniel-alejandro-alvarez-vanegas/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
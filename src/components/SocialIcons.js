// src/components/SocialIcons.js
import React from "react";
import { LiaGithub, LiaFacebook, LiaInstagram } from "react-icons/lia";

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <LiaFacebook size={40} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <LiaInstagram size={40} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <LiaGithub size={40} />
      </a>
    </div>
  );
}

export default SocialIcons;

import React from "react";
// import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Importing email and phone icons
import homeBackground from "../assets/HomeBackUpdated.mp4";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../index.css";

function Home() {
  const [typewriter] = useTypewriter({
    words: ["code cool websites", "develop mobile apps", "love my passion"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="home-container">
      <video
        src={homeBackground}
        autoPlay
        loop
        muted
        className="background-video"
      />
      <div className="bottom-center-text">
        <h3>
          Hello. I'm <span class="name-green">Asif Habeeb</span>, Magician and
          Front-end developer based in Kochi, Kerala.
        </h3>
      </div>
      <div className="typewriter-text">
        <h1 style={{ color: "white" }}>
          I{" "}
          <span style={{ fontWeight: "bold", color: "#4bffa5" }}>
            {typewriter}
          </span>
          <Cursor cursorStyle="" cursorColor="#4bffa5" />
        </h1>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import "./Hero.css";
import profile from "../../assets/Gb_pic.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const handleResumeDownload = () => {
    const resumeUrl = "/Gautam_Bhawsar.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Gautam_Bhawsar_23.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='hero' className='hero'>
      <img src={profile} alt="" />
      <h1><span>I'm Gautam Bhawsar,</span> a passionate frontend developer, crafting seamless and engaging web experiences.🚀</h1>
      <p>I am a frontend developer from Pune</p>
      <div className="hero-action">
        <div className="hero-connect"> 
          <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink> 
        </div>
        <div className="hero-resume" onClick={handleResumeDownload}>My Resume</div>
      </div>
    </div>
  );
}

export default Hero;

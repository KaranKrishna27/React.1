import React from 'react';
import './landingPage.css';

const LandingPage = () => {

  const handleClick = () => {
    window.open('https://store.epicgames.com/en-US/p/fortnite', '_blank');
  };

  return (
    <div className="landing-page-container">
      <div className="landing-page-content">
        <p className="title">Epic Games : An American Video Game And Software Developer</p> 
        <p className="title2">And Publisher Based In Cary, North Carolina</p>
        <div className="image-container">
          <img src="/assets/Fortnite_Hero_Asset.jpg" alt="Fortnite Hero Asset" className="image" />
        </div>
      </div>
      <div className="landing-page-content">
        <p className='para1'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or</p>
        <p className='para2'>live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an</p>
        <p className='para3'>individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In</p>
      </div>
      <button className="visit-website-button" onClick={handleClick}>Visit Website</button>
      <div className="landing-page-content-2">
        <div className="image-container">
          <img src="/assets/Screenshot 2024-04-04 113339.png" alt="Image 1" className="image" />
          <p className="image-paragraph">Explore Large, Destructible Enviroments Where No Two Games Are Ever The Same.</p>
        </div>
        <div className="image-container">
          <img src="/assets/Screenshot 2024-04-04 113403.png" alt="Image 2" className="image" />
          <p className="image-paragraph">Team Up WIth Friends By Spritning, Climbing And Smashing Your Way To Earn Your Victory Royale.</p>
        </div>
        <div className="image-container">
          <img src="/assets/Screenshot 2024-04-04 113415.png" alt="Image 3" className="image" />
          <p className="image-paragraph">Discover Even More Ways To Play Across Thousands Of Creator-Made Game Genres.</p>
        </div>
      </div>
      <div className="landing-page-content-3">
        <h2 className="contribution-heading">Our Contribution</h2>
        <p className="contribution-paragraph">Our core offering extends beyond mere profile generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
      </div>
      <div className="horizontal-content-container">
        <div className="horizontal-content">
          <p className="large-text">5M</p>
          <p className="small-text">Daily user engagements</p>
        </div>
        <div className="horizontal-content">
          <p className="large-text">$500K</p>
          <p className="small-text">Revenue surge for the platform</p>
        </div>
        <div className="horizontal-content">
          <p className="large-text">10X</p>
          <p className="small-text">ROAS on all our marketing campaigns</p>
        </div>
      </div>
      <div className="interested-content">
        <h2 className="interested-heading">Interested In Delving Deeper Into The Project?</h2>
        <p className="interested-paragraph">If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</p>
      </div>
      <div className="buttons-container">
          <button className="skype-button">Ring Us on Skype</button>
          <button className="contact-us-button">Contact Us</button>
          <button className="hover-rotate-button">X</button>
        </div>
    </div>
  );
};

export default LandingPage;

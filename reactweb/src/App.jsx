import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="menu">
          <a href="#">Sell Houses</a>
          <a href="#">More Info</a>
          <a href="#">Home Page</a>
          <a href="#">Explore Listings</a>
          <a href="#">Buy Houses</a>
          <a href="#">Latest Articles</a>
        </div>
        <div className="buttons">
          <button className="join-button">
            <a href="/signup">Join</a>
          </button>
          <button className="login-button">
            <a href="/login">Login</a>
          </button>
        </div>
      </nav>

      <section className="container1">
        <div className="content">
          <h1>Discover Your Perfect Home Today</h1>
          <p>
            We connect you with experienced agents who understand your needs.
            Start your journey to homeownership with confidence and ease.
          </p>
          <div className="buttons">
            <button className="search-button">
              <a href="/search">Search</a>
            </button>
            <button className="learn-more-button">
              <a href="/blog">Learn More</a>
            </button>
          </div>
        </div>
        <div className="image-grid">
          <img src="./img/OIP1.jpg" alt="House 1" />
          <img src="./img/OIP2.jpg" alt="House 2" />
          <img src="./img/OIP3.jpg" alt="House 3" />
          <img src="./img/OIP4.jpg" alt="House 4" />
        </div>
      </section>

      <section className="container2">
        <header>
          <h1>Simple</h1>
          <h2>Your Guide to Buying a Home</h2>
          <p>
            Navigating the home buying process has never been easier. Our
            platform connects you directly with agents who can assist you every
            step of the way. Follow our simple guide to find your dream home.
          </p>
        </header>
        <div className="steps">
          <div className="step">
            <img src="./img/step1.jpg" alt="Modern house" />
            <h3>Step 1: Browse Listings</h3>
            <p>Explore a wide range of available properties.</p>
          </div>
          <div className="step">
            <img src="./img/step2.jpg" alt="Traditional house" />
            <h3>Step 2: Connect with Agents</h3>
            <p>Get in touch with knowledgeable agents for help.</p>
          </div>
          <div className="step">
            <img src="./img/step3.jpg" alt="Luxury house" />
            <h3>Step 3: Inquire About Properties</h3>
            <p>Ask questions and gather details about homes.</p>
          </div>
        </div>
        <div className="actions">
          <button className="learn-more">
            <a href="/blog">Learn More</a>
          </button>
          <button className="sign-up">
            <a href="/signup">Sign Up</a>
          </button>
        </div>
      </section>

      <section className="container3">
        <div className="content">
          <div className="image-section">
            <img src="./img/house.jpg" alt="House" />
          </div>
          <div className="text-section">
            <h4>Trusted</h4>
            <h1>Experience Peace of Mind with Verified Listings</h1>
            <p>
              Every listing on our platform is verified by licensed agents. This
              ensures that you can trust the quality and authenticity of each
              property.
            </p>
            <div className="features">
              <div className="feature">
                <h3>Quality Assurance</h3>
                <p>Only licensed agents verify listings for your peace of mind.</p>
              </div>
              <div className="feature">
                <h3>Trustworthy Choices</h3>
                <p>Find your dream home with confidence and security.</p>
              </div>
            </div>
            <div className="actions">
              <button className="learn-more">
                <a href="/blog">Learn More</a>
              </button>
              <button className="sign-up">
                <a href="/signup">Sign Up</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h3>Helpful Resources</h3>
            <ul>
              <li>
                <a href="#">Blog Posts</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Connect With Us</h3>
            <ul>
              <li>
                <a href="#">Facebook Page</a>
              </li>
              <li>
                <a href="#">Twitter Feed</a>
              </li>
              <li>
                <a href="#">LinkedIn Profile</a>
              </li>
              <li>
                <a href="#">Instagram Gallery</a>
              </li>
              <li>
                <a href="#">YouTube Channel</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2024 jjaola. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default App;

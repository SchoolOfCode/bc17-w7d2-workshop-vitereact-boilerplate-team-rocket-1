import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { HeroSection } from "./components/HeroSection/HeroSection.jsx";
import { HowItWorksTitle } from "./components/HowItWorks/HowItWorksTitle/HowItWorksTitle.jsx";
import {CardOne} from "./components/HowItWorks/CardOne/CardOne.jsx"
import { CardTwo } from "./components/HowItWorks/CardTwo/CardTwo.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <section className="how-it-works">
          <HowItWorksTitle />
          <CardOne/>
          <CardTwo/>
          <article className="we-recommend card">
            <img src="images/how-it-works-3.png" />
            <h4>We recommend...</h4>
            <p>We send you a bespoke set of fireplace recommendations</p>
          </article>
        </section>
      </main>
      <footer className="footer">
        <div className="colunms-container">
          <div className="footer-column">
            <p>Find us on:</p>
            <ul className="footer-nav">
              <li>
                <a href="https://www.facebook.com" className="socials-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="socials-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com" className="socials-link">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <p>Contact us:</p>
            <address>
              <a href="mailto:info@firepalace.co.uk" className="email-link">
                info@firepalace.co.uk
              </a>
            </address>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

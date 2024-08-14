import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./react-component/header/header.jsx";
import { HeroSection } from "./react-component/hero-section/hero-section.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksTitle>
          <CardOne></CardOne>
        </HowItWorksTitle>
        <section className="how-it-works">
          <h3>How it works.</h3>
          <article className="give-us-a-call card">
            <img src="images\how-it-works-1.png" alt="bla bla vla" />
            <h4>Give us a call...</h4>
            <p>
              Call us and book in a "Design Consultation" on a date and time
              that suits you.
            </p>
          </article>
          <article className="we-come-to-you card">
            <img src="images\how-it-works-2.png" />
            <h4>We come to you...</h4>
            <p>
              {" "}
              We come to your home to do an assessment of the space and to your
              style preference.
            </p>
          </article>
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

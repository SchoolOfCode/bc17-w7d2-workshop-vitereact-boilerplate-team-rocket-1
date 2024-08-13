import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
      <h1>🔥 Fireplace Palace</h1>
    </header>
    <main>
      <section classNameName="hero-section">
        <img
          src="./images/hero-mobile.png"
          alt="Discover the Fireplace Palace"
          classNameName="hero-image"
        />
        <article classNameName="orange-box">
          <h2>Discover the Perfect Fireplace</h2>
          <p>
            Book consultation:
            <span classNameName="telephone-highlight">0121 345 6789</span>
          </p>
        </article>
      </section>
      <section classNameName="how-it-works">
        <h3>How it works.</h3>
        <article classNameName="give-us-a-call card">
          <img src="images\how-it-works-1.png" alt="bla bla vla" />
          <h4>Give us a call...</h4>
          <p>
            Call us and book in a "Design Consultation" on a date and time
            that suits you.
          </p>
        </article>
        <article classNameName="we-come-to-you card">
          <img src="images\how-it-works-2.png" />
          <h4>We come to you...</h4>
          <p> We come to your home to do an assessment of the space and to
            your style preference.</p>
        </article>
        <article classNameName="we-recommend card">
          <img src="images/how-it-works-3.png" />
          <h4>We recommend...</h4>
          <p>
            We send you a bespoke set of fireplace recommendations
          </p>
        </article>
      </section>
    </main>
    <footer className="footer">
        <div className="colunms-container">
          <div className="footer-column">
            <p>Find us on:</p>
            <ul className="footer-nav">
              <li>
                <a href="https://www.facebook.com" className="socials-link"
                  >Facebook</a
                >
              </li>
              <li>
                <a href="https://www.instagram.com" className="socials-link"
                  >Instagram</a
                >
              </li>
              <li>
                <a href="https://www.tiktok.com" className="socials-link">TikTok</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <p>Contact us:</p>
            <address>
              <a href="mailto:info@firepalace.co.uk" className="email-link"
                >info@firepalace.co.uk</a
              >
            </address>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

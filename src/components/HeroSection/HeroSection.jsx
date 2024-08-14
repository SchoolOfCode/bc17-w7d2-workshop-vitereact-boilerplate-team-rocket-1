import "./hero-section.css";

export function HeroSection() {
  return (
    <section className="hero-section">
      <img
        src="./images/hero-mobile.png"
        alt="Discover the Fireplace Palace"
        className="hero-image"
      />
      <article className="orange-box">
        <h2>Discover the Perfect Fireplace</h2>
        <p>
          Book consultation:
          <span className="telephone-highlight">0121 345 6789</span>
        </p>
      </article>
    </section>
  );
}

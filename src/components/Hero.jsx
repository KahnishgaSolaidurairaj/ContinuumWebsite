/**
 * Hero section with headline, value proposition, and Broca companion.
 *
 * Returns: The landing hero section.
 */
function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Launching soon</p>
          <h1>Continuum</h1>
          <p className="hero__tagline">Continue speech therapy beyond the clinic!</p>
          <p className="hero__description">
            Continuum relieves stressed parents with accesible and easy
            speech therapy at home with fun, organized, trackable practice
            built for caretakers supporting children with dysarthria.
          </p>

          <ul className="hero__highlights">
            <li>Gamified speech practice</li>
            <li>Daily motivation</li>
            <li>Progress tracking</li>
            <li>Caretaker insights</li>
          </ul>

          <div className="hero__actions">
            <a href="#" className="btn btn--primary">
              Download App
            </a>
            <a href="#features" className="btn btn--secondary">
              Explore Features
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__companion">
            <img
              src="/images/broca.png"
              alt="Broca, your practice companion"
              className="hero__broca"
            />
            <p>Meet Broca! your practice companion</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import IpadPlaceholder from './IpadPlaceholder'

/**
 * Hero section with headline, value proposition, and iPad preview placeholder.
 *
 * Returns: The landing hero section.
 */
function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="hero__content">
        <p className="eyebrow">Launching July 19, 2026</p>
        <h1>Continuum</h1>
        <p className="hero__tagline">Find your voice through fun!</p>
        <p className="hero__description">
          A motivating, playful, visual app that supports speech therapy
          practice — built for caretakers and parents supporting children with
          dysarthria on their journey to clearer speech.
        </p>

        <ul className="hero__highlights">
          <li>Gamified speech practice</li>
          <li>Daily motivation</li>
          <li>Progress tracking</li>
          <li>Parent insights</li>
        </ul>

        <div className="hero__actions">
          <a href="#app-preview" className="btn btn--primary">
            See the App
          </a>
          <a href="#features" className="btn btn--secondary">
            Explore Features
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <IpadPlaceholder
          label="Home Screen"
          description="Daily motivation & practice goals"
          variant="lavender"
        />
      </div>
    </section>
  )
}

export default Hero

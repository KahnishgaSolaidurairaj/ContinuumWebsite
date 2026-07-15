import AppIcon from './AppIcon'
import IpadPlaceholder from './IpadPlaceholder'

/**
 * Hero section with headline, value proposition, and iPad preview placeholder.
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
        <p className="hero__tagline">Find your voice through fun!</p>
        <p className="hero__description">
          Continuum relieves stressed parents by continuing your child&apos;s
          speech therapy at home — with fun, organized, trackable practice
          built for caretakers supporting children with dysarthria.
        </p>

        <ul className="hero__highlights">
          <li>Gamified speech practice</li>
          <li>Daily motivation</li>
          <li>Progress tracking</li>
          <li>Caretaker insights</li>
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
        <div className="hero__icon-badge">
          <AppIcon size={96} />
          <p>Meet Broca! your practice companion</p>
        </div>
        <IpadPlaceholder
          label="Home Screen"
          description="Daily motivation & practice goals"
          variant="lavender"
        />
      </div>
      </div>
    </section>
  )
}

export default Hero

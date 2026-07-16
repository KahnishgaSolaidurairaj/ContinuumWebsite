import AppScreenshot from './AppScreenshot'

/**
 * Hero section with headline, value proposition, and app preview.
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
            <a href="#app-preview" className="btn btn--primary">
              See the App
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
          <AppScreenshot
            src="/screenshots/home-and-dashboard.png"
            alt="Continuum home screen with practice suggestions and progress dashboard"
            label="Home & Dashboard"
            description="Daily goals, streaks, and parent insights in one place"
            variant="showcase"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

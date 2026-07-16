/**
 * Launch call-to-action section with release announcement.
 *
 * Returns: The launch CTA section element.
 */
function LaunchCTA() {
  return (
    <section id="launch" className="launch section section--gradient">
      <div className="section__inner launch__inner">
        <p className="eyebrow eyebrow--light">Press Release</p>
        <h2>Launching soon</h2>
        <p className="launch__text">
          Continuum relieves stressed parents by continuing speech therapy at
          home with fun, organized, trackable practice that helps children
          find their voice and gives caretakers data to share with clinicians.
        </p>

        <div className="launch__stats">
          <div className="launch__stat">
            <span className="launch__stat-value">4</span>
            <span className="launch__stat-label">Practice modes</span>
          </div>
          <div className="launch__stat">
            <span className="launch__stat-value">Daily</span>
            <span className="launch__stat-label">Progress tracking</span>
          </div>
          <div className="launch__stat">
            <span className="launch__stat-value">6–10</span>
            <span className="launch__stat-label">Ages supported</span>
          </div>
        </div>

        <a href="#hero" className="btn btn--light">
          Back to Top
        </a>
      </div>
    </section>
  )
}

export default LaunchCTA

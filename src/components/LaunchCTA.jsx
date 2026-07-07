/**
 * Launch call-to-action section with July 19 release date.
 *
 * Returns: The launch CTA section element.
 */
function LaunchCTA() {
  return (
    <section id="launch" className="launch section section--gradient">
      <div className="section__inner launch__inner">
        <p className="eyebrow eyebrow--light">Press Release</p>
        <h2>Launching July 19, 2026</h2>
        <p className="launch__text">
          A motivating, playful, visual app that supports speech therapy
          practice — helping children find their voice and giving caretakers the
          data to share with clinicians.
        </p>

        <div className="launch__stats">
          <div className="launch__stat">
            <span className="launch__stat-value">4</span>
            <span className="launch__stat-label">Practice modes</span>
          </div>
          <div className="launch__stat">
            <span className="launch__stat-value">ML</span>
            <span className="launch__stat-label">Powered feedback</span>
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

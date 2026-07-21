import AppIcon from './AppIcon'

/**
 * Problem statement section explaining the gap in speech therapy access.
 *
 * Returns: The problem section element.
 */
function Problem() {
  return (
    <section id="problem" className="problem section section--blue">
      <div className="section__inner problem__grid">
        <div className="problem__text">
          <p className="eyebrow">The Problem</p>
          <h2>Speech therapy often happens only every few weeks.</h2>
          <p>
            Children with dysarthria need consistent, daily practice between
            clinical sessions yet most families lack the tools, feedback, and
            motivation to keep going at home.
          </p>
          <p>
            Without structured practice and progress data, caretakers struggle
            to track improvement and clinicians miss the full picture of a
            child&apos;s journey.
          </p>
        </div>

        <div className="problem__visual">
          <AppIcon
            className="problem__app-icon"
            size={320}
            alt="Continuum app icon featuring Broca the bear"
          />
        </div>
      </div>
    </section>
  )
}

export default Problem

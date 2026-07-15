/**
 * Problem statement section explaining the gap in speech therapy access.
 *
 * Returns: The problem section element.
 */
function Problem() {
  return (
    <section id="problem" className="problem section section--sky">
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

        <div className="problem__illustration" aria-hidden="true">
          <div className="problem__scene">
            <div className="problem__bubble problem__bubble--messy" />
            <div className="problem__person problem__person--therapist">
              <div className="problem__head" />
              <div className="problem__body" />
              <div className="problem__card">E</div>
            </div>
            <div className="problem__person problem__person--child">
              <div className="problem__head" />
              <div className="problem__body" />
            </div>
            <div className="problem__table" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem

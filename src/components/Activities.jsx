const ACTIVITIES = [
  {
    name: 'Sandbox',
    tagline: 'Trace over sounds',
    description:
      'Follow a glowing light along letter shapes to build motor memory for phoneme formation.',
    icon: '✍️',
    color: 'lavender',
  },
  {
    name: 'Flash',
    tagline: 'Hear how phonemes sound',
    description:
      'Listen to clear audio models of each sound before practicing pronunciation.',
    icon: '🔊',
    color: 'sky',
  },
  {
    name: 'Watch',
    tagline: 'See how someone pronounces it',
    description:
      'Watch short videos demonstrating the facial movements needed for each phoneme.',
    icon: '▶️',
    color: 'lime',
  },
  {
    name: 'Test',
    tagline: 'Try it yourself',
    description:
      'Practice pronunciation and receive ML-powered scoring with physical feedback via ARKit face tracking.',
    icon: '🎤',
    color: 'navy',
  },
]

/**
 * Practice activities section describing the four training game modes.
 *
 * Returns: The activities section element.
 */
function Activities() {
  return (
    <section id="activities" className="activities section">
      <div className="section__inner">
        <div className="section__header">
          <p className="eyebrow">Practice Activities</p>
          <h2>Training games that do the job</h2>
          <p className="section__subtitle">
            Kids first see and hear phonemes, watch facial movement videos, then
            practice themselves. Feedback combines ARKit Face Tracking and CoreML
            audio modeling — scoring pronunciation and advising on physical
            adjustments like &ldquo;raise your tongue higher.&rdquo;
          </p>
        </div>

        <div className="activities__grid">
          {ACTIVITIES.map((activity) => (
            <article
              key={activity.name}
              className={`activity-card activity-card--${activity.color}`}
            >
              <span className="activity-card__icon" aria-hidden="true">
                {activity.icon}
              </span>
              <div className="activity-card__header">
                <h3>{activity.name}</h3>
                <p className="activity-card__tagline">{activity.tagline}</p>
              </div>
              <p className="activity-card__desc">{activity.description}</p>
            </article>
          ))}
        </div>

        <div className="activities__tech">
          <div className="tech-badge">
            <span>ARKit Face Tracking</span>
          </div>
          <div className="tech-badge">
            <span>CoreML Audio Modeling</span>
          </div>
          <div className="tech-badge">
            <span>Real-time Feedback</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities

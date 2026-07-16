import AppScreenshot from './AppScreenshot'

const APP_FEATURES = [
  {
    title: 'Weekly Streak',
    description: 'Encourage consistent daily practice with streak tracking.',
    icon: '🔥',
  },
  {
    title: 'Mood Logging',
    description: 'Track emotional state alongside speech progress.',
    icon: '💛',
  },
  {
    title: 'Practice Summaries',
    description: 'Recaps of each therapy session for quick review.',
    icon: '📝',
  },
  {
    title: 'Dashboard',
    description: 'A central hub for progress tracking and insights.',
    icon: '📊',
  },
  {
    title: 'PDF / Data Sharing',
    description: 'Share progress reports with clinicians and caretakers.',
    icon: '📤',
  },
]

/**
 * Core app features section highlighting platform capabilities.
 *
 * Returns: The features section element.
 */
function Features() {
  return (
    <section id="features" className="features section section--cream">
      <div className="section__inner">
        <div className="section__header">
          <p className="eyebrow">Key Features</p>
          <h2>Everything families need between therapy sessions</h2>
          <p className="section__subtitle">
            From daily motivation to clinician-ready reports, Continuum keeps
            practice engaging and progress visible.
          </p>
        </div>

        <div className="features__grid">
          {APP_FEATURES.map((feature) => (
            <article key={feature.title} className="feature-card">
              <span className="feature-card__icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="features__showcase">
          <AppScreenshot
            src="/screenshots/warm-up.png"
            alt="Warm up modal with breathing exercise before practice"
            label="Warm ups & motivation"
            description="Start each session with calming exercises and encouragement"
            variant="framed"
          />
          <AppScreenshot
            src="/screenshots/dashboard.png"
            alt="Dashboard with mood tracking, speech accuracy graph, and analysis"
            label="Caretaker dashboard"
            description="Moods, accuracy trends, and strengths at a glance"
            variant="framed"
          />
        </div>
      </div>
    </section>
  )
}

export default Features

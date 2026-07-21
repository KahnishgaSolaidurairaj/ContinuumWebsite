import AppScreenshot from './AppScreenshot'

const FEATURES = [
  {
    title: 'Weekly Streak',
    description:
      'Encourage consistent daily practice with streak tracking on the home screen.',
    src: '/screenshots/Home.png',
    alt: 'Continuum home screen showing daily practice streak and suggestions',
  },
  {
    title: 'Daily Warm Ups',
    description:
      'Gentle breathing exercises and motivation before each practice session.',
    src: '/screenshots/warm-up.png',
    alt: 'Warm up modal with a breathing exercise',
  },
  {
    title: 'Mood Logging',
    description:
      'Track emotional state alongside speech progress after each activity.',
    src: '/screenshots/Dashboard.png',
    alt: 'Dashboard showing mood logging and weekly activity trends',
  },
  {
    title: 'Practice Summaries',
    description:
      'Recaps of each therapy session for quick review by parents and caretakers.',
    src: '/screenshots/Practice.png',
    alt: 'Practice screen showing activity options for a selected sound',
  },
  {
    title: 'Sandbox Tracing',
    description:
      'Trace letter shapes in the sand to build motor memory for phoneme formation.',
    src: '/screenshots/sandbox-trace.png',
    alt: 'Sandbox tracing activity with letter A',
  },
  {
    title: 'Flash & Sound Practice',
    description:
      'Listen to clear audio models and work through flashcard levels for each sound.',
    src: '/screenshots/PickSounds.png',
    alt: 'Sound selection screen with vowel and consonant options',
  },
  {
    title: 'Practice & Score',
    description:
      'Record pronunciation attempts and get feedback on how to improve.',
    src: '/screenshots/test-practice.png',
    alt: 'Test activity screen for recording pronunciation',
  },
  {
    title: 'Progress Dashboard',
    description:
      'A central hub for accuracy trends, strengths, and areas to practice.',
    src: '/screenshots/Dashboard.png',
    alt: 'Progress dashboard with calendar, streak, and practice stats',
  },
]

/**
 * Features section with screenshot-driven cards.
 *
 * Returns: The features section element.
 */
function Features() {
  return (
    <section id="features" className="features section section--lavender">
      <div className="section__inner">
        <div className="section__header">
          <p className="eyebrow">Features</p>
          <h2>See what Continuum offers</h2>
          <p className="section__subtitle">
            From daily motivation to caretaker dashboards, explore the app
            features that keep practice engaging and progress visible.
          </p>
        </div>

        <div className="features__showcase-grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="feature-showcase-card">
              <AppScreenshot
                src={feature.src}
                alt={feature.alt}
                variant="framed"
              />
              <div className="feature-showcase-card__body">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

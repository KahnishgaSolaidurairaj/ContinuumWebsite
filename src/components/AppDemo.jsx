import AppScreenshot from './AppScreenshot'

const SCREENSHOTS = [
  {
    src: '/screenshots/warm-up.png',
    alt: 'Warm up breathing exercise modal in Continuum',
    label: 'Daily Warm Ups',
    description: 'Gentle breathing exercises before practice',
  },
  {
    src: '/screenshots/sandbox-trace.png',
    alt: 'Sandbox tracing activity with letter A and pen size options',
    label: 'Sandbox Tracing',
    description: 'Trace sounds with your finger in the sand',
  },
  {
    src: '/screenshots/flash-sound.png',
    alt: 'Flashcards screen for learning phoneme sounds',
    label: 'Sound Selection',
    description: 'Choose sounds and flashcard levels',
  },
  {
    src: '/screenshots/test-practice.png',
    alt: 'Test activity screen for recording pronunciation practice',
    label: 'Practice & Score',
    description: 'Record, score, and get real-time feedback',
  },
  {
    src: '/screenshots/dashboard.png',
    alt: 'Dashboard showing moods, speech accuracy, and analysis',
    label: 'Progress Dashboard',
    description: 'Track moods, accuracy, and growth over time',
  },
]

/**
 * App preview gallery with real Continuum screenshots.
 *
 * Returns: The app preview section element.
 */
function AppDemo() {
  return (
    <section id="app-preview" className="demo section section--lavender">
      <div className="section__inner">
        <div className="section__header">
          <p className="eyebrow">App Preview</p>
          <h2>Designed for iPad, built for kids</h2>
          <p className="section__subtitle">
            A playful, visual interface that keeps children engaged while giving parents the data they need.
          </p>
        </div>

        <div className="demo__gallery">
          {SCREENSHOTS.map((screen) => (
            <div key={screen.label} className="demo__item">
              <AppScreenshot
                src={screen.src}
                alt={screen.alt}
                label={screen.label}
                description={screen.description}
                variant="framed"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppDemo

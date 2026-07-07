import IpadPlaceholder from './IpadPlaceholder'

const SCREENSHOTS = [
  {
    label: 'Motivation',
    description: 'Daily encouragement from Broca',
    variant: 'lavender',
  },
  {
    label: 'Sound Selection',
    description: 'Choose alphabets & phonemes',
    variant: 'cream',
  },
  {
    label: 'Practice & Score',
    description: 'Listen, practice & get feedback',
    variant: 'navy',
  },
  {
    label: 'Progress Dashboard',
    description: 'Track growth over time',
    variant: 'sky',
  },
]

/**
 * App preview gallery with iPad screenshot placeholders.
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
            A playful, visual interface that keeps children engaged while giving
            parents the data they need. Screenshots coming soon.
          </p>
        </div>

        <div className="demo__gallery">
          {SCREENSHOTS.map((screen) => (
            <div key={screen.label} className="demo__item">
              <IpadPlaceholder
                label={screen.label}
                description={screen.description}
                variant={screen.variant}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppDemo

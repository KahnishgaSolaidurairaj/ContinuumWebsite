import AppScreenshot from './AppScreenshot'

const VERSION_1_SCREENSHOTS = '/images/Version 1.0'

const FEATURES = [
  // Parent
  {
    title: 'Parent Home',
    description:
      'Switch between parent and child modes from a secure home dashboard.',
    src: `${VERSION_1_SCREENSHOTS}/ParentHomePage.png`,
    alt: 'Parent home screen with mode toggle and quick-start options',
  },
  /*{
    title: 'Parent PIN Lock',
    description:
      'Protect parent settings with a 4-digit PIN before handing the device to your child.',
    src: `${VERSION_1_SCREENSHOTS}/ParentViewPin.png`,
    alt: 'Parent PIN popup for securing parent-only settings',
  },
  {
    title: 'Daily Time Goals',
    description:
      'Set a daily practice target from 5 to 30 minutes to build consistent habits.',
    src: `${VERSION_1_SCREENSHOTS}/ParentSetTimeGoal.png`,
    alt: "Today's Goal modal for selecting daily practice minutes",
  },*/
  {
    title: 'Manage Priority Sounds',
    description:
      "Curate which sounds appear on your child's home screen for focused practice.",
    src: `${VERSION_1_SCREENSHOTS}/ParentManagePrioritySounds.png`,
    alt: 'Manage priority sounds screen with add and remove options',
  },
  {
    title: 'Sound Library',
    description:
      'Browse vowels, consonants, and vowel teams organized by phoneme category.',
    src: `${VERSION_1_SCREENSHOTS}/ParentPracticePage.png`,
    alt: 'Sound library with vowels, consonants, and priority sounds',
  },
  {
    title: 'Progress Dashboard',
    description:
      'A central hub for accuracy trends, strengths, and areas to practice.',
    src: `${VERSION_1_SCREENSHOTS}/ParentDashboard.png`,
    alt: 'Progress dashboard with calendar, streak, and practice stats',
  },
  // Child view
  {
    title: 'Child Home',
    description:
      'Encourage consistent daily practice with streak tracking and motivation',
    src: `${VERSION_1_SCREENSHOTS}/ChildHomePage.png`,
    alt: 'Continuum child home screen showing daily streak, goals, and motivation',
  },
  {
    title: 'Focus Sounds',
    description:
      'Child view see priority sounds at a glance and tap to jump straight into practice.',
    src: `${VERSION_1_SCREENSHOTS}/ChildPracticeView.png`,
    alt: 'Child practice view showing priority sounds with example words',
  },
  /*{
    title: 'Daily Warm Ups',
    description:
      'Gentle breathing exercises and motivation before each practice session.',
    src: `${VERSION_1_SCREENSHOTS}/WarmUp.png`,
    alt: 'Warm up modal with a breathing exercise',
  },*/
  // Practice
  {
    title: 'Four Practice Modes',
    description:
      'Choose from Sandbox, Flash, Try, and Test activities for each sound.',
    src: `${VERSION_1_SCREENSHOTS}/4PracticeTypes.png`,
    alt: 'Practice screen showing four activity types for a selected sound',
  },
  {
    title: 'Sandbox Tracing',
    description:
      'Trace letter shapes in the sand to build motor memory for phoneme formation.',
    src: `${VERSION_1_SCREENSHOTS}/Sandbox.png`,
    alt: 'Sandbox tracing activity with letter A',
  },
  {
    title: 'Flash Practice',
    description:
      'Listen to clear audio models and work through flashcard levels for each sound.',
    src: `${VERSION_1_SCREENSHOTS}/Flash.png`,
    alt: 'Flash activity with sound levels and a highlighted word',
  },
  {
    title: 'Watch & Learn',
    description:
      'Watch expert demo videos to see how each sound is formed before practicing.',
    src: `${VERSION_1_SCREENSHOTS}/Try.png`,
    alt: 'Try activity showing a pronunciation demo video',
  },
  {
    title: 'Practice & Score',
    description:
      'Record pronunciation attempts and get feedback on how to improve.',
    src: `${VERSION_1_SCREENSHOTS}/Test.png`,
    alt: 'Test activity screen for recording pronunciation',
  },
  {
    title: 'Mood Logging',
    description:
      'Track emotional state alongside speech progress after each activity.',
    src: `${VERSION_1_SCREENSHOTS}/TrackMoodPopUp.png`,
    alt: 'Mood tracking popup after completing an activity',
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

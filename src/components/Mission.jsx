/*
const IMPACT_GOALS = [
  {
    title: 'Caretakers and or parents in the front row',
    description:
      'Stay closely connected to your child\u2019s speech development every step of the way.',
  },
  {
    title: 'Practice the fundamentals',
    description:
      'Give kids structured, repeatable ways to build pronunciation skills at home.',
  },
  {
    title: 'Track real progress',
    description:
      'Help parents monitor improvement with organized scores, summaries, and trends.',
  },
  {
    title: 'Kids who want to practice',
    description:
      'Turn pronunciation into something children look forward to, not something they avoid.',
  },
  {
    title: 'Less frustration, more wins',
    description:
      'Replace disappointment with encouragement, momentum, and small daily victories.',
  },
]
*/

/**
 * Mission section describing Continuum's motivation and intended impact.
 *
 * Returns: The mission section element.
 */
function Mission() {
  return (
    <section id="mission" className="mission section section--pink">
      <div className="section__inner">
        <div className="section__header">
          <p className="eyebrow">Our Mission</p>
          <h2>
            Help caretakers continue speech therapy at home with fun,
            organized, trackable practice.
          </h2>
          <p className="section__subtitle">
            Continuum was built around how kids actually learn through play.
            Every listen, trace, watch, and practice activity is shaped as a
            game so children stay engaged while parents get the structure and
            data they need.
          </p>
        </div>

        {/*
        <div className="mission__grid">
          {IMPACT_GOALS.map((goal) => (
            <article key={goal.title} className="mission__card">
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </article>
          ))}
        </div>
        */}

        {/*
        <div className="mission__approach">
          <p className="mission__approach-label">How we designed it</p>
          <h3>Games that guide behavior</h3>
          <p>
            We built Continuum around how kids actually learn through play.
            Every listen, trace, watch, and practice activity is shaped as a
            game so children stay engaged while parents get the structure and
            data they need.
          </p>
        </div>
        */}
      </div>
    </section>
  )
}

export default Mission

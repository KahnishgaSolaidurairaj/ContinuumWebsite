const AUDIENCE = [
  {
    title: 'Primary Users',
    items: ['Parents', 'Caretakers'],
    icon: '👩‍👦',
    color: 'lavender',
  },
  {
    title: 'Population Impacted',
    items: ['Children ages 6–10'],
    icon: '👧',
    color: 'sky',
  },
  {
    title: 'Our Goal',
    items: [
      'Make practice fun, not stressful',
      'Keep parents informed and involved',
    ],
    icon: '😊',
    color: 'lime',
  },
]

/**
 * Audience and mission section describing who Continuum serves.
 *
 * Returns: The who-we-help section element.
 */
function WhoWeHelp() {
  return (
    <section id="who-we-help" className="who section">
      <div className="section__inner">
        <div className="section__header">
          <p className="eyebrow">Who Are We Helping?</p>
          <h2>Built for families on the speech therapy journey</h2>
          <p className="section__subtitle">
            Continuum empowers caretakers and parents supporting children with
            dysarthria, with listen, trace, and practice games alongside
            progress tracking so kids stay motivated and families stay informed.
          </p>
        </div>

        <div className="who__grid">
          {AUDIENCE.map((card) => (
            <article key={card.title} className={`who__card who__card--${card.color}`}>
              <span className="who__icon" aria-hidden="true">
                {card.icon}
              </span>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeHelp

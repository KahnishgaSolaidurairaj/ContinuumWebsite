/**
 * Team member profile used in the team section template.
 *
 * Update each entry with a headshot path, age, and role when ready.
 * Place photos in: public/images/team/
 */
const TEAM_MEMBERS = [
  {
    name: 'Nyleah Jones',
    age: '18',
    role: 'User Interface Designer',
    linkedin: 'https://www.linkedin.com/in/nyleah-jones-a693a6322/',
    photo: null,
    photoAlt: 'Headshot of Nyleah Jones',
    initials: 'NJ',
    color: 'pink',
  },
  {
    name: 'Kahnishga Solaidurairaj',
    age: '19',
    role: 'Founder & Lead Developer',
    linkedin: 'https://www.linkedin.com/in/kahnishga-solaidurairaj',
    photo: '/images/team/Solaidurairaj_Kahnishga.jpg',
    photoAlt: 'Headshot of Kahnishga Solaidurairaj',
    photoPosition: 'center 32%',
    initials: 'KS',
    color: 'purple',
  },
  {
    name: 'Arjun Prabhakaran',
    age: '17',
    role: 'Machine Learning Lead',
    linkedin: 'https://www.linkedin.com/in/arjunprab/',
    photo: '/images/team/Arjun.jpeg',
    photoAlt: 'Headshot of Arjun Prabhakaran',
    initials: 'AP',
    color: 'blue',
  },
]

/**
 * Renders a circular team headshot or initials placeholder.
 *
 * Parameters:
 * - member: Team member profile object.
 *
 * Returns: The team member avatar element.
 */
function TeamAvatar({ member }) {
  const photoClassName = `team-card__photo team-card__photo--${member.color}`

  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.photoAlt}
        className={photoClassName}
        style={
          member.photoPosition
            ? { objectPosition: member.photoPosition }
            : undefined
        }
        loading="lazy"
      />
    )
  }

  return (
    <div
      className={`${photoClassName} team-card__photo--placeholder`}
      aria-hidden="true"
    >
      <span>{member.initials}</span>
    </div>
  )
}

/**
 * Team section with headshots, names, ages, and roles.
 *
 * Returns: The team section element.
 */
function Team() {
  return (
    <section id="team" className="team section section--blue">
      <div className="section__inner">
        <div className="section__header">
          <p className="eyebrow">Our Team</p>
          <h2>Meet the people behind Continuum</h2>
          <p className="section__subtitle">
            The team building Continuum for families and kids.
          </p>
        </div>

        <div className="team__grid">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.name}
              className={`team-card team-card--${member.color}`}
            >
              <TeamAvatar member={member} />
              <h3>
                <a
                  href={member.linkedin}
                  className="team-card__name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {member.name}
                </a>
              </h3>
              <p className="team-card__details">
                <span
                  className={`team-card__meta team-card__meta--${member.color}`}
                >
                  {member.age}
                </span>
                <span className="team-card__role">{member.role}</span>
              </p>
            </article>
          ))}
        </div>

        {/*
          How to add headshots:
          1. Save images to public/images/team/ (e.g. kahnishga.jpg)
          2. Set photo: '/images/team/kahnishga.jpg' for each member above
          3. Replace age and role with your details
        */}
      </div>
    </section>
  )
}

export default Team

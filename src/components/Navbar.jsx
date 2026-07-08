const NAV_LINKS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'Features', href: '#features' },
  { label: 'Activities', href: '#activities' },
  { label: 'App Preview', href: '#app-preview' },
]

/**
 * Sticky top navigation with smooth-scroll section links.
 *
 * Returns: The site navbar element.
 */
function Navbar() {
  return (
    <header className="navbar">
      <a href="#hero" className="navbar__brand">
        <span className="navbar__logo" aria-hidden="true">
          C
        </span>
        Continuum
      </a>

      <nav className="navbar__nav" aria-label="Main navigation">
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#launch" className="navbar__cta">
        Launching soon
      </a>
    </header>
  )
}

export default Navbar

const TEAM = [
  'Kahnishga Solaidurairaj',
  'Nyleah Jones',
  'Arjun Prabhakaran',
]

/**
 * Site footer with team credits and navigation links.
 *
 * Returns: The footer element.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo" aria-hidden="true">
            C
          </span>
          <span>Continuum</span>
        </div>

        <p className="footer__tagline">Find your voice through fun!</p>

        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#problem">The Problem</a>
          <a href="#features">Features</a>
          <a href="#activities">Activities</a>
          <a href="#app-preview">App Preview</a>
          <a href="#launch">Launch</a>
        </nav>

        <p className="footer__team">
          Built by {TEAM.join(', ')}
        </p>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Continuum. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

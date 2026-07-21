import AppIcon from './AppIcon'

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
          <AppIcon className="navbar__logo" size={36} />
          <span>Continuum</span>
        </div>

        <p className="footer__tagline">Continue speech therapy beyond the clinic!</p>

        {/*
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#features">Features</a>
          <a href="#activities">Activities</a>
          <a href="#problem">The Problem</a>
          <a href="#mission">Our Mission</a>
          <a href="#launch">Launch</a>
          <a href="#team">Team</a>
        </nav>
        */}

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Continuum. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

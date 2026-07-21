import { useEffect, useState } from 'react'
import AppIcon from './AppIcon'

const NAV_COLLAPSE_WIDTH = 1100

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Activities', href: '#activities' },
  { label: 'The Problem', href: '#problem' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'Team', href: '#team' },
]

/**
 * Sticky top navigation with smooth-scroll section links.
 *
 * Returns: The site navbar element.
 */
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /**
   * Closes the mobile navigation menu.
   */
  function closeMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    /**
     * Closes the mobile menu when the viewport is wide enough for desktop nav.
     */
    function handleResize() {
      if (window.innerWidth > NAV_COLLAPSE_WIDTH) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className={`navbar${isMenuOpen ? ' navbar--menu-open' : ''}`}>
      <a href="#hero" className="navbar__brand" onClick={closeMenu}>
        <AppIcon className="navbar__logo" size={36} />
        Continuum
      </a>

      <button
        type="button"
        className="navbar__menu-toggle"
        aria-expanded={isMenuOpen}
        aria-controls="navbar-menu"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="navbar__menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav
        id="navbar-menu"
        className={`navbar__nav${isMenuOpen ? ' navbar__nav--open' : ''}`}
        aria-label="Main navigation"
      >
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#launch" className="navbar__cta navbar__cta--menu" onClick={closeMenu}>
          Launching soon
        </a>
      </nav>

      <a href="#launch" className="navbar__cta navbar__cta--desktop">
        Launching soon
      </a>
    </header>
  )
}

export default Navbar

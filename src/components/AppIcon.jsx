const APP_ICON_PATH = '/images/brocaAppIcon.png'

/**
 * Renders the Continuum app icon (Broca mascot).
 *
 * Parameters:
 * - className: Optional CSS class for sizing and layout.
 * - size: Pixel width and height for the icon.
 * - alt: Accessible description; empty for decorative uses.
 *
 * Returns: The app icon image element.
 */
function AppIcon({ className = '', size = 36, alt = '' }) {
  return (
    <img
      src={APP_ICON_PATH}
      alt={alt}
      className={`app-icon ${className}`.trim()}
      width={size}
      height={size}
    />
  )
}

export default AppIcon

const APP_ICON_PATH = '/images/brocaAppIcon.png'

/**
 * Renders the Continuum app icon (Broca mascot).
 *
 * Parameters:
 * - className: Optional CSS class for sizing and layout.
 * - size: Pixel width and height for the icon.
 *
 * Returns: The app icon image element.
 */
function AppIcon({ className = '', size = 36 }) {
  return (
    <img
      src={APP_ICON_PATH}
      alt=""
      className={`app-icon ${className}`.trim()}
      width={size}
      height={size}
    />
  )
}

export default AppIcon

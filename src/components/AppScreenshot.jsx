/**
 * Displays an app screenshot or placeholder when no image is available.
 *
 * Parameters:
 * - src: Optional image path for the screenshot.
 * - alt: Accessible description of the screenshot.
 * - label: Optional short title shown below the image.
 * - description: Optional supporting caption text.
 * - variant: Layout style — "framed", "showcase", or "inline".
 *
 * Returns: A formatted screenshot figure element.
 */
function AppScreenshot({
  src,
  alt,
  label,
  description,
  variant = 'framed',
}) {
  return (
    <figure className={`app-shot app-shot--${variant}`}>
      <div className="app-shot__media">
        {src ? (
          <img src={src} alt={alt} className="app-shot__image" loading="lazy" />
        ) : (
          <div className="app-shot__placeholder" role="img" aria-label={alt}>
            <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <rect
                x="6"
                y="10"
                width="36"
                height="28"
                rx="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="18" cy="22" r="3" fill="currentColor" opacity="0.35" />
              <path
                d="M26 30 L32 24 L38 30"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.35"
              />
            </svg>
            <span>Screenshot coming soon</span>
          </div>
        )}
      </div>
      {(label || description) && (
        <figcaption className="app-shot__caption">
          {label && <span className="app-shot__label">{label}</span>}
          {description && (
            <span className="app-shot__description">{description}</span>
          )}
        </figcaption>
      )}
    </figure>
  )
}

export default AppScreenshot

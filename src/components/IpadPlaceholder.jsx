/**
 * Reusable iPad frame with a placeholder screen for future app screenshots.
 *
 * Parameters:
 * - label: Short title shown on the placeholder screen.
 * - description: Supporting text below the label.
 * - variant: Color theme key for the placeholder background.
 *
 * Returns: A styled iPad mockup element.
 */
function IpadPlaceholder({ label, description, variant = 'cream' }) {
  return (
    <div className="ipad" role="img" aria-label={`${label} — app screenshot placeholder`}>
      <div className="ipad__frame">
        <div className="ipad__camera" aria-hidden="true" />
        <div className={`ipad__screen ipad__screen--${variant}`}>
          <div className="ipad__placeholder-content">
            <div className="ipad__placeholder-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <rect
                  x="6"
                  y="10"
                  width="36"
                  height="28"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="18" cy="22" r="3" fill="currentColor" opacity="0.4" />
                <path
                  d="M26 30 L32 24 L38 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
              </svg>
            </div>
            <p className="ipad__placeholder-label">{label}</p>
            <p className="ipad__placeholder-desc">{description}</p>
            <span className="ipad__placeholder-badge">Screenshot coming soon</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IpadPlaceholder

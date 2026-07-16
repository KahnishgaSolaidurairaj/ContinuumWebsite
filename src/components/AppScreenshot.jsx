/**
 * Displays an app screenshot with optional caption and layout variants.
 *
 * Parameters:
 * - src: Image path for the screenshot.
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
        <img src={src} alt={alt} className="app-shot__image" loading="lazy" />
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

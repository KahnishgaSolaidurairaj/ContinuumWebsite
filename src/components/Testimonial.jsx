/**
 * Stakeholder testimonial quote section.
 *
 * Returns: The testimonial section element.
 */
function Testimonial() {
  return (
    <section className="testimonial section">
      <div className="section__inner testimonial__inner">
        <blockquote className="testimonial__quote">
          <p>
            &ldquo;We went through a lot of physical therapy back then, an app
            like this sounds incredible.&rdquo;
          </p>
          <footer>
            <cite>— Will</cite>
            <span className="testimonial__context">Stakeholder feedback</span>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

export default Testimonial

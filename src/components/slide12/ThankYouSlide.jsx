const particles = [
  { top: '30%', left: '24%', delay: '0ms' },
  { top: '62%', left: '28%', delay: '900ms' },
  { top: '32%', right: '25%', delay: '1400ms' },
  { top: '63%', right: '28%', delay: '2000ms' },
]

export default function ThankYouSlide() {
  return (
    <section className="thankyou-section" aria-labelledby="thankyou-title">
      <div className="thankyou-hero">
        <div className="thankyou-glow" aria-hidden="true" />
        <div className="thankyou-ring" aria-hidden="true" />
        <div className="thankyou-ring thankyou-ring-delay-1" aria-hidden="true" />
        <div className="thankyou-ring thankyou-ring-delay-2" aria-hidden="true" />

        {particles.map((particle, index) => (
          <span
            key={index}
            className="thankyou-particle"
            style={{
              top: particle.top,
              left: particle.left,
              right: particle.right,
              '--particle-delay': particle.delay,
            }}
            aria-hidden="true"
          />
        ))}

        <div className="thankyou-content">
          <h1 id="thankyou-title" className="thankyou-title thankyou-title-shine">
            Thank You
          </h1>

          <p className="thankyou-subtitle">
            Let&apos;s secure code, cloud, and infrastructure together.
          </p>

          <div className="thankyou-contact">
            <a className="thankyou-link" href="mailto:msakhai@cyfrosec.com">
              msakhai@cyfrosec.com
            </a>
            <a className="thankyou-link" href="https://www.cyfrosec.com">
              www.cyfrosec.com
            </a>
          </div>

          <div className="thankyou-brand">CyfroSec</div>
        </div>
      </div>
    </section>
  )
}

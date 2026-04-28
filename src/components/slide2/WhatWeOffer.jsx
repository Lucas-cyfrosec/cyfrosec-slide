const offers = [
  {
    title: 'Code to Cloud Security',
    body: (
      <>
        Unified <strong>AI driven visibility and security from development to deployment.</strong>
      </>
    ),
  },
  {
    title: 'CyfroAI Engine',
    body: (
      <strong>
        Actionable security insights for everyone, from management executives to security
        engineers.
      </strong>
    ),
  },
  {
    title: 'Risk Prioritisation',
    body: 'Context aware correlation with step by step remediation guidance.',
  },
  {
    title: 'CyfroCode',
    body: 'Integrated code repository scanning and automated patch generation.',
  },
  {
    title: 'GDPR Compliance',
    body: 'Ensures that infrastructure is aligned with global security guidelines.',
  },
]

function OfferCard({ title, body, index }) {
  return (
    <article className="s2-card" style={{ '--card-delay': `${220 + index * 120}ms` }}>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  )
}

export default function WhatWeOffer() {
  return (
    <section className="s2-section" aria-labelledby="what-we-offer-title">
      <h1 id="what-we-offer-title">What We Offer</h1>

      <div className="s2-grid" aria-label="CyfroSec offering overview">
        <div className="s2-row s2-row-top">
          {offers.slice(0, 3).map((offer, index) => (
            <OfferCard key={offer.title} {...offer} index={index} />
          ))}
        </div>

        <div className="s2-row s2-row-bottom">
          {offers.slice(3).map((offer, index) => (
            <OfferCard key={offer.title} {...offer} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}

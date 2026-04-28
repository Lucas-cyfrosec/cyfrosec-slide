const empowermentCards = [
  {
    title: 'Visibility & Detection',
    body: (
      <strong>Detect exposed services and vulnerabilities across complex networks.</strong>
    ),
    impact: true,
  },
  {
    title: 'Fix Faster, Reduce Impact',
    body: <strong>Surface urgent issues to eliminate alert fatigue and save time.</strong>,
    impact: true,
  },
  {
    title: 'Risk Reduction',
    body: <strong>Minimize infrastructure outages and security exposures.</strong>,
    impact: true,
  },
  {
    title: 'Prioritization Engine',
    body: 'Correlate CVEs and misconfigurations to prioritize critical risks.',
  },
  {
    title: 'Network Visualization',
    body: 'Identify failure points and secure critical network peering.',
  },
  {
    title: 'AI Powered Guidance',
    body: 'CyfroAI Insights provides remediation guidance for rapid response.',
  },
]

function EmpowermentCard({ title, body, index, impact = false }) {
  return (
    <article
      className={`aht-card ${impact ? 'aht-card-impact' : ''}`}
      style={{ '--aht-delay': `${250 + index * 110}ms` }}
    >
      <div className="aht-card-glow" aria-hidden="true" />
      <div className="aht-card-shine" aria-hidden="true" />
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  )
}

export default function AlHayatTelecomEmpowerment() {
  return (
    <section className="aht-section" aria-labelledby="aht-heading">
      <h1 id="aht-heading" className="aht-heading">
        How CyfroSec Empowers AL-HaYaT Telecom
      </h1>

      <div className="aht-grid">
        {empowermentCards.map((card, index) => (
          <EmpowermentCard key={card.title} {...card} index={index} />
        ))}
      </div>
    </section>
  )
}

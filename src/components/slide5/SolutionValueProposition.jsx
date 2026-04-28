import {
  BadgeCheck,
  BrainCircuit,
  ChartColumn,
  CloudCheck,
  ShieldCheck,
} from 'lucide-react'

const valueCards = [
  {
    title: 'Robust Multi-Layer Scanning',
    icon: ShieldCheck,
    body: (
      <>
        AI powered code &amp; network scanning, asset discovery, and vulnerability assessment
        through <strong>CyfroAgent</strong>.
      </>
    ),
  },
  {
    title: 'Empowered by CyfroAI Engine',
    icon: BrainCircuit,
    body: (
      <strong>
        Designed for cybersecurity experts, non-cybersecurity engineers and management
        executives alike.
      </strong>
    ),
  },
  {
    title: 'Code to Cloud Protection',
    icon: CloudCheck,
    body: (
      <strong>
        Fixing production vulnerabilities is 30x more expensive than during development (NIST).
      </strong>
    ),
  },
  {
    title: 'CyfroAI Insights',
    icon: ChartColumn,
    body: (
      <strong>
        See your network the way attackers do and save time on fixes with clear remediation
        guidance.
      </strong>
    ),
  },
]

function ValueCard({ title, body, Icon, index }) {
  return (
    <article className="svp-card" style={{ '--svp-delay': `${240 + index * 120}ms` }}>
      <div className="svp-card-shine" aria-hidden="true" />
      <div className="svp-card-icon-shell">
        <div className="svp-card-icon">
          <Icon strokeWidth={2.1} aria-hidden="true" />
        </div>
      </div>
      <div className="svp-card-copy">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </article>
  )
}

export default function SolutionValueProposition() {
  return (
    <section className="svp-section" aria-labelledby="svp-heading">
      <h1 id="svp-heading" className="svp-heading">
        Solution &amp; Value Proposition
      </h1>

      <div className="svp-grid">
        {valueCards.map((card, index) => (
          <ValueCard
            key={card.title}
            title={card.title}
            body={card.body}
            Icon={card.icon}
            index={index}
          />
        ))}
      </div>

      <article className="svp-highlight-card">
        <div className="svp-highlight-shine" aria-hidden="true" />
        <div className="svp-highlight-icon">
          <BadgeCheck strokeWidth={2.15} aria-hidden="true" />
        </div>
        <div className="svp-highlight-copy">
          <p className="svp-highlight-line-1">
            <strong>Eliminating Alert Fatigue:</strong> Cut through the noise and prioritize to
            focus on the most important risks first.
          </p>
          <p className="svp-highlight-line-2">
            Built by Cybersecurity experts with over 25 years of experience.
          </p>
        </div>
      </article>
    </section>
  )
}

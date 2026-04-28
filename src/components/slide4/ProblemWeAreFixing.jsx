import { BadgeDollarSign } from 'lucide-react'

function WarningIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M32 8 59 56H5L32 8Z"
        fill="currentColor"
      />
      <rect x="29" y="22" width="6" height="18" rx="2" fill="#f8fafc" />
      <rect x="29" y="44" width="6" height="6" rx="2" fill="#f8fafc" />
    </svg>
  )
}

function BugIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="26" r="8" fill="currentColor" />
      <rect x="18" y="24" width="28" height="24" rx="12" fill="currentColor" />
      <rect x="28.5" y="14" width="3" height="8" rx="1.5" fill="currentColor" />
      <rect x="32.5" y="14" width="3" height="8" rx="1.5" fill="currentColor" />
      <path d="M12 24H22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M10 34H20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M12 44H22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 24H52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M44 34H54" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 44H52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M25 31H39" stroke="#f8fafc" strokeWidth="4" strokeLinecap="round" />
      <path d="M25 40H39" stroke="#f8fafc" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M6 32S15 18 32 18s26 14 26 14-9 14-26 14S6 32 6 32Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="8" fill="currentColor" />
      <path d="M12 12 52 52" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M12 22 32 8l20 14-20 14L12 22Z"
        fill="currentColor"
        opacity="0.98"
      />
      <path
        d="M16 34 32 22l16 12-16 12-16-12Z"
        fill="currentColor"
        opacity="0.82"
      />
      <path
        d="M20 46 32 38l12 8-12 8-12-8Z"
        fill="currentColor"
        opacity="0.66"
      />
      <path d="M10 10 54 54" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

const problems = [
  {
    title: 'Increasing AI Driven outages and attacks',
    icon: WarningIcon,
    body: (
      <strong>Amazon&apos;s 6hr outage in March 2026 lead to a loss of 6.3M orders.</strong>
    ),
  },
  {
    title: 'Rise in Code Vulnerabilities',
    icon: BugIcon,
    body: (
      <>
        <strong>45% of AI generated code contains vulnerabilities</strong>
        <br />
        (Veracode research)
      </>
    ),
  },
  {
    title: 'The Visibility Gap',
    icon: EyeOffIcon,
    body: 'Critical issues are lost in excessive alerts, hindering prioritization and creating risks.',
  },
  {
    title: 'Fragmented Solutions',
    icon: LayersIcon,
    body: 'Lack of unified vulnerability management across environments (code to cloud).',
  },
]

function ProblemCard({ title, body, Icon, index }) {
  return (
    <article className="problem-card" style={{ '--problem-delay': `${200 + index * 100}ms` }}>
      <div className="problem-card-icon">
        <Icon />
      </div>
      <div className="problem-card-copy">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </article>
  )
}

export default function ProblemWeAreFixing() {
  return (
    <section className="problem-section" aria-labelledby="problem-heading">
      <h1 id="problem-heading" className="problem-heading">
        The Problem We Are Fixing
      </h1>

      <div className="problem-grid">
        {problems.map((problem, index) => (
          <ProblemCard
            key={problem.title}
            title={problem.title}
            body={problem.body}
            Icon={problem.icon}
            index={index}
          />
        ))}
      </div>

      <article className="financial-impact-card">
        <div className="financial-impact-icon">
          <BadgeDollarSign strokeWidth={1.9} aria-hidden="true" />
        </div>
        <p>
          <strong>Financial Impact: $5,600 per minute</strong> is the average cost of system
          unavailability (Gartner IT Downtime Statistics).
        </p>
      </article>
    </section>
  )
}

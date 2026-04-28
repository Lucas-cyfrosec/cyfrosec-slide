const comparisonColumns = {
  left: {
    header: 'CyfroSec',
    side: 'left',
    cards: [
      {
        title: 'Unified Code to Cloud Intelligence',
        bullets: [
          'Continuous network visibility & asset discovery',
          <strong key="l1b">Full-stack scanning: Development to Deployment</strong>,
        ],
      },
      {
        title: 'CyfroAI Engine: Context Aware Prioritization',
        bullets: [
          'CVE correlation with contextual exploitability',
          <strong key="l2b">Smart triage eliminates alert fatigue & time crunch</strong>,
        ],
      },
      {
        title: 'Accessibility & Actionable Guidance',
        bullets: [
          <strong key="l3a">
            Remediation guidance for all, from executives to security engineers with CyfroAI
            Insights
          </strong>,
          <>
            <strong>CyfroAssistant:</strong> Natural language security agent
          </>,
        ],
      },
    ],
  },
  right: {
    header: 'Conventional Tools',
    side: 'right',
    cards: [
      {
        title: 'Fragmented & Siloed Vulnerability Data',
        bullets: [
          'Web Apps focus (Acunetix)/Infrastructure focus (Tenable)',
          'Limited security focus in code reviews (CodeRabbit)',
        ],
      },
      {
        title: 'Manual Analysis & Visibility Gaps',
        bullets: [
          <strong key="r2a">Severity ratings lacks environmental context</strong>,
          <strong key="r2b">High manual effort for risk validation</strong>,
        ],
      },
      {
        title: 'Built for Security Experts Only',
        bullets: [
          <strong key="r3a">Steep learning curve. Security depth required</strong>,
          'Technical and compliance heavy reporting',
        ],
      },
    ],
  },
}

function ColumnHeader({ title, side }) {
  return (
    <div className={`clc-header clc-header-${side}`}>
      <span>{title}</span>
    </div>
  )
}

function ComparisonCard({ title, bullets, side, rowIndex }) {
  return (
    <article className={`clc-card clc-card-${side}`} style={{ '--clc-delay': `${380 + rowIndex * 180}ms` }}>
      <div className="clc-card-glow" aria-hidden="true" />
      <div className="clc-card-shine" aria-hidden="true" />
      <h2>{title}</h2>
      <ul>
        {bullets.map((bullet, index) => (
          <li
            key={`${title}-${index}`}
            className="clc-bullet"
            style={{ '--clc-bullet-delay': `${560 + rowIndex * 180 + index * 90}ms` }}
          >
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function CompetitiveLandscapeComparison() {
  const rows = comparisonColumns.left.cards.map((leftCard, index) => ({
    left: leftCard,
    right: comparisonColumns.right.cards[index],
    rowIndex: index,
  }))

  return (
    <section className="clc-section" aria-labelledby="clc-heading">
      <h1 id="clc-heading" className="clc-heading">
        Competitive Landscape Comparison
      </h1>

      <div className="clc-columns">
        <div className="clc-column clc-column-left">
          <ColumnHeader title={comparisonColumns.left.header} side="left" />
        </div>
        <div className="clc-column clc-column-right">
          <ColumnHeader title={comparisonColumns.right.header} side="right" />
        </div>
      </div>

      <div className="clc-divider" aria-hidden="true" />

      <div className="clc-rows">
        {rows.map(({ left, right, rowIndex }) => (
          <div className="clc-row" key={left.title}>
            <ComparisonCard {...left} side="left" rowIndex={rowIndex} />
            <ComparisonCard {...right} side="right" rowIndex={rowIndex} />
          </div>
        ))}
      </div>
    </section>
  )
}

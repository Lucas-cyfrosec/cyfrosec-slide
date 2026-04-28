const includedFeatures = [
  'Network vulnerability and Asset discovery Scanning',
  'Service Fingerprinting - misconfigurations, secrets and system vulnerabilities detection',
  'CyfroAI Insights for remediation guidance',
  'Limited Compliance tool and CyfroCode access',
  'Rich dashboard elements and Risk Prioritization',
  'Guided review session with CyfroSec’s team',
]

const trialLimits = [
  'Time boxed to 14 days',
  'Limited to 2 CyfroAgents, 2 Scans and 1 Account Group',
  'Limited GDPR Compliance tool access: 1 Deep Analysis',
  'Limited CyfroCode access: 1 Repository scan',
]

export default function ProFreeTierSlide() {
  return (
    <section className="pft-section" aria-labelledby="pft-heading">
      <div className="pft-hero">
        <div className="pft-hero-copy">
          <h1 id="pft-heading" className="pft-heading">
            Pro Free Tier
          </h1>

          <div className="pft-pill">14-Day Free Trial</div>

          <p className="pft-tagline">
            A stronger pilot experience for businesses evaluating CyfroSec as a broader security
            platform.
          </p>
        </div>

        <aside className="pft-banner">
          <div className="pft-banner-shine" aria-hidden="true" />
          <h2>Run a meaningful pilot, prove internal value quickly</h2>
          <p>Transition smoothly into a full fledged CyfroSec deployment</p>
        </aside>
      </div>

      <div className="pft-content">
        <article className="pft-main-card">
          <section className="pft-card-section">
            <h3>Best for</h3>
            <p>
              Teams that want to assess operational value, reporting quality, and remediation
              workflows before purchase.
            </p>
          </section>

          <div className="pft-divider" aria-hidden="true" />

          <section className="pft-card-section">
            <h3>Included features</h3>
            <ul className="pft-list">
              {includedFeatures.map((item, index) => (
                <li
                  key={item}
                  className="pft-list-item"
                  style={{ '--pft-bullet-delay': `${760 + index * 70}ms` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </article>

        <div className="pft-side-stack">
          <article className="pft-side-card pft-side-card-limits">
            <h3>Trial limits</h3>
            <ul className="pft-list">
              {trialLimits.map((item, index) => (
                <li
                  key={item}
                  className="pft-list-item"
                  style={{ '--pft-bullet-delay': `${920 + index * 70}ms` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="pft-side-card pft-side-card-value">
            <div className="pft-value-shine" aria-hidden="true" />
            <h3>Value Proposition</h3>
            <p>
              Helps your team move from raw findings to prioritized action with clearer reporting
              and AI powered guidance which can be understood by security engineers and business
              executives.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

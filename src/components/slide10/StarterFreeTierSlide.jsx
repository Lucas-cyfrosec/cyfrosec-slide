const includedFeatures = [
  'Network Vulnerability and Asset discovery Scanning',
  'Service Fingerprinting: Misconfigurations, Secrets and System Vulnerabilities Detection',
  'Limited Dashboard elements',
  'Limited Asset Topology features',
  'Scans Reporting with export as spreadsheets',
  'Guided onboarding and Email support during trial',
]

const trialLimits = [
  'Limited to 1 CyfroAgent, 1 Scan and 1 Account Group',
  'Limited scan configurations upto 2 tests',
  'No CyfroAI Engine and CyfroAI Insights',
  'No CyfroCode',
  'Designed for basic security evaluation, not full scale coverage and smart AI powered insights',
]

export default function StarterFreeTierSlide() {
  return (
    <section className="sft-section" aria-labelledby="sft-heading">
      <div className="sft-hero">
        <div className="sft-hero-copy">
          <h1 id="sft-heading" className="sft-heading">
            Starter Free Tier
          </h1>

          <div className="sft-pill">14-Day Free Trial</div>

          <p className="sft-tagline">A simple, low-friction way to see CyfroSec in action.</p>
        </div>

        <aside className="sft-banner">
          <div className="sft-banner-shine" aria-hidden="true" />
          <h2>Start with fast exposure discovery</h2>
          <p>Upgrade when you need deeper analysis and broader coverage</p>
        </aside>
      </div>

      <div className="sft-content">
        <article className="sft-main-card">
          <section className="sft-card-section">
            <h3>Best for</h3>
            <p>
              Teams who want basic security visibility without CyfroAI Engine and AI offerings
              from CyfroSec
            </p>
          </section>

          <div className="sft-divider" aria-hidden="true" />

          <section className="sft-card-section">
            <h3>Included features</h3>
            <ul className="sft-list">
              {includedFeatures.map((item, index) => (
                <li key={item} className="sft-list-item" style={{ '--sft-bullet-delay': `${760 + index * 70}ms` }}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </article>

        <div className="sft-side-stack">
          <article className="sft-side-card sft-side-card-limits">
            <h3>Trial limits</h3>
            <ul className="sft-list">
              {trialLimits.map((item, index) => (
                <li key={item} className="sft-list-item" style={{ '--sft-bullet-delay': `${920 + index * 70}ms` }}>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="sft-side-card sft-side-card-value">
            <div className="sft-value-shine" aria-hidden="true" />
            <h3>Value Proposition</h3>
            <p>
              Save time and get immediate visibility into what is running, what is exposed and
              where the first risks are providing
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

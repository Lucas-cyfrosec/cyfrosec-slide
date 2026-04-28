import insightImg from './img/insight.png'

export default function Scene3({ state, riskScoreRef }) {
  return (
    <section
      id="scene-3"
      className={`scene scene-ai ${state}`}
      aria-label="Prioritized Remediation"
    >
      <div className="scene-core">
        <div className="scene-grid" />
        <div className="scene-shell">
          <div className="scene-main">
            <div className="scene-label reveal-up" style={{ '--delay': '120ms' }}>
              Prioritized Remediation
            </div>

            <div className="scene-columns">
              <div className="scene-left">
                <div className="scene-title reveal-up" style={{ '--delay': '260ms' }}>
                  <h2>CyfroAI Insights prioritizes fixes and validates compliance</h2>
                  <p>
                    Findings compress into action, policy proof, and a final
                    secure-state view that resolves the story with operational trust.
                  </p>
                </div>

                <div
                  className="insights-panel floating-card panel-rise"
                  style={{ '--delay': '460ms' }}
                  aria-label="CyfroAI Insights card"
                >
                  <div className="panel-top">
                    <div className="stack">
                      <span className="panel-kicker">Prioritized Remediation</span>
                      <div className="panel-name">
                        <img src={insightImg} alt="" className="insight-logo" aria-hidden="true" />
                        <span>CyfroAI Insights</span>
                      </div>
                    </div>
                    <span className="status-pill info confidence">AI Priority</span>
                  </div>

                  <div className="risk-band">
                    <span>Risk Score</span>
                    <div className="risk-meter" aria-hidden="true">
                      <i />
                    </div>
                    <div
                      className="risk-score"
                      data-risk-score
                      ref={riskScoreRef}
                    >
                      86
                    </div>
                  </div>

                  <div className="split-line" />

                  <div className="recommendations">
                    <div className="rec" style={{ '--rec-delay': '1280ms' }}>
                      <span className="chip chip-critical">Critical</span>
                      <strong>Patch exposed service</strong>
                      <span className="state">Queued</span>
                    </div>
                    <div className="rec" style={{ '--rec-delay': '1520ms' }}>
                      <span className="chip chip-high">High</span>
                      <strong>Restrict admin access</strong>
                      <span className="state">Next</span>
                    </div>
                    <div className="rec" style={{ '--rec-delay': '1760ms' }}>
                      <span className="chip chip-medium">Medium</span>
                      <strong>Harden TLS configuration</strong>
                      <span className="state">Plan</span>
                    </div>
                  </div>
                </div>

                <div className="gdpr-card" aria-label="GDPR Compliance Check Passed">
                  <div className="gdpr-top">
                    <div className="check-ring" aria-hidden="true">
                      <svg viewBox="0 0 32 32">
                        <path d="M7 16.7 13.2 22.5 25 9.5" />
                      </svg>
                    </div>
                    <div className="gdpr-title">
                      <strong>GDPR Compliance Check Passed</strong>
                      <span>Controls validated against production posture</span>
                    </div>
                  </div>
                  <div className="compliance-bars">
                    {[
                      { label: 'Data',   delay: '2360ms' },
                      { label: 'Access', delay: '2520ms' },
                      { label: 'Audit',  delay: '2680ms' },
                      { label: 'Policy', delay: '2840ms' },
                    ].map(({ label, delay }) => (
                      <div key={label} className="bar-track" style={{ '--bar-delay': delay }}>
                        <span className="bar-label">{label}</span>
                        <div className="bar-fill" />
                      </div>
                    ))}
                  </div>
                </div>

                <p className="caption reveal-up" style={{ '--delay': '3080ms' }}>
                  CyfroAI Insights prioritizes fixes and validates compliance
                </p>
              </div>

              <div className="scene-right">
                <div className="secure-banner">
                  <div className="secure-grid" aria-hidden="true" />
                  <div className="secure-head">
                    <i />
                    <span>Secure State</span>
                  </div>
                  <div className="secure-lock" aria-hidden="true">
                    <svg viewBox="0 0 32 32">
                      <path d="M16 3.5 26 7.8V15c0 7-4 11.7-10 13.5C10 26.7 6 22 6 15V7.8L16 3.5Z" />
                      <path d="M11.5 16.2 14.7 19.5 21.2 12.6" />
                    </svg>
                  </div>
                  <div className="secure-copy">
                    <strong>Infrastructure Secured with CyfroSec</strong>
                    <span>
                      Code, cloud posture, AI-prioritized remediation, and compliance
                      validation settle into a clean secure production state.
                    </span>
                  </div>
                  <div className="infra-logos">
                    <div className="infra-logo-chip logo-aws" style={{ '--logo-delay': '2900ms' }}>
                      <svg className="logo-svg" viewBox="0 0 20 14" fill="none">
                        <path d="M14 10.5H5.5C3.3 10.5 1.5 8.7 1.5 6.5c0-1.8 1.2-3.3 2.9-3.8C5 1.1 7 0 9.5 0c2 0 3.8 1 4.9 2.6.3-.1.6-.1.9-.1C17.5 2.5 19.5 4.3 19.5 6.5c0 2.2-2 4-4.5 4" stroke="#ff9900" strokeWidth="1.4" strokeLinecap="round"/>
                        <path d="M7.5 10.5v3M12.5 10.5v3M5.5 13.5h9" stroke="#ff9900" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                      AWS
                    </div>
                    <div className="infra-logo-chip logo-docker" style={{ '--logo-delay': '3020ms' }}>
                      <svg className="logo-svg" viewBox="0 0 20 16" fill="none">
                        <rect x="1" y="6" width="3.2" height="2.8" rx="0.7" fill="#2496ed"/>
                        <rect x="5.4" y="3.2" width="3.2" height="2.8" rx="0.7" fill="#2496ed"/>
                        <rect x="5.4" y="6" width="3.2" height="2.8" rx="0.7" fill="#2496ed"/>
                        <rect x="9.8" y="6" width="3.2" height="2.8" rx="0.7" fill="#2496ed"/>
                        <path d="M1 12.5c2 1.5 5.5 2 9 1.2l4-1.5c1.5-.5 3.5-2 3.8-3.4H1V12.5z" fill="#2496ed" opacity="0.6"/>
                      </svg>
                      Docker
                    </div>
                    <div className="infra-logo-chip logo-k8s" style={{ '--logo-delay': '3140ms' }}>
                      <svg className="logo-svg" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="2.8" fill="#326ce5"/>
                        <path d="M10 2v4M10 14v4M2 10h4M14 10h4M4.3 4.3l2.8 2.8M12.9 12.9l2.8 2.8M4.3 15.7l2.8-2.8M12.9 7.1l2.8-2.8" stroke="#326ce5" strokeWidth="1.6" strokeLinecap="round"/>
                      </svg>
                      Kubernetes
                    </div>
                    <div className="infra-logo-chip logo-server" style={{ '--logo-delay': '3260ms' }}>
                      <svg className="logo-svg" viewBox="0 0 20 18" fill="none">
                        <rect x="1.5" y="1.5" width="17" height="5" rx="1.5" stroke="#38d27a" strokeWidth="1.4"/>
                        <rect x="1.5" y="11.5" width="17" height="5" rx="1.5" stroke="#38d27a" strokeWidth="1.4"/>
                        <circle cx="15.5" cy="4" r="1.2" fill="#38d27a"/>
                        <circle cx="15.5" cy="14" r="1.2" fill="#38d27a"/>
                        <line x1="3.5" y1="4" x2="12" y2="4" stroke="#38d27a" strokeWidth="1.2" strokeLinecap="round"/>
                        <line x1="3.5" y1="14" x2="12" y2="14" stroke="#38d27a" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      Servers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

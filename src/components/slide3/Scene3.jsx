export default function Scene3({ state }) {
  return (
    <section
      id="scene-3"
      className={`scene scene-cicd ${state}`}
      aria-label="Build and Deployment"
    >
      <div className="scene-core">
        <div className="scene-grid" />
        <div className="scene-shell">
          <div className="scene-label reveal-up" style={{ '--delay': '100ms' }}>
            Build &amp; Deployment
          </div>

          <div className="scene-title cicd-title reveal-up" style={{ '--delay': '200ms' }}>
            <h2>Secure code moves through CI/CD to production</h2>
            <p>
              The patched application is containerized, tested, and deployed to both SaaS
              cloud and NexaBank's on-premise banking systems.
            </p>
          </div>

          {/* Pipeline steps */}
          <div className="cicd-pipeline panel-rise" style={{ '--delay': '440ms' }}>
            <div className="pipeline-step-card">
              <div className="step-icon-ring">
                <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
              </div>
              <span className="step-name">Build</span>
              <span className="step-sub">Containerized<br />Docker image</span>
              <span className="step-check" style={{ '--check-delay': '1100ms' }}>✓ Done</span>
            </div>

            <div className="pipeline-connector">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 10h12M12 5l5 5-5 5" />
              </svg>
            </div>

            <div className="pipeline-step-card">
              <div className="step-icon-ring">
                <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <span className="step-name">Test</span>
              <span className="step-sub">Unit &amp; integration<br />tests passed</span>
              <span className="step-check" style={{ '--check-delay': '1400ms' }}>✓ 248 / 248</span>
            </div>

            <div className="pipeline-connector">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 10h12M12 5l5 5-5 5" />
              </svg>
            </div>

            <div className="pipeline-step-card">
              <div className="step-icon-ring">
                <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="step-name">Security Scan</span>
              <span className="step-sub">SAST · dependency<br />audit · SBOM</span>
              <span className="step-check" style={{ '--check-delay': '1700ms' }}>✓ 0 Critical</span>
            </div>

            <div className="pipeline-connector">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 10h12M12 5l5 5-5 5" />
              </svg>
            </div>

            <div className="pipeline-step-card">
              <div className="step-icon-ring">
                <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="step-name">Deploy</span>
              <span className="step-sub">Rolling update<br />zero downtime</span>
              <span className="step-check" style={{ '--check-delay': '2000ms' }}>✓ Live</span>
            </div>
          </div>

          {/* Deployment targets */}
          <div className="deploy-targets-row">
            <div className="deploy-target-card panel-rise" style={{ '--delay': '2200ms' }}>
              <div className="deploy-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <div className="deploy-info">
                <strong>SaaS Cloud</strong>
                <span>Customer-facing application · AWS us-east-1</span>
              </div>
              <div className="deploy-status">
                <i />
                Live
              </div>
            </div>

            <div className="deploy-target-card panel-rise" style={{ '--delay': '2500ms' }}>
              <div className="deploy-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              </div>
              <div className="deploy-info">
                <strong>On-Premises</strong>
                <span>Internal banking systems · NexaBank DC</span>
              </div>
              <div className="deploy-status">
                <i />
                Live
              </div>
            </div>
          </div>

          <p className="caption cicd-caption reveal-up" style={{ '--delay': '3200ms' }}>
            NexaBank's secure application is live across cloud and on-prem environments
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Scene7({ state }) {
  return (
    <section
      id="scene-7"
      className={`scene scene-lifecycle ${state}`}
      aria-label="Full Lifecycle Protection"
    >
      <div className="scene-core">
        <div className="scene-grid" />
        <div className="scene-shell">
          <div className="scene-lifecycle-layout">
            <div className="scene-label reveal-up" style={{ '--delay': '100ms' }}>
              Full Lifecycle Protection
            </div>

            <div className="lifecycle-title reveal-up" style={{ '--delay': '200ms' }}>
              <h2>End-to-end security — from first commit to runtime</h2>
            </div>

            {/* Pipeline visualization */}
            <div className="lifecycle-pipeline-row panel-rise" style={{ '--delay': '400ms' }}>
              <div className="lifecycle-node-card">
                <div className="lifecycle-node-icon dev">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <div className="lifecycle-node-name">Developer</div>
                <div className="lifecycle-node-sub">Anna writes code</div>
              </div>

              <div className="lifecycle-arrow-gap">›</div>

              <div className="lifecycle-node-card">
                <div className="lifecycle-node-icon code">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#38d27a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className="lifecycle-node-name">CyfroCode</div>
                <div className="lifecycle-node-sub">Shift Left fix</div>
              </div>

              <div className="lifecycle-arrow-gap">›</div>

              <div className="lifecycle-node-card">
                <div className="lifecycle-node-icon cicd">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                  </svg>
                </div>
                <div className="lifecycle-node-name">CI/CD</div>
                <div className="lifecycle-node-sub">Build · Test · Scan</div>
              </div>

              <div className="lifecycle-arrow-gap">›</div>

              <div className="lifecycle-node-card">
                <div className="lifecycle-node-icon deploy">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ffb547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                  </svg>
                </div>
                <div className="lifecycle-node-name">Deployment</div>
                <div className="lifecycle-node-sub">Cloud + On-Prem</div>
              </div>

              <div className="lifecycle-arrow-gap">›</div>

              <div className="lifecycle-node-card">
                <div className="lifecycle-node-icon agent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#38d27a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="lifecycle-node-name">CyfroAgent</div>
                <div className="lifecycle-node-sub">Runtime guard</div>
              </div>

              <div className="lifecycle-arrow-gap">›</div>

              <div className="lifecycle-node-card">
                <div className="lifecycle-node-icon protect">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <div className="lifecycle-node-name">Continuous</div>
                <div className="lifecycle-node-sub">Protect · Respond</div>
              </div>
            </div>

            {/* Value propositions */}
            <div className="lifecycle-value-props">
              <div className="value-prop-chip panel-rise" style={{ '--delay': '1000ms' }}>
                <div className="value-prop-dot cyan" />
                <div className="value-prop-text">
                  <strong>Shift Left</strong>
                  <span>Fix vulnerabilities during coding — before they ever reach git</span>
                </div>
              </div>

              <div className="value-prop-chip green panel-rise" style={{ '--delay': '1200ms' }}>
                <div className="value-prop-dot green" />
                <div className="value-prop-text">
                  <strong>Shift Right</strong>
                  <span>Detect, respond, and remediate threats in runtime automatically</span>
                </div>
              </div>

              <div className="value-prop-chip panel-rise" style={{ '--delay': '1400ms' }}>
                <div className="value-prop-dot cyan" />
                <div className="value-prop-text">
                  <strong>AI-Powered</strong>
                  <span>Intelligent prioritisation and autonomous response across the lifecycle</span>
                </div>
              </div>
            </div>

            {/* Final message */}
            <div className="final-message-box reveal-up" style={{ '--delay': '2000ms' }}>
              <p>
                <strong>CyfroSec enables NexaBank</strong> to build, deploy, and operate secure applications
                by combining real-time AI code analysis (<strong>CyfroCode</strong>) with continuous
                runtime protection (<strong>CyfroAgent</strong>) — from the first commit to verified
                production posture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

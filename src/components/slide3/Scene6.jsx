export default function Scene6({ state, riskScoreRef }) {
  return (
    <section
      id="scene-6"
      className={`scene scene-respond ${state}`}
      aria-label="Autonomous Response"
    >
      <div className="scene-core">
        <div className="scene-grid" />
        <div className="scene-shell">
          <div className="scene-respond-layout">
            <div className="scene-label reveal-up" style={{ '--delay': '100ms' }}>
              Autonomous Response
            </div>

            <div className="respond-columns">
              {/* Left: title + action recommendations */}
              <div className="respond-left">
                <div className="scene-title respond-title reveal-up" style={{ '--delay': '200ms' }}>
                  <h2>CyfroAgent responds and neutralises the threat</h2>
                  <p>
                    CyfroAgent intelligently recommends an upgrade, provides patch instructions,
                    and optionally triggers automated remediation — risk score collapses.
                  </p>
                </div>

                <div className="response-action-panel panel-rise" style={{ '--delay': '480ms' }}>
                  <span className="panel-kicker">Remediation Plan</span>
                  <div className="detection-title" style={{ marginTop: '10px' }}>
                    <span>Recommended Actions</span>
                    <span className="status-pill info">AI Priority</span>
                  </div>

                  <div className="rec" style={{ '--rec-delay': '900ms', marginTop: '12px' }}>
                    <div className="rec-header">
                      <span className="chip chip-critical">Critical</span>
                      <span className="rec-id">lib-auth · Authentication Bypass</span>
                    </div>
                    <strong>Upgrade vulnerable package immediately</strong>
                    <div className="rec-action">
                      <span className="rec-action-label">Fix</span>
                      <code>pip install lib-auth==2.1.3</code>
                    </div>
                  </div>

                  <div className="rec" style={{ '--rec-delay': '1200ms' }}>
                    <div className="rec-header">
                      <span className="chip chip-high">High</span>
                      <span className="rec-id">Session invalidation required</span>
                    </div>
                    <strong>Invalidate all active sessions during upgrade window</strong>
                    <div className="rec-action">
                      <span className="rec-action-label">Fix</span>
                      <code>redis-cli FLUSHDB session_store</code>
                    </div>
                  </div>

                  <div className="rec" style={{ '--rec-delay': '1500ms' }}>
                    <div className="rec-header">
                      <span className="chip chip-medium">Medium</span>
                      <span className="rec-id">WAF rule · Block exploit pattern</span>
                    </div>
                    <strong>Deploy WAF rule to block exploit signatures in transit</strong>
                    <div className="rec-action">
                      <span className="rec-action-label">Fix</span>
                      <code>waf-cli apply-rule CVE-2024-38109.conf</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: risk score + secure state */}
              <div className="respond-right">
                <div className="risk-panel panel-rise" style={{ '--delay': '560ms' }}>
                  <span className="panel-kicker">Risk Score</span>

                  <div className="risk-band" style={{ marginTop: '14px' }}>
                    <span>Risk Score</span>
                    <div className="risk-meter" aria-hidden="true">
                      <i />
                    </div>
                    <div
                      className="risk-score"
                      data-risk-score
                      ref={riskScoreRef}
                      style={{ fontSize: '44px' }}
                    >
                      86
                    </div>
                  </div>

                  <div className="split-line" style={{ margin: '12px 0 10px' }} />

                  <div className="upgrade-row">
                    <span className="upgrade-label">Package version</span>
                    <div className="upgrade-badge-group">
                      <span className="upgrade-from">v2.1.0</span>
                      <svg viewBox="0 0 20 12" width="20" height="12" fill="none">
                        <path d="M1 6h16M13 1l5 5-5 5" stroke="rgba(56,210,122,0.7)" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <span className="upgrade-to">v2.1.3</span>
                    </div>
                  </div>

                  <div className="secure-state-banner">
                    <div className="secure-state-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#38d27a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12l2 2 4-4" />
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <strong>System returns to Secure State</strong>
                      <span>Patch applied · Sessions cleared · WAF armed</span>
                    </div>
                  </div>
                </div>

                <div className="respond-metrics panel-rise" style={{ '--delay': '1800ms' }}>
                  <div className="respond-metric">
                    <span>Exploit Attempts Blocked</span>
                    <b style={{ color: '#bff4d3' }}>247</b>
                  </div>
                  <div className="respond-metric">
                    <span>Time to Detect</span>
                    <b>00:01</b>
                  </div>
                  <div className="respond-metric">
                    <span>Time to Remediate</span>
                    <b>08:34</b>
                  </div>
                </div>
              </div>
            </div>

            <p className="caption respond-caption reveal-up" style={{ '--delay': '3200ms' }}>
              CyfroAgent responds intelligently — risk score drops from 86 to 28
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

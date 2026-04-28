export default function Scene1({ state }) {
  return (
    <section
      id="scene-1"
      className={`scene scene-code ${state}`}
      aria-label="Developer Workflow"
    >
      <div className="scene-core">
        <div className="scene-grid" />
        <div className="scene-shell">
          <div className="scene-label reveal-up" style={{ '--delay': '120ms' }}>
            Developer Workflow
          </div>

          <div className="dev-card reveal-up" style={{ '--delay': '180ms' }}>
            <div className="dev-avatar-ring">
              <svg viewBox="0 0 20 20" fill="none" stroke="#10bcd6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="7.5" r="3.5" />
                <path d="M3 18c0-3.87 3.13-7 7-7s7 3.13 7 7" />
              </svg>
            </div>
            <div className="dev-info">
              <span className="dev-name">Alex Chen</span>
              <span className="dev-status">
                <i className="typing-dot" />
                Scripting...
              </span>
            </div>
            <span className="status-pill info">IDE Active</span>
          </div>

          <div className="scene-title reveal-up" style={{ '--delay': '240ms' }}>
            <h2>CyfroCode catches vulnerabilities before they ship</h2>
            <p>
              Security checks run inline with your IDE and CI pipeline, surfacing risks
              as you write and auto-generating compliant patches.
            </p>
          </div>

          <div
            className="editor-panel floating-card panel-rise"
            style={{ '--delay': '420ms' }}
            aria-label="Large code editor mockup"
          >
            <div className="window-bar">
              <span className="dot red" />
              <span className="dot amber" />
              <span className="dot green" />
              <span className="file-pill">auth/session.ts</span>
              <div className="editor-meta">
                <span className="status-pill info">Scanning</span>
              </div>
            </div>
            <div className="code-body">
              <div className="scan-sweep" aria-hidden="true" />
              <div className="code-line">
                <span className="num">14</span>
                <span className="code-text" style={{ '--type-delay': '760ms' }}>
                  <span className="token-blue">export</span>{' '}
                  <span className="token-purple">async function</span>{' '}
                  <span className="token-green">createSession</span>() {'{'}
                </span>
              </div>
              <div className="code-line">
                <span className="num">15</span>
                <span className="code-text" style={{ '--type-delay': '940ms' }}>
                  &nbsp;&nbsp;<span className="token-purple">const</span>{' '}
                  <span className="token-blue">token</span> ={' '}
                  <span className="token-green">signJwt</span>(payload);
                </span>
              </div>
              <div className="code-line vulnerable">
                <span className="num">16</span>
                <span className="code-text" style={{ '--type-delay': '1120ms' }}>
                  &nbsp;&nbsp;<span className="token-purple">return</span>{' '}
                  <span className="token-orange">db.query</span>(
                  <span className="token-gray">
                    "SELECT * FROM users WHERE id = " + input
                  </span>
                  );
                </span>
              </div>
              <div className="code-line">
                <span className="num">17</span>
                <span className="code-text" style={{ '--type-delay': '1300ms' }}>
                  &nbsp;&nbsp;<span className="token-blue">logger</span>.
                  <span className="token-green">info</span>(
                  <span className="token-gray">"session created"</span>);
                </span>
              </div>
              <div className="code-line">
                <span className="num">18</span>
                <span className="code-text" style={{ '--type-delay': '1480ms' }}>{'}'}</span>
              </div>
              <div className="code-line">
                <span className="num">19</span>
                <span className="code-text" style={{ '--type-delay': '1660ms' }} />
              </div>
              <div className="code-line">
                <span className="num">20</span>
                <span className="code-text" style={{ '--type-delay': '1840ms' }}>
                  <span className="token-blue">const</span>{' '}
                  <span className="token-green">safeQuery</span> ={' '}
                  <span className="token-orange">db.query</span>(
                  <span className="token-gray">
                    "SELECT * FROM users WHERE id = ?"
                  </span>
                  , [input]);
                </span>
              </div>
            </div>
          </div>

          <div className="risk-badge">Vulnerable query detected</div>

          <div className="code-right">
            <div
              className="cyfrocode-card panel-rise"
              style={{ '--delay': '2360ms' }}
              aria-label="CyfroCode scan card"
            >
              <span className="panel-kicker">CyfroCode</span>
              <div className="module-title">
                <span className="module-logo">Auto-Remediation</span>
                <span className="status-pill success">Fixed</span>
              </div>
              <div className="scan-copy">
                Auto-remediation generated for unsafe database access. Suggested patch
                aligns with secure coding rules and deployment policy.
              </div>
              <div className="progress-track" aria-hidden="true" />
              <div className="remediation-chip">Auto-remediation generated</div>
            </div>

            <div
              className="deploy-card reveal-up"
              style={{ '--delay': '3440ms' }}
              aria-label="Deploy to Server"
            >
              <div className="mini-server" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="deploy-text">
                <strong>Deploy to Server</strong>
                <small>Patch validated · Ready to push</small>
              </div>
              <div className="deploy-pulse" aria-hidden="true" />
            </div>
          </div>

          <div className="code-connector" aria-hidden="true">
            <svg viewBox="0 0 308 188">
              <path d="M0 94 C80 94, 228 94, 308 94" />
              <path className="draw" d="M0 94 C80 94, 228 94, 308 94" />
            </svg>
          </div>

          <p className="caption reveal-up" style={{ '--delay': '4200ms' }}>
            CyfroCode catches vulnerabilities before they ship
          </p>
        </div>
      </div>
    </section>
  )
}

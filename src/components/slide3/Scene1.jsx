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
              as you write and generating suggested patches for manual review.
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
              <span className="file-pill">routes/login.js</span>
              <div className="editor-meta">
                <span className="status-pill info">Scanning</span>
              </div>
            </div>
            <div className="code-body">
              <div className="scan-sweep" aria-hidden="true" />
              <div className="code-line">
                <span className="num">14</span>
                <span className="code-text" style={{ '--type-delay': '760ms' }}>
                  <span className="token-green">app</span>.
                  <span className="token-orange">post</span>(
                  <span className="token-gray">'/login'</span>,{' '}
                  <span className="token-purple">function</span> (req, res) {'{'}
                </span>
              </div>
              <div className="code-line">
                <span className="num">15</span>
                <span className="code-text" style={{ '--type-delay': '940ms' }}>
                  &nbsp;&nbsp;<span className="token-purple">const</span>{' '}
                  <span className="token-blue">username</span> = req.body.username;
                </span>
              </div>
              <div className="code-line vulnerable">
                <span className="num">16</span>
                <span className="code-text" style={{ '--type-delay': '1120ms' }}>
                  &nbsp;&nbsp;<span className="token-orange">sequelize.query</span>(
                  <span className="token-gray">
                    'SELECT * FROM Products WHERE name LIKE '
                  </span>
                  {' '}+ username);
                </span>
              </div>
              <div className="code-line">
                <span className="num">17</span>
                <span className="code-text" style={{ '--type-delay': '1300ms' }}>
                  {'}'})
                </span>
              </div>
              <div className="code-line">
                <span className="num">18</span>
                <span className="code-text" style={{ '--type-delay': '1480ms' }} />
              </div>
              <div className="code-line">
                <span className="num">19</span>
                <span className="code-text" style={{ '--type-delay': '1660ms' }}>
                  <span className="token-orange">sequelize.query</span>(
                </span>
              </div>
              <div className="code-line">
                <span className="num">20</span>
                <span className="code-text" style={{ '--type-delay': '1840ms' }}>
                  &nbsp;&nbsp;<span className="token-gray">'SELECT * FROM Products WHERE name LIKE ?'</span>,
                  {' '}{'{ '}replacements: [username]{' }{}'};
                </span>
              </div>
            </div>
          </div>

          <div className="risk-badge">SQL injection risk · CWE-89</div>

          <div className="code-right">
            <div
              className="cyfrocode-card panel-rise"
              style={{ '--delay': '2360ms' }}
              aria-label="CyfroCode scan card"
            >
              <span className="panel-kicker">CyfroCode</span>
              <div className="module-title">
                <span className="module-logo">Patch Generation</span>
                <span className="status-pill info">Suggested</span>
              </div>
              <div className="scan-copy">
                Patch generated for unsafe Sequelize query. Review and apply the
                suggested fix to use parameterized replacements.
              </div>
              <div className="progress-track" aria-hidden="true" />
              <div className="remediation-chip">Patch ready to apply</div>
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
            CyfroCode catches vulnerabilities and suggests patches for manual review
          </p>
        </div>
      </div>
    </section>
  )
}

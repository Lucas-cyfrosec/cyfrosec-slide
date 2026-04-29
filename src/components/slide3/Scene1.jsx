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
              <span className="dev-name">Anna — Backend Developer</span>
              <span className="dev-status">
                <i className="typing-dot" />
                Building auth service...
              </span>
            </div>
            <span className="status-pill info">NexaBank · IDE Active</span>
          </div>

          <div className="scene-title reveal-up" style={{ '--delay': '240ms' }}>
            <h2>Coding fast to meet the deadline</h2>
            <p>
              Anna is building a new customer authentication service. She moves fast under
              deadline pressure — and unknowingly introduces a critical vulnerability.
            </p>
          </div>

          <div
            className="editor-panel floating-card panel-rise"
            style={{ '--delay': '420ms' }}
            aria-label="Code editor mockup"
          >
            <div className="window-bar">
              <span className="dot red" />
              <span className="dot amber" />
              <span className="dot green" />
              <span className="file-pill">auth/login.py</span>
              <div className="editor-meta">
                <span className="status-pill info">Scripting</span>
              </div>
            </div>
            <div className="code-body">
              <div className="scan-sweep" aria-hidden="true" />
              <div className="code-line">
                <span className="num">10</span>
                <span className="code-text" style={{ '--type-delay': '600ms' }}>
                  <span className="token-purple">def</span>{' '}
                  <span className="token-blue">authenticate_user</span>(user_input):
                </span>
              </div>
              <div className="code-line">
                <span className="num">11</span>
                <span className="code-text" style={{ '--type-delay': '820ms' }}>
                  &nbsp;&nbsp;<span className="token-gray"># connect to DB and run query</span>
                </span>
              </div>
              <div className="code-line vulnerable">
                <span className="num">12</span>
                <span className="code-text" style={{ '--type-delay': '1040ms' }}>
                  &nbsp;&nbsp;<span className="token-blue">query</span> ={' '}
                  <span className="token-gray">"SELECT * FROM users WHERE email = '"</span>
                  {' '}+{' '}
                  <span className="token-orange">user_input</span>
                  {' '}+{' '}
                  <span className="token-gray">"'"</span>
                </span>
              </div>
              <div className="code-line">
                <span className="num">13</span>
                <span className="code-text" style={{ '--type-delay': '1260ms' }}>
                  &nbsp;&nbsp;cursor.<span className="token-orange">execute</span>(query)
                </span>
              </div>
              <div className="code-line">
                <span className="num">14</span>
                <span className="code-text" style={{ '--type-delay': '1480ms' }}>
                  &nbsp;&nbsp;<span className="token-purple">return</span>{' '}
                  cursor.<span className="token-orange">fetchone</span>()
                </span>
              </div>
            </div>
          </div>

          <div className="risk-badge">SQL Injection risk · CWE-89</div>

          <div className="code-right">
            <div
              className="cyfrocode-card panel-rise"
              style={{ '--delay': '2400ms' }}
              aria-label="Vulnerability context"
            >
              <span className="panel-kicker">Risk Summary</span>
              <div className="module-title">
                <span className="module-logo">Unprotected Query</span>
                <span className="status-pill error">Critical</span>
              </div>
              <div className="scan-copy">
                String concatenation directly into SQL allows any attacker-controlled
                input to manipulate the query and access the entire users table.
              </div>
              <div className="progress-track" aria-hidden="true" />
              <div className="remediation-chip" style={{ background: 'rgba(255,90,95,0.12)', borderColor: 'rgba(255,90,95,0.24)', color: '#ffd3d5' }}>
                No input validation · No parameterization
              </div>
            </div>

            <div
              className="deploy-card reveal-up"
              style={{ '--delay': '3200ms' }}
              aria-label="Deadline pressure indicator"
            >
              <div className="mini-server" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="deploy-text">
                <strong>Release Deadline</strong>
                <small>Shipping tonight · Under pressure</small>
              </div>
              <div className="deploy-pulse deploy-pulse-amber" aria-hidden="true" style={{ background: 'rgba(255,181,71,0.12)', borderColor: 'rgba(255,181,71,0.28)' }} />
            </div>
          </div>

          <p className="caption reveal-up" style={{ '--delay': '4000ms' }}>
            Anna unknowingly ships a SQL Injection vulnerability into NexaBank's auth service
          </p>
        </div>
      </div>
    </section>
  )
}

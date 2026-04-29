export default function Scene2({ state }) {
  return (
    <section
      id="scene-2"
      className={`scene scene-cyfrocode ${state}`}
      aria-label="CyfroCode Shift Left Security"
    >
      <div className="scene-core">
        <div className="scene-grid" />
        <div className="scene-shell">
          <div className="s2-layout">
            <div className="scene-label reveal-up" style={{ '--delay': '100ms' }}>
              Shift Left Security
            </div>

            <div className="s2-columns">
              {/* Left: title + detection panel */}
              <div className="s2-left">
                <div className="scene-title s2-title reveal-up" style={{ '--delay': '200ms' }}>
                  <h2>CyfroCode catches the bug before it ships</h2>
                  <p>
                    As Anna types, the AI security assistant inside her IDE analyses the
                    code instantly and generates a safe, parameterized fix.
                  </p>
                </div>

                <div className="detection-panel panel-rise" style={{ '--delay': '480ms' }}>
                  <span className="panel-kicker">CyfroCode · AI Analysis</span>
                  <div className="detection-title">
                    <span>3 Issues Detected</span>
                    <span className="status-pill error">Critical</span>
                  </div>

                  <div className="issue-list">
                    <div className="issue-item" style={{ '--item-delay': '880ms' }}>
                      <span className="issue-icon">!</span>
                      Unsafe string concatenation in SQL query
                    </div>
                    <div className="issue-item" style={{ '--item-delay': '1060ms' }}>
                      <span className="issue-icon">!</span>
                      Missing input validation on user_input
                    </div>
                    <div className="issue-item" style={{ '--item-delay': '1240ms' }}>
                      <span className="issue-icon">!</span>
                      SQL Injection risk detected — CWE-89
                    </div>
                  </div>

                  <div className="alert-quote">
                    "Potential SQL Injection vulnerability detected. Recommended fix:
                    use parameterized queries."
                  </div>

                  <div className="apply-fix-btn">
                    ✓ Apply Fix
                  </div>
                  <div className="remediation-chip" style={{ marginTop: '10px' }}>Fix Applied · Commit Safe</div>
                </div>
              </div>

              {/* Right: before / after code */}
              <div className="s2-right">
                <div className="code-comparison reveal-up" style={{ '--delay': '360ms' }}>
                  <div className="code-block before-block panel-rise" style={{ '--delay': '600ms' }}>
                    <div className="code-block-label">Before — Vulnerable</div>
                    <div className="code-block-body">
                      <div style={{ color: '#8ea3b8' }}>
                        query = <span style={{ color: '#ffd3d5' }}>"SELECT * FROM users</span>
                      </div>
                      <div style={{ color: '#8ea3b8', paddingLeft: '8px' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ffd3d5' }}>WHERE email = '"</span>
                      </div>
                      <div style={{ color: '#8ea3b8' }}>
                        &nbsp;&nbsp;+ <span style={{ color: '#ffa07a' }}>user_input</span> + <span style={{ color: '#ffd3d5' }}>"'"</span>
                      </div>
                      <div style={{ marginTop: '8px', color: '#8ea3b8' }}>
                        cursor.<span style={{ color: '#ffd19a' }}>execute</span>(query)
                      </div>
                    </div>
                  </div>

                  <div className="code-block after-block panel-rise" style={{ '--delay': '1600ms' }}>
                    <div className="code-block-label">After — Secure</div>
                    <div className="code-block-body">
                      <div style={{ color: '#8ea3b8' }}>
                        query = <span style={{ color: '#bff4d3' }}>"SELECT * FROM users</span>
                      </div>
                      <div style={{ color: '#8ea3b8', paddingLeft: '8px' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#bff4d3' }}>WHERE email = %s"</span>
                      </div>
                      <div style={{ marginTop: '8px', color: '#8ea3b8' }}>
                        cursor.<span style={{ color: '#86e6a9' }}>execute</span>(
                      </div>
                      <div style={{ color: '#8ea3b8', paddingLeft: '8px' }}>
                        &nbsp;&nbsp;query,{' '}
                        <span style={{ color: '#bff4d3' }}>(user_input,)</span>
                      </div>
                      <div style={{ color: '#8ea3b8' }}>)</div>
                    </div>
                  </div>
                </div>

                <div className="deploy-card reveal-up" style={{ '--delay': '2600ms', position: 'static', width: '100%', height: '80px', marginTop: '14px' }}>
                  <div className="mini-server" aria-hidden="true">
                    <span /><span /><span />
                  </div>
                  <div className="deploy-text">
                    <strong>Commit to Git</strong>
                    <small>Vulnerability eliminated · Safe to push</small>
                  </div>
                  <div className="deploy-pulse" aria-hidden="true" />
                </div>
              </div>
            </div>

            <p className="caption s2-caption reveal-up" style={{ '--delay': '3400ms' }}>
              CyfroCode eliminates the vulnerability before it ever reaches the repository
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

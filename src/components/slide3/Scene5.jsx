export default function Scene5({ state }) {
  return (
    <section
      id="scene-5"
      className={`scene scene-threat ${state}`}
      aria-label="Threat Detection"
    >
      <div className="scene-core">
        <div className="scene-grid" />
        <div className="scene-shell">
          <div className="scene-threat-layout">
            <div className="scene-label reveal-up" style={{ '--delay': '100ms' }}>
              Threat Detected
            </div>

            {/* Top alert bar */}
            <div className="threat-alert-bar reveal-up" style={{ '--delay': '240ms' }}>
              <div className="threat-alert-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#b52030" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="threat-alert-text">
                <strong>Critical Vulnerability Detected — Exploit Observed in the Wild</strong>
                <span>CyfroAgent triggered · lib-auth v2.1.0 · NexaBank production environment</span>
              </div>
              <span className="status-pill error" style={{ marginLeft: 'auto', flexShrink: 0 }}>CRITICAL</span>
            </div>

            <div className="threat-columns">
              {/* Left: CVE detail card */}
              <div className="threat-left">
                <div className="scene-title threat-title reveal-up" style={{ '--delay': '340ms' }}>
                  <h2>A critical CVE emerges in a dependency</h2>
                  <p>
                    Days after deployment, a zero-day is published affecting a library used
                    by NexaBank. CyfroAgent detects active exploit attempts immediately.
                  </p>
                </div>

                <div className="cve-detail-card panel-rise" style={{ '--delay': '580ms' }}>
                  <span className="panel-kicker">Vulnerability Intelligence</span>
                  <div className="detection-title" style={{ marginTop: '10px' }}>
                    <span>lib-auth v2.1.0</span>
                    <span className="chip chip-critical">Critical</span>
                  </div>

                  <div className="cve-row">
                    <span>CVE ID</span>
                    <b style={{ fontFamily: 'var(--mono)', fontSize: '12px' }}>CVE-2024-38109</b>
                  </div>
                  <div className="cve-row">
                    <span>Type</span>
                    <b className="danger">Authentication Bypass</b>
                  </div>
                  <div className="cve-row">
                    <span>CVSS Score</span>
                    <b className="danger">9.8 / 10</b>
                  </div>
                  <div className="cve-row">
                    <span>Affected Package</span>
                    <b style={{ fontFamily: 'var(--mono)', fontSize: '12px' }}>lib-auth == 2.1.0</b>
                  </div>
                  <div className="cve-row">
                    <span>Fix Available</span>
                    <b style={{ color: '#bff4d3', fontFamily: 'var(--mono)', fontSize: '12px' }}>lib-auth &gt;= 2.1.3</b>
                  </div>
                  <div className="cve-row">
                    <span>Exploit Status</span>
                    <b className="danger">Active · PoC Public</b>
                  </div>
                </div>
              </div>

              {/* Right: live log stream */}
              <div className="threat-right">
                <div className="log-stream-card panel-rise" style={{ '--delay': '800ms' }}>
                  <span className="panel-kicker" style={{ marginBottom: '12px', display: 'block' }}>CyfroAgent · Live Log Feed</span>

                  <div className="log-entry" style={{ '--log-delay': '1100ms' }}>
                    <span className="log-time">14:22:03</span>
                    <span className="log-level-warn">WARN</span>
                    <span className="log-msg">CVE feed update received from NVD</span>
                  </div>
                  <div className="log-entry" style={{ '--log-delay': '1400ms' }}>
                    <span className="log-time">14:22:04</span>
                    <span className="log-level-error">CRIT</span>
                    <span className="log-msg">Vulnerable package matched: <span className="log-highlight">lib-auth v2.1.0</span></span>
                  </div>
                  <div className="log-entry" style={{ '--log-delay': '1700ms' }}>
                    <span className="log-time">14:22:05</span>
                    <span className="log-level-error">CRIT</span>
                    <span className="log-msg">CVE-2024-38109 confirmed in production</span>
                  </div>
                  <div className="log-entry" style={{ '--log-delay': '2000ms' }}>
                    <span className="log-time">14:22:08</span>
                    <span className="log-level-error">ALERT</span>
                    <span className="log-msg">Exploit attempt detected — <span className="log-highlight">src: 185.220.101.47</span></span>
                  </div>
                  <div className="log-entry" style={{ '--log-delay': '2300ms' }}>
                    <span className="log-time">14:22:09</span>
                    <span className="log-level-error">ALERT</span>
                    <span className="log-msg">Exploit attempt detected — <span className="log-highlight">src: 91.108.4.182</span></span>
                  </div>
                  <div className="log-entry" style={{ '--log-delay': '2600ms' }}>
                    <span className="log-time">14:22:10</span>
                    <span className="log-level-warn">WARN</span>
                    <span className="log-msg">Anomalous auth pattern in session logs</span>
                  </div>
                  <div className="log-entry" style={{ '--log-delay': '2900ms' }}>
                    <span className="log-time">14:22:11</span>
                    <span className="log-level-error">CRIT</span>
                    <span className="log-msg">Initiating autonomous response protocol...</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="caption threat-caption reveal-up" style={{ '--delay': '3600ms' }}>
              CyfroAgent detects the CVE match and active exploit attempts in real time
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

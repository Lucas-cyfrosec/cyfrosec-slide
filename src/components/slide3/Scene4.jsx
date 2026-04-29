export default function Scene4({ state, counterRefs }) {
  return (
    <section
      id="scene-4"
      className={`scene scene-runtime ${state}`}
      aria-label="CyfroAgent Runtime Security"
    >
      <div className="scene-core">
        <div className="scene-grid" />
        <div className="scene-shell">
          <div className="scene-runtime-layout">
            <div className="scene-label reveal-up" style={{ '--delay': '100ms' }}>
              Runtime Security
            </div>

            <div className="runtime-columns">
              {/* Left: title + monitoring domains */}
              <div className="runtime-left">
                <div className="runtime-title reveal-up" style={{ '--delay': '200ms' }}>
                  <h2>CyfroAgent scans the live environment</h2>
                  <p>
                    After deployment, CyfroAgent begins continuous agent-based monitoring
                    across three domains — system, network, and application layers.
                  </p>
                </div>

                <div className="monitor-domains">
                  <div className="monitor-domain-card panel-rise" style={{ '--delay': '560ms' }}>
                    <div className="monitor-domain-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <div className="monitor-domain-name">System</div>
                    <div className="monitor-domain-sub">OS · Kernel<br />Configs · Processes</div>
                    <div className="monitor-scanline" />
                  </div>

                  <div className="monitor-domain-card panel-rise" style={{ '--delay': '740ms' }}>
                    <div className="monitor-domain-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div className="monitor-domain-name">Network</div>
                    <div className="monitor-domain-sub">Ports · Traffic<br />Anomalies · Flows</div>
                    <div className="monitor-scanline" />
                  </div>

                  <div className="monitor-domain-card panel-rise" style={{ '--delay': '920ms' }}>
                    <div className="monitor-domain-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#10bcd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div className="monitor-domain-name">Application</div>
                    <div className="monitor-domain-sub">Packages · CVEs<br />Dependencies · APIs</div>
                    <div className="monitor-scanline" />
                  </div>
                </div>
              </div>

              {/* Right: CyfroAgent status + live metrics */}
              <div className="runtime-right">
                <div className="agent-status-card panel-rise" style={{ '--delay': '440ms' }}>
                  <div className="agent-status-header">
                    <div className="agent-status-logo">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <div className="agent-status-name">CyfroAgent</div>
                      <span className="status-pill info" style={{ height: '22px', fontSize: '10px' }}>Monitoring Active</span>
                    </div>
                  </div>

                  <div className="agent-metric">
                    <span>Assets Monitored</span>
                    <b data-counter="147" ref={(el) => (counterRefs.current[0] = el)}>0</b>
                  </div>
                  <div className="agent-metric">
                    <span>Events / sec</span>
                    <b data-counter="2840" ref={(el) => (counterRefs.current[1] = el)}>0</b>
                  </div>
                  <div className="agent-metric">
                    <span>Coverage</span>
                    <b data-counter="100" ref={(el) => (counterRefs.current[2] = el)}>0</b>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted-dark)', marginLeft: '2px' }}>%</span>
                  </div>
                </div>

                <div className="agent-scan-card panel-rise" style={{ '--delay': '1100ms' }}>
                  <span className="panel-kicker">Live Scan Feed</span>
                  <div className="scan-feed-line" style={{ '--feed-delay': '1400ms' }}>
                    <span className="feed-time">00:01</span>
                    <span className="feed-msg">System baseline established</span>
                    <span className="status-pill success" style={{ height: '20px', fontSize: '10px', marginLeft: 'auto' }}>OK</span>
                  </div>
                  <div className="scan-feed-line" style={{ '--feed-delay': '1700ms' }}>
                    <span className="feed-time">00:03</span>
                    <span className="feed-msg">Network topology mapped · 18 ports</span>
                    <span className="status-pill success" style={{ height: '20px', fontSize: '10px', marginLeft: 'auto' }}>OK</span>
                  </div>
                  <div className="scan-feed-line" style={{ '--feed-delay': '2000ms' }}>
                    <span className="feed-time">00:07</span>
                    <span className="feed-msg">Dependency inventory complete · 312 packages</span>
                    <span className="status-pill success" style={{ height: '20px', fontSize: '10px', marginLeft: 'auto' }}>OK</span>
                  </div>
                  <div className="scan-feed-line" style={{ '--feed-delay': '2300ms' }}>
                    <span className="feed-time">00:12</span>
                    <span className="feed-msg">Continuous monitoring armed</span>
                    <span className="status-pill info" style={{ height: '20px', fontSize: '10px', marginLeft: 'auto' }}>Active</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="caption runtime-caption reveal-up" style={{ '--delay': '3000ms' }}>
              CyfroAgent continuously monitors every layer of NexaBank's live environment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import agentImg from './img/agent.webp'

export default function Scene2({ state, counterRefs }) {
  return (
    <section
      id="scene-2"
      className={`scene scene-infra ${state}`}
      aria-label="Infrastructure Topology"
    >
      <div className="scene-core">
        <div className="scene-grid" />
        <div className="scene-shell">
          <div className="scene-label reveal-up" style={{ '--delay': '140ms' }}>
            Infrastructure Topology
          </div>

          <div className="scene-title reveal-up" style={{ '--delay': '260ms' }}>
            <h2>CyfroAgent maps and monitors every live asset</h2>
            <p>
              Continuous agent-based discovery builds a real-time topology of your
              cloud environment, tagging risk posture across all nodes.
            </p>
          </div>

          <div className="telemetry-pill">Telemetry Live</div>

          <div
            className="topology-panel floating-card scale-in"
            style={{ '--delay': '420ms' }}
            aria-label="CyfroAgent Live Scan"
          >
            <div className="infra-head">
              <div className="infra-title">
                <strong>CyfroAgent Live Scan</strong>
                <span>Production environment · us-east-1</span>
              </div>
              <span className="status-pill info live-chip">Scanning</span>
            </div>
            <div className="infra-body">
              <div className="topology">
                <svg>
                  <line className="topology-line" x1="134" y1="90" x2="422" y2="72" />
                  <line className="topology-line" x1="422" y1="72" x2="684" y2="146" />
                  <line className="topology-line hot" x1="308" y1="202" x2="592" y2="224" />
                  <line className="topology-line" x1="134" y1="90" x2="308" y2="202" />
                  <line className="topology-line hot" x1="422" y1="72" x2="592" y2="224" />
                  <line className="scan-beam" x1="134" y1="90" x2="684" y2="146" />
                </svg>
                <div className="node node-api" style={{ '--node-delay': '420ms' }}>
                  <div className="node-core" />
                  <div className="node-line" />
                  <div className="node-line short" />
                  <div className="node-label">Network Scan</div>
                </div>
                <div className="node node-iam" style={{ '--node-delay': '590ms' }}>
                  <div className="node-core" />
                  <div className="node-line" />
                  <div className="node-line short" />
                  <div className="node-label">IAM</div>
                </div>
                <div className="node node-db" style={{ '--node-delay': '760ms' }}>
                  <div className="node-core" />
                  <div className="node-line" />
                  <div className="node-line short" />
                  <div className="node-label">DB</div>
                </div>
                <div className="node node-app" style={{ '--node-delay': '920ms' }}>
                  <div className="node-core" />
                  <div className="node-line" />
                  <div className="node-line short" />
                  <div className="node-label">App</div>
                </div>
                <div className="node node-gw" style={{ '--node-delay': '1060ms' }}>
                  <div className="node-core" />
                  <div className="node-line" />
                  <div className="node-line short" />
                  <div className="node-label">Gateway</div>
                </div>
                <div className="protected-core">
                  <span />
                  <div className="core-lock" aria-label="CyfroAgent">
                    <img src={agentImg} alt="CyfroAgent" className="core-agent-img" />
                  </div>
                </div>
              </div>

              <div className="infra-findings panel-rise" style={{ '--delay': '1320ms' }} aria-label="Live vulnerability findings">
                <div className="vuln-header">
                  <span className="panel-kicker">Live Findings</span>
                  <span className="status-pill error">3 Critical</span>
                </div>
                <div className="vuln-item" style={{ '--item-delay': '1520ms' }}>
                  <span className="chip chip-critical">Critical</span>
                  <div className="vuln-detail">
                    <strong>SQL Injection</strong>
                    <code>auth/session.ts · line 16</code>
                  </div>
                </div>
                <div className="vuln-item" style={{ '--item-delay': '1720ms' }}>
                  <span className="chip chip-high">High</span>
                  <div className="vuln-detail">
                    <strong>Exposed Admin Port</strong>
                    <code>gateway:8080 · no auth</code>
                  </div>
                </div>
                <div className="vuln-item" style={{ '--item-delay': '1920ms' }}>
                  <span className="chip chip-medium">Medium</span>
                  <div className="vuln-detail">
                    <strong>Weak TLS 1.1</strong>
                    <code>api-server · downgrade risk</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="metrics-card panel-rise"
            style={{ '--delay': '1640ms' }}
            aria-label="Infrastructure metrics"
          >
            <span className="panel-kicker">Live Findings</span>
            <div className="metric-row">
              <span>Assets Discovered</span>
              <b data-counter="42" ref={(el) => (counterRefs.current[3] = el)}>0</b>
            </div>
            <div className="metric-row critical">
              <span>Critical Findings</span>
              <b data-counter="3" ref={(el) => (counterRefs.current[4] = el)}>0</b>
            </div>
            <div className="metric-row">
              <span>Open Ports</span>
              <b data-counter="18" ref={(el) => (counterRefs.current[5] = el)}>0</b>
            </div>
          </div>

          <p className="caption reveal-up" style={{ '--delay': '2060ms' }}>
            CyfroAgent continuously scans live infrastructure
          </p>
        </div>
      </div>
    </section>
  )
}

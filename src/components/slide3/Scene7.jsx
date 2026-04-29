import cyfroCodLogo from './img/cyfro-code.png'
import insightLogo from './img/insight.png'
import agentLogo from './img/agent.webp'

const NODES = [
  {
    id: 'dev',
    name: 'Developer',
    sub: 'Anna writes the code',
    tag: 'Start',
    tagGreen: false,
    cls: 'node-dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: 'code',
    name: 'CyfroCode',
    sub: 'AI detects & fixes the bug',
    tag: 'Shift Left',
    tagGreen: true,
    cls: 'node-code',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'cicd',
    name: 'CI/CD',
    sub: 'Build, test & scan',
    tag: 'Pipeline',
    tagGreen: false,
    cls: 'node-cicd',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
  {
    id: 'deploy',
    name: 'Deployment',
    sub: 'Cloud & on-prem live',
    tag: 'Live',
    tagGreen: false,
    cls: 'node-deploy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    id: 'agent',
    name: 'CyfroAgent',
    sub: 'Runtime monitoring',
    tag: 'Shift Right',
    tagGreen: true,
    cls: 'node-agent',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 'protect',
    name: 'Continuous',
    sub: 'Detect, respond & protect',
    tag: 'Always On',
    tagGreen: true,
    cls: 'node-protect',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
]

const ARROW_SVG = (
  <svg viewBox="0 0 32 12" fill="none">
    <path d="M0 6h28M22 1l7 5-7 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

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

            <div className="scene-label reveal-up" style={{ '--delay': '80ms' }}>
              Full Lifecycle Protection
            </div>
            <div className="lifecycle-title reveal-up" style={{ '--delay': '160ms' }}>
              <h2>End-to-end security — from first commit to runtime</h2>
            </div>

            <div className="lc-pipeline-wrap">
              <div className="lc-track" aria-hidden="true">
                <div className="lc-track-fill" />
                <div className="lc-track-dot" />
              </div>

              <div className="lc-nodes">
                {NODES.map((node, i) => (
                  <div
                    key={node.id}
                    className="lc-node-slot reveal-up"
                    style={{ '--delay': `${300 + i * 110}ms` }}
                  >
                    {i > 0 && (
                      <div className="lc-arrow" aria-hidden="true" style={{ color: 'rgba(255,255,255,0.18)' }}>
                        {ARROW_SVG}
                      </div>
                    )}
                    <div className={`lc-node ${node.cls}`}>
                      <div className="lc-node-icon">{node.icon}</div>
                      <div className="lc-node-name">{node.name}</div>
                      <div className="lc-node-sub">{node.sub}</div>
                      <div className={`lc-node-tag${node.tagGreen ? ' tag-green' : ''}`}>{node.tag}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lc-bottom">
              <div className="lc-value-props">
                <div className="lc-vp reveal-up" style={{ '--delay': '1200ms' }}>
                  <img src={cyfroCodLogo} alt="CyfroCode" className="lc-vp-logo" />
                  <div>
                    <strong>CyfroCode <span className="lc-vp-tag">Shift Left</span></strong>
                    <span>Fix vulnerabilities during coding — before they ever reach git</span>
                  </div>
                </div>
                <div className="lc-vp-divider" aria-hidden="true" />
                <div className="lc-vp reveal-up" style={{ '--delay': '1400ms' }}>
                  <img src={insightLogo} alt="CyfroAI Insights" className="lc-vp-logo" />
                  <div>
                    <strong>CyfroAI Insights</strong>
                    <span>Intelligent risk analysis, prioritisation &amp; autonomous response</span>
                  </div>
                </div>
                <div className="lc-vp-divider" aria-hidden="true" />
                <div className="lc-vp reveal-up" style={{ '--delay': '1600ms' }}>
                  <img src={agentLogo} alt="CyfroAssistant" className="lc-vp-logo" />
                  <div>
                    <strong>CyfroAssistant <span className="lc-vp-tag lc-vp-tag-green">Shift Right</span></strong>
                    <span>Detect, respond, and remediate threats in runtime automatically</span>
                  </div>
                </div>
              </div>

              <div className="final-message-box reveal-up" style={{ '--delay': '1900ms' }}>
                <p>
                  <strong>CyfroSec enables NexaBank</strong> to build, deploy, and operate secure applications
                  by combining real-time AI code analysis (<strong>CyfroCode</strong>), intelligent risk insights
                  (<strong>CyfroAI Insights</strong>), and autonomous runtime protection (<strong>CyfroAssistant</strong>)
                  — from the first commit to verified production posture.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

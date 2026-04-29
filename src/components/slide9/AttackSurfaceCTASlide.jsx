import dashboardImg from './img/data.png'
import QRCode from '../ui/qr-code'
import { ExternalLink, Globe } from 'lucide-react'

const dashboardImage = dashboardImg
const qrImage = null
const demoUrl = 'https://www.cyfrosec.com/book-demo'

function DashboardPlaceholder() {
  return (
    <div className="cta-dashboard-skeleton" aria-hidden="true">
      <div className="cta-skeleton-top">
        <span />
        <span />
        <span />
      </div>
      <div className="cta-skeleton-main">
        <div className="cta-skeleton-feed" />
        <div className="cta-skeleton-panel" />
      </div>
      <div className="cta-skeleton-bottom" />
    </div>
  )
}

export default function AttackSurfaceCTASlide() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <h1 id="cta-heading" className="cta-heading">
        Ready to discover your attack surface?
      </h1>

      <div className="cta-layout">
        <div className="cta-dashboard-wrap">
          <div className="cta-dashboard-glow" aria-hidden="true" />
          <div className="cta-dashboard">
            <div className="cta-dashboard-shine" aria-hidden="true" />
            {dashboardImage ? (
              <img src={dashboardImage} alt="CyfroSec dashboard preview" />
            ) : (
              <DashboardPlaceholder />
            )}
          </div>
        </div>

        <div className="cta-side">
          <div className="cta-qr-header">
            <Globe className="cta-qr-header-icon" aria-hidden="true" />
            <h2>Share Website</h2>
            <p>Scan to visit our Book-Demo</p>
          </div>

          <div className="cta-qr-wrap">
            <div className="cta-qr-glow" aria-hidden="true" />
            <div className="cta-qr-scan" aria-hidden="true" />
            <div className={`cta-qr ${qrImage ? '' : 'cta-qr-generated'}`}>
              {qrImage ? (
                <img src={qrImage} alt="CyfroSec demo booking QR code" />
              ) : (
                <QRCode value={demoUrl} size={220} className="cta-qr-code" />
              )}
            </div>
            <span className="cta-particle cta-particle-1" aria-hidden="true" />
            <span className="cta-particle cta-particle-2" aria-hidden="true" />
            <span className="cta-particle cta-particle-3" aria-hidden="true" />
          </div>

          <div className="cta-link-block">
            <a className="cta-link" href={demoUrl}>
              <ExternalLink className="cta-link-icon" aria-hidden="true" />
              <span>{demoUrl}</span>
            </a>
            <p className="cta-link-help">Point your camera at the QR code to open the link</p>
          </div>
        </div>
      </div>
    </section>
  )
}

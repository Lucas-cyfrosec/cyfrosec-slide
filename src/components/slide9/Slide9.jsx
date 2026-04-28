import AttackSurfaceCTASlide from './AttackSurfaceCTASlide'

export default function Slide9() {
  return (
    <main
      id="slide"
      className="slide slide9 is-ready"
      aria-label="Ready to discover your attack surface?"
    >
      <div className="cta-top-bar" aria-hidden="true" />

      <div className="cta-body">
        <AttackSurfaceCTASlide />
      </div>

      <footer className="cta-footer" aria-label="Slide footer">
        <span className="cta-footer-item cta-footer-left">msakhai@cyfrosec.com</span>
        <span className="cta-footer-item cta-footer-center">www.cyfrosec.com</span>
        <span className="cta-footer-item cta-footer-right">9</span>
      </footer>

      <div className="cta-bottom-bar" aria-hidden="true" />
    </main>
  )
}

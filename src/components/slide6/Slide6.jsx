import CompetitiveLandscapeComparison from './CompetitiveLandscapeComparison'

export default function Slide6() {
  return (
    <main
      id="slide"
      className="slide slide6 is-ready"
      aria-label="Competitive Landscape Comparison"
    >
      <div className="clc-top-bar" aria-hidden="true" />

      <div className="clc-body">
        <CompetitiveLandscapeComparison />
      </div>

      <footer className="clc-footer" aria-label="Slide footer">
        <span className="clc-footer-item clc-footer-left">msakhai@cyfrosec.com</span>
        <span className="clc-footer-item clc-footer-center">www.cyfrosec.com</span>
        <span className="clc-footer-item clc-footer-right">6</span>
      </footer>

      <div className="clc-bottom-bar" aria-hidden="true" />
    </main>
  )
}

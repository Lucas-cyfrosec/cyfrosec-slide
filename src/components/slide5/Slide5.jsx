import SolutionValueProposition from './SolutionValueProposition'

export default function Slide5() {
  return (
    <main
      id="slide"
      className="slide slide5 is-ready"
      aria-label="Solution and Value Proposition"
    >
      <div className="svp-top-bar" aria-hidden="true" />

      <div className="svp-body">
        <SolutionValueProposition />
      </div>

      <footer className="svp-footer" aria-label="Slide footer">
        <span className="svp-footer-item svp-footer-left">msakhai@cyfrosec.com</span>
        <span className="svp-footer-item svp-footer-center">www.cyfrosec.com</span>
        <span className="svp-footer-item svp-footer-right">5</span>
      </footer>

      <div className="svp-bottom-bar" aria-hidden="true" />
    </main>
  )
}

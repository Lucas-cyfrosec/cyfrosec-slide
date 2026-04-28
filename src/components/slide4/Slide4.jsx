import ProblemWeAreFixing from './ProblemWeAreFixing'

export default function Slide4() {
  return (
    <main id="slide" className="slide slide4 is-ready" aria-label="The Problem We Are Fixing">
      <div className="problem-top-bar" aria-hidden="true" />

      <div className="problem-body">
        <ProblemWeAreFixing />
      </div>

      <footer className="problem-footer" aria-label="Slide footer">
        <span className="problem-footer-item problem-footer-left">msakhai@cyfrosec.com</span>
        <span className="problem-footer-item problem-footer-center">www.cyfrosec.com</span>
        <span className="problem-footer-item problem-footer-right">4</span>
      </footer>

      <div className="problem-footer-bar" aria-hidden="true" />
    </main>
  )
}

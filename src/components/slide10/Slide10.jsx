import ThankYouSlide from './ThankYouSlide'

export default function Slide10() {
  return (
    <main id="slide" className="slide slide12 is-ready" aria-label="Thank You">
      <div className="thankyou-top-bar" aria-hidden="true" />

      <div className="thankyou-body">
        <ThankYouSlide />
      </div>

      <footer className="thankyou-footer" aria-label="Slide footer">
        <span className="thankyou-footer-item thankyou-footer-left">msakhai@cyfrosec.com</span>
        <span className="thankyou-footer-item thankyou-footer-center">www.cyfrosec.com</span>
        <span className="thankyou-footer-item thankyou-footer-right">10</span>
      </footer>

      <div className="thankyou-footer-bar" aria-hidden="true" />
    </main>
  )
}

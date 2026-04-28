import StarterFreeTierSlide from './StarterFreeTierSlide'

export default function Slide10() {
  return (
    <main id="slide" className="slide slide10 is-ready" aria-label="Starter Free Tier">
      <div className="sft-top-bar" aria-hidden="true" />

      <div className="sft-body">
        <StarterFreeTierSlide />
      </div>

      <footer className="sft-footer" aria-label="Slide footer">
        <span className="sft-footer-item sft-footer-left">msakhai@cyfrosec.com</span>
        <span className="sft-footer-item sft-footer-center">www.cyfrosec.com</span>
        <span className="sft-footer-item sft-footer-right">10</span>
      </footer>

      <div className="sft-bottom-bar" aria-hidden="true" />
    </main>
  )
}

import WhatWeOffer from './WhatWeOffer'

export default function Slide2() {
  return (
    <main id="slide" className="slide slide2 is-ready" aria-label="What We Offer">
      <div className="s2-top-bar" aria-hidden="true" />

      <div className="s2-body">
        <WhatWeOffer />
      </div>

      <footer className="s2-footer" aria-label="Slide footer">
        <span className="s2-footer-item s2-footer-left">msakhai@cyfrosec.com</span>
        <span className="s2-footer-item s2-footer-center">www.cyfrosec.com</span>
        <span className="s2-footer-item s2-footer-right">2</span>
      </footer>

      <div className="s2-bottom-bar" aria-hidden="true" />
    </main>
  )
}

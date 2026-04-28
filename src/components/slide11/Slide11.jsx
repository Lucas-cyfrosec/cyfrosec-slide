import ProFreeTierSlide from './ProFreeTierSlide'

export default function Slide11() {
  return (
    <main id="slide" className="slide slide11 is-ready" aria-label="Pro Free Tier">
      <div className="pft-top-bar" aria-hidden="true" />

      <div className="pft-body">
        <ProFreeTierSlide />
      </div>

      <footer className="pft-footer" aria-label="Slide footer">
        <span className="pft-footer-item pft-footer-left">msakhai@cyfrosec.com</span>
        <span className="pft-footer-item pft-footer-center">www.cyfrosec.com</span>
        <span className="pft-footer-item pft-footer-right">11</span>
      </footer>

      <div className="pft-bottom-bar" aria-hidden="true" />
    </main>
  )
}

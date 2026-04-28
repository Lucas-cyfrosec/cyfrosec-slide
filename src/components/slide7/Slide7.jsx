import AlHayatTelecomEmpowerment from './AlHayatTelecomEmpowerment'

export default function Slide7() {
  return (
    <main
      id="slide"
      className="slide slide7 is-ready"
      aria-label="How CyfroSec Empowers AL-HaYaT Telecom"
    >
      <div className="aht-top-bar" aria-hidden="true" />

      <div className="aht-body">
        <AlHayatTelecomEmpowerment />
      </div>

      <footer className="aht-footer" aria-label="Slide footer">
        <span className="aht-footer-item aht-footer-left">msakhai@cyfrosec.com</span>
        <span className="aht-footer-item aht-footer-center">www.cyfrosec.com</span>
        <span className="aht-footer-item aht-footer-right">7</span>
      </footer>

      <div className="aht-bottom-bar" aria-hidden="true" />
    </main>
  )
}

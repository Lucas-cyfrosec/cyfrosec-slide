import TeamSlide from './TeamSlide'

export default function Slide8() {
  return (
    <main id="slide" className="slide slide8 is-ready" aria-label="Team">
      <div className="team-top-bar" aria-hidden="true" />

      <div className="team-body">
        <TeamSlide />
      </div>

      <footer className="team-footer" aria-label="Slide footer">
        <span className="team-footer-item team-footer-left">msakhai@cyfrosec.com</span>
        <span className="team-footer-item team-footer-center">www.cyfrosec.com</span>
        <span className="team-footer-item team-footer-right">8</span>
      </footer>

      <div className="team-bottom-bar" aria-hidden="true" />
    </main>
  )
}

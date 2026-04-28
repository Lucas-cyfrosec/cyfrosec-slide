import { useState, useEffect } from 'react'
import Slide1 from './components/slide1/Slide1'
import Slide2 from './components/slide2/Slide2'
import Slide3 from './components/slide3/Slide3'
import Slide4 from './components/slide4/Slide4'
import Slide5 from './components/slide5/Slide5'
import Slide6 from './components/slide6/Slide6'
import Slide7 from './components/slide7/Slide7'
import Slide8 from './components/slide8/Slide8'
import Slide9 from './components/slide9/Slide9'
import Slide10 from './components/slide10/Slide10'
import Slide11 from './components/slide11/Slide11'
import Slide12 from './components/slide12/Slide12'

const TOTAL_SLIDES = 12
const BUILT_SLIDES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function fitSlide() {
  const switcherH = 56  // switcher height + gap
  const pad = 24        // breathing room top + bottom
  const scale = Math.min(
    window.innerWidth / 1600,
    (window.innerHeight - switcherH - pad) / 900
  )
  document.documentElement.style.setProperty(
    '--scale',
    Math.max(0.05, Math.min(scale, 1)).toFixed(4)
  )
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(() => {
    fitSlide()
    window.addEventListener('resize', fitSlide, { passive: true })
    return () => window.removeEventListener('resize', fitSlide)
  }, [])

  function renderSlide() {
    if (currentSlide === 1) return <Slide1 />
    if (currentSlide === 2) return <Slide2 />
    if (currentSlide === 3) return <Slide3 />
    if (currentSlide === 4) return <Slide4 />
    if (currentSlide === 5) return <Slide5 />
    if (currentSlide === 6) return <Slide6 />
    if (currentSlide === 7) return <Slide7 />
    if (currentSlide === 8) return <Slide8 />
    if (currentSlide === 9) return <Slide9 />
    if (currentSlide === 10) return <Slide10 />
    if (currentSlide === 11) return <Slide11 />
    if (currentSlide === 12) return <Slide12 />
    return (
      <main id="slide" className="slide is-ready slide-placeholder">
        <div className="placeholder-label">Slide {currentSlide}</div>
      </main>
    )
  }

  return (
    <div className="app-root">
      <div className="scale-shell">
        {renderSlide()}
      </div>

      <nav className="slide-switcher" aria-label="Slide navigation">
        {Array.from({ length: TOTAL_SLIDES }, (_, i) => {
          const n = i + 1
          const isBuilt = BUILT_SLIDES.includes(n)
          const isActive = currentSlide === n
          return (
            <button
              key={n}
              className={[
                'slide-btn',
                isActive ? 'is-active' : '',
                !isBuilt ? 'is-disabled' : '',
              ].filter(Boolean).join(' ')}
              onClick={() => isBuilt && setCurrentSlide(n)}
              disabled={!isBuilt}
              aria-label={`Slide ${n}`}
              aria-current={isActive ? 'true' : undefined}
            >
              {n}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

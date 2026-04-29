import { useState, useEffect, useRef, useCallback } from 'react'
import Scene1 from './Scene1'
import Scene2 from './Scene2'
import Scene3 from './Scene3'
import Scene4 from './Scene4'
import Scene5 from './Scene5'
import Scene6 from './Scene6'
import Scene7 from './Scene7'

const SCENE_COUNT = 7
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3)
}

function animateNumber(el, from, to, duration) {
  const start = performance.now()
  function tick(now) {
    const elapsed = Math.min((now - start) / duration, 1)
    el.textContent = String(Math.round(from + (to - from) * easeOut(elapsed)))
    if (elapsed < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

const PILL_LABELS = [
  'Developer',
  'CyfroCode',
  'Build & Deploy',
  'Runtime Guard',
  'Threat Alert',
  'Auto Response',
  'Full Lifecycle',
]

export default function Slide3() {
  const counterRefs = useRef([])
  const riskScoreRef = useRef(null)
  const scheduledTransitions = useRef([])
  const numberAnimStarted = useRef(false)
  const riskAnimStarted = useRef(false)

  const [slideReady, setSlideReady] = useState(false)
  const [sceneStates, setSceneStates] = useState(Array(SCENE_COUNT).fill('is-pre'))
  const [slideSceneClasses, setSlideSceneClasses] = useState([])
  const [progress, setProgress] = useState('0%')
  const [pillStates, setPillStates] = useState(
    Array.from({ length: SCENE_COUNT }, () => ({ current: false, complete: false }))
  )

  const animateRiskScore = useCallback(() => {
    if (!riskScoreRef.current || riskAnimStarted.current) return
    riskAnimStarted.current = true
    if (prefersReducedMotion) { riskScoreRef.current.textContent = '28'; return }
    const start = performance.now()
    const from = 86, to = 28
    function tick(now) {
      const p = Math.min((now - start) / 1600, 1)
      riskScoreRef.current.textContent = String(Math.round(from + (to - from) * easeOut(p)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [])

  const animateCounters = useCallback(() => {
    if (numberAnimStarted.current) return
    numberAnimStarted.current = true
    counterRefs.current.forEach((el) => {
      if (!el) return
      const to = Number(el.getAttribute('data-counter'))
      prefersReducedMotion ? (el.textContent = String(to)) : animateNumber(el, 0, to, 1050)
    })
  }, [])

  function scheduleTransition(callback, delay) {
    const id = window.setTimeout(callback, delay)
    scheduledTransitions.current.push(id)
    return id
  }

  function clearScheduledTransitions() {
    while (scheduledTransitions.current.length) {
      window.clearTimeout(scheduledTransitions.current.pop())
    }
  }

  const updateProgress = useCallback((activeIndex) => {
    setProgress(((activeIndex + 1) / SCENE_COUNT) * 100 + '%')
    setPillStates(
      Array.from({ length: SCENE_COUNT }, (_, i) => ({
        current: i === activeIndex,
        complete: i < activeIndex,
      }))
    )
  }, [])

  const activateScene = useCallback((index) => {
    setSlideSceneClasses(['scene-' + (index + 1) + '-active'])
    updateProgress(index)
    setSceneStates(
      Array.from({ length: SCENE_COUNT }, (_, i) => {
        if (i < index) return 'is-hidden'
        if (i > index) return 'is-pre'
        return 'is-active'
      })
    )
    if (index === 3) animateCounters()
    if (index === 5) animateRiskScore()
  }, [updateProgress, animateCounters, animateRiskScore])

  const transitionTo = useCallback((nextIndex) => {
    const currentIndex = nextIndex - 1
    setSlideSceneClasses([
      'scene-' + (currentIndex + 1) + '-exiting',
      'scene-' + (nextIndex + 1) + '-entering',
    ])
    setSceneStates(
      Array.from({ length: SCENE_COUNT }, (_, i) => {
        if (i < currentIndex) return 'is-hidden'
        if (i === currentIndex) return 'is-exiting'
        if (i === nextIndex) return 'is-active'
        return 'is-pre'
      })
    )
    updateProgress(nextIndex)
    if (nextIndex === 3) animateCounters()
    if (nextIndex === 5) animateRiskScore()

    window.setTimeout(() => {
      setSlideSceneClasses(['scene-' + (nextIndex + 1) + '-active'])
      setSceneStates(
        Array.from({ length: SCENE_COUNT }, (_, i) => {
          if (i < nextIndex) return 'is-hidden'
          if (i === nextIndex) return 'is-active'
          return 'is-pre'
        })
      )
    }, prefersReducedMotion ? 0 : 1800)
  }, [updateProgress, animateCounters, animateRiskScore])

  useEffect(() => {
    setSlideReady(true)
    if (prefersReducedMotion) {
      activateScene(6); animateCounters(); animateRiskScore(); return
    }
    setProgress('6%')
    setPillStates((prev) => { const next = [...prev]; next[0] = { current: true, complete: false }; return next })
    scheduleTransition(() => activateScene(0), 1000)
    scheduleTransition(() => transitionTo(1), 10000)
    scheduleTransition(() => transitionTo(2), 19000)
    scheduleTransition(() => transitionTo(3), 28000)
    scheduleTransition(() => transitionTo(4), 37000)
    scheduleTransition(() => transitionTo(5), 46000)
    scheduleTransition(() => transitionTo(6), 55000)
    return () => clearScheduledTransitions()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handlePillClick(index) {
    clearScheduledTransitions()
    activateScene(index)
  }

  const slideClassName = [
    'slide',
    slideReady ? 'is-ready' : '',
    ...slideSceneClasses,
  ].filter(Boolean).join(' ')

  return (
    <main id="slide" className={slideClassName}>
      <div className="slide-glow" aria-hidden="true" />
      <div className="content">
        <header>
          <div className="header-shell">
            <h1>From Code to Cyber Resilience</h1>
            <p>
              The NexaBank Story — Powered by CyfroSec: AI-driven security from the first
              commit to continuous runtime protection.
            </p>
          </div>
        </header>

        <div className="stage">
          <div className="continuity-line" aria-hidden="true" />
          <Scene1 state={sceneStates[0]} />
          <Scene2 state={sceneStates[1]} />
          <Scene3 state={sceneStates[2]} />
          <Scene4 state={sceneStates[3]} counterRefs={counterRefs} />
          <Scene5 state={sceneStates[4]} />
          <Scene6 state={sceneStates[5]} riskScoreRef={riskScoreRef} />
          <Scene7 state={sceneStates[6]} />
        </div>

        <div className="cinema-progress" aria-hidden="true">
          <div className="progress-track-shell" style={{ '--progress': progress }} />
          {PILL_LABELS.map((label, index) => {
            const state = pillStates[index]
            const cls = [
              'progress-pill',
              state.current ? 'is-current' : '',
              state.complete ? 'is-complete' : '',
            ].filter(Boolean).join(' ')
            return (
              <button
                key={label}
                type="button"
                className={cls}
                aria-label={`Show scene ${index + 1}: ${label}`}
                aria-pressed={state.current ? 'true' : 'false'}
                onClick={() => handlePillClick(index)}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}

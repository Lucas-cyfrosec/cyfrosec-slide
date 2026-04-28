import { GridPixelateWipe } from '../ui/grid-pixelate-wipe'
import logoImg from './imgs/logo.png'
import logo2Img from './imgs/logo2.png'

const FONT_FAMILY =
  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'

function IntroScene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 22% 24%, rgba(24, 194, 216, 0.24), transparent 24%), radial-gradient(circle at 78% 22%, rgba(232, 131, 42, 0.22), transparent 20%), linear-gradient(135deg, #071426 0%, #102a43 56%, #1c4f6a 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.35,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          background: '#4ab3c8',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 10,
          background: '#e8832a',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 26,
          paddingBottom: 44,
          color: '#eff7ff',
          textAlign: 'center',
          fontFamily: FONT_FAMILY,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            opacity: 0.72,
          }}
        >
          CyfroSec
        </div>
        <div
          style={{
            fontSize: 116,
            fontWeight: 800,
            letterSpacing: '-0.06em',
            lineHeight: 0.92,
          }}
        >
          Bridging Gaps.
          <br />
          Securing Futures.
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 16,
            padding: '16px 28px',
            borderRadius: 999,
            background: 'rgba(255, 255, 255, 0.10)',
            border: '1px solid rgba(191, 219, 254, 0.22)',
            boxShadow: '0 18px 48px rgba(2, 12, 27, 0.22)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span
            style={{
              color: 'rgba(235, 245, 255, 0.8)',
              fontSize: 18,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Prepared for Hayat Telecom
          </span>
        </div>
      </div>
    </div>
  )
}

function FinalScene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: '#ffffff',
        fontFamily: FONT_FAMILY,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          background: '#4ab3c8',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 10,
          background: '#e8832a',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 18%, rgba(74, 179, 200, 0.10), transparent 26%), radial-gradient(circle at 82% 70%, rgba(232, 131, 42, 0.09), transparent 24%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: '0 80px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 22,
        }}
      >
        <img
          src={logoImg}
          alt="CyfroSec — Bridging Gaps. Securing Futures."
          style={{
            width: 1000,
            maxWidth: '92%',
            height: 'auto',
            display: 'block',
          }}
        />

        <img
          src={logo2Img}
          alt="HAYAT Telecommunications"
          style={{
            width: 380,
            height: 380,
            objectFit: 'contain',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 52,
          right: 52,
          bottom: 18,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          color: '#1a1a1a',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            fontSize: 26,
          }}
        >
          <strong style={{ fontWeight: 700, color: '#111111' }}>
            Mustafa Sakhai, Founder &amp; CEO
          </strong>
          <span style={{ color: '#2472a4', fontSize: 24 }}>msakhai@cyfrosec.com</span>
        </div>

        <span style={{ color: '#2472a4', fontSize: 26, fontWeight: 500 }}>
          www.cyfrosec.com
        </span>
      </div>
    </div>
  )
}

export default function Slide1() {
  return (
    <main id="slide" className="slide slide1 is-ready" aria-label="CyfroSec Title Slide">
      <div className="s1-player-shell">
        <GridPixelateWipe
          cols={16}
          rows={9}
          pattern="wave"
          transitionStart={1550}
          transitionDuration={1250}
          cellFadeMs={240}
          from={<IntroScene />}
          to={<FinalScene />}
        />
      </div>
    </main>
  )
}

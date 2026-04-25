import { useTheme } from '../context/ThemeContext'

const sparkles = [
  { top: '8%',  left: '12%', size: 4, delay: '0s',    dur: '3.2s' },
  { top: '15%', left: '85%', size: 3, delay: '0.7s',  dur: '2.8s' },
  { top: '35%', left: '5%',  size: 2, delay: '1.4s',  dur: '3.6s' },
  { top: '55%', left: '92%', size: 5, delay: '0.3s',  dur: '4s'   },
  { top: '72%', left: '18%', size: 3, delay: '1.1s',  dur: '3s'   },
  { top: '80%', left: '76%', size: 4, delay: '2s',    dur: '3.4s' },
  { top: '90%', left: '45%', size: 2, delay: '0.5s',  dur: '2.6s' },
  { top: '25%', left: '60%', size: 3, delay: '1.8s',  dur: '3.8s' },
]

export default function LightModeSparkles() {
  const { isDark } = useTheme()
  if (isDark) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            background: i % 2 === 0
              ? 'radial-gradient(circle, rgba(201,107,133,0.9) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(184,146,42,0.9)  0%, transparent 70%)',
            animation: `sparkle ${s.dur} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
      {/* Floating rose diamonds */}
      {[
        { top: '20%', left: '90%', rot: '45deg', delay: '0s' },
        { top: '65%', left: '8%',  rot: '30deg', delay: '1.5s' },
        { top: '45%', left: '50%', rot: '60deg', delay: '0.8s' },
      ].map((d, i) => (
        <div
          key={`d${i}`}
          className="absolute"
          style={{
            top: d.top,
            left: d.left,
            width: 8,
            height: 8,
            transform: `rotate(${d.rot})`,
            background: 'linear-gradient(135deg, rgba(201,107,133,0.6), rgba(184,146,42,0.4))',
            animation: `float 6s ease-in-out ${d.delay} infinite`,
            borderRadius: '2px',
          }}
        />
      ))}
    </div>
  )
}

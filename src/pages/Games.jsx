import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, HelpCircle, Zap, RefreshCw, Trophy, Clock } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionLabel from '../components/SectionLabel'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

/* ─────────────────────────────────────────
   GAME 1 — MEMORY MATCH
───────────────────────────────────────── */
const SYMBOLS = ['🎵', '💹', '🍳', '✂️', '🏆', '💰', '🌍', '⭐']

function shuffleCards() {
  return [...SYMBOLS, ...SYMBOLS]
    .map((v, id) => ({ id, v, uid: Math.random() }))
    .sort((a, b) => a.uid - b.uid)
}

function MemoryGame() {
  const [cards, setCards] = useState(shuffleCards)
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState(new Set())
  const [moves, setMoves] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const [won, setWon] = useState(false)
  const lockRef = useRef(false)

  const reset = useCallback(() => {
    setCards(shuffleCards())
    setFlipped([])
    setMatched(new Set())
    setMoves(0)
    setSeconds(0)
    setRunning(false)
    setWon(false)
    lockRef.current = false
  }, [])

  useEffect(() => {
    if (!running) return
    const t = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(t)
  }, [running])

  const handleFlip = (idx) => {
    if (lockRef.current) return
    if (flipped.includes(idx)) return
    if (matched.has(cards[idx].v)) return
    if (flipped.length === 2) return

    if (!running && moves === 0) setRunning(true)

    const next = [...flipped, idx]
    setFlipped(next)

    if (next.length === 2) {
      setMoves(m => m + 1)
      const [a, b] = next
      if (cards[a].v === cards[b].v) {
        setMatched(prev => {
          const s = new Set(prev)
          s.add(cards[a].v)
          if (s.size === SYMBOLS.length) { setRunning(false); setWon(true) }
          return s
        })
        setFlipped([])
      } else {
        lockRef.current = true
        setTimeout(() => { setFlipped([]); lockRef.current = false }, 850)
      }
    }
  }

  const isVisible = (idx) => flipped.includes(idx) || matched.has(cards[idx].v)

  return (
    <div>
      {/* Stats */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-5">
          {[
            { val: moves, label: 'Moves', color: 'text-gradient-rose' },
            { val: `${seconds}s`, label: 'Time', color: 'text-gold' },
            { val: `${matched.size}/${SYMBOLS.length}`, label: 'Pairs', color: 'text-emerald-400' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className={`font-display text-2xl font-light ${s.color}`}>{s.val}</div>
              <div className="font-mono text-[8px] tracking-widest uppercase text-muted">{s.label}</div>
            </div>
          ))}
        </div>
        <button onClick={reset} className="p-2 rounded-full border border-border hover:border-rose/40 text-muted hover:text-rose transition-all">
          <RefreshCw size={15} />
        </button>
      </div>

      {/* Win screen */}
      <AnimatePresence>
        {won && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mb-5 p-6 bg-card border border-rose/30 rounded-2xl text-center"
          >
            <Trophy size={32} className="text-gold mx-auto mb-2" />
            <p className="font-display text-2xl text-off-white mb-1">You won! 🎉</p>
            <p className="font-mono text-xs text-muted">{moves} moves · {seconds}s</p>
            <button onClick={reset} className="mt-4 px-6 py-2 bg-rose text-bg rounded-full font-mono text-xs tracking-widest uppercase">
              Play Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card grid */}
      <div className="grid grid-cols-4 gap-2 md:gap-3">
        {cards.map((card, idx) => {
          const visible = isVisible(idx)
          const isMatched = matched.has(card.v)
          return (
            <motion.button
              key={card.uid}
              onClick={() => handleFlip(idx)}
              whileTap={{ scale: 0.92 }}
              className={`aspect-square rounded-xl md:rounded-2xl border text-2xl md:text-3xl flex items-center justify-center transition-all duration-200 select-none ${
                visible
                  ? isMatched
                    ? 'bg-emerald-500/10 border-emerald-500/40 cursor-default'
                    : 'bg-card border-rose/40'
                  : 'bg-card border-border hover:border-rose/30 cursor-pointer'
              }`}
            >
              <AnimatePresence mode="wait">
                {visible ? (
                  <motion.span key="face" initial={{ rotateY: 90 }} animate={{ rotateY: 0 }} transition={{ duration: 0.2 }}>
                    {card.v}
                  </motion.span>
                ) : (
                  <motion.span key="back" className="text-rose/20 text-base">✦</motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )
        })}
      </div>

      <p className="font-mono text-[9px] tracking-widest uppercase text-muted text-center mt-4">
        Flip cards · find all 8 matching pairs
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────
   GAME 2 — TRIVIA QUIZ
───────────────────────────────────────── */
const QUESTIONS = [
  { q: 'Which currency pair is nicknamed "Cable"?', opts: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD'], ans: 1, cat: 'Trading' },
  { q: 'What does "XAU" represent in forex markets?', opts: ['Silver', 'Platinum', 'Gold', 'Oil'], ans: 2, cat: 'Trading' },
  { q: 'Which music genre blends West African rhythms with Western pop?', opts: ['Gospel', 'R&B', 'Afrobeats', 'Soul'], ans: 2, cat: 'Music' },
  { q: 'Egusi is primarily used to make what Nigerian dish?', opts: ['A dessert', 'Soup', 'A drink', 'Bread'], ans: 1, cat: 'Culinary' },
  { q: 'What does CSAT stand for?', opts: ['Client Sales Average Tool', 'Customer Satisfaction Score', 'Call Support Assessment', 'Client Service Action Team'], ans: 1, cat: 'Customer Service' },
  { q: 'In trading, what is a "prop firm"?', opts: ['A property investment company', 'A firm that funds traders with its capital', 'A stock broker', 'A government regulator'], ans: 1, cat: 'Trading' },
  { q: 'Which is a Nigerian soup made with bitter leaves?', opts: ['Egusi', 'Afang', 'Ofe Onugbu', 'Pepper soup'], ans: 2, cat: 'Culinary' },
]

const CAT_COLOR = {
  Trading: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
  Music: 'text-rose border-rose/30 bg-rose/10',
  Culinary: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
  'Customer Service': 'text-teal-400 border-teal-400/30 bg-teal-400/10',
}

function TriviaGame() {
  const [idx, setIdx] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = QUESTIONS[idx]

  const pick = (i) => {
    if (chosen !== null) return
    setChosen(i)
    if (i === q.ans) setScore(s => s + 1)
    setTimeout(() => {
      if (idx + 1 < QUESTIONS.length) { setIdx(x => x + 1); setChosen(null) }
      else setDone(true)
    }, 1000)
  }

  const reset = () => { setIdx(0); setChosen(null); setScore(0); setDone(false) }

  const pct = Math.round((score / QUESTIONS.length) * 100)

  if (done) return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
      <Trophy size={44} className="text-gold mx-auto mb-4" />
      <h3 className="font-display text-3xl text-off-white mb-1">Quiz Complete!</h3>
      <p className="font-body text-muted mb-3">You scored</p>
      <p className="font-display text-6xl font-light text-gradient-rose mb-1">
        {score}<span className="text-muted text-3xl">/{QUESTIONS.length}</span>
      </p>
      <p className="font-mono text-xs text-muted mb-6">{pct}% correct</p>
      <button onClick={reset} className="px-8 py-3 bg-rose text-bg rounded-full font-mono text-xs tracking-widest uppercase">
        Play Again
      </button>
    </motion.div>
  )

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-rose to-gold rounded-full"
            animate={{ width: `${(idx / QUESTIONS.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <span className="font-mono text-xs text-muted shrink-0">{idx + 1}/{QUESTIONS.length}</span>
      </div>

      {/* Category badge */}
      <span className={`font-mono text-[9px] tracking-widest uppercase px-2 py-1 rounded-full border ${CAT_COLOR[q.cat]} mb-4 inline-block`}>
        {q.cat}
      </span>

      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
        >
          <h3 className="font-display text-xl md:text-2xl font-light text-off-white mb-6 leading-snug">{q.q}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {q.opts.map((opt, i) => {
              let cls = 'bg-card border-border text-muted hover:border-rose/40 hover:text-off-white cursor-pointer'
              if (chosen !== null) {
                if (i === q.ans) cls = 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 cursor-default'
                else if (i === chosen) cls = 'bg-rose/10 border-rose/40 text-rose cursor-default'
                else cls = 'bg-card border-border text-muted opacity-40 cursor-default'
              }
              return (
                <button key={i} onClick={() => pick(i)} className={`p-4 rounded-xl border text-left font-body text-sm transition-all duration-200 ${cls}`}>
                  <span className="font-mono text-[9px] tracking-widest text-rose/50 mr-2 uppercase">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-5 text-right">
        <span className="font-mono text-xs text-muted">Score: <span className="text-rose">{score}</span></span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   GAME 3 — REACTION TAP
───────────────────────────────────────── */
function ReactionGame() {
  const [phase, setPhase] = useState('idle') // idle | waiting | ready | result | early
  const [reactionMs, setReactionMs] = useState(null)
  const [best, setBest] = useState(null)
  const [attempts, setAttempts] = useState(0)
  const startRef = useRef(null)
  const timerRef = useRef(null)

  const begin = () => {
    setPhase('waiting')
    setReactionMs(null)
    const delay = 2000 + Math.random() * 3000
    timerRef.current = setTimeout(() => {
      setPhase('ready')
      startRef.current = Date.now()
    }, delay)
  }

  const tap = () => {
    if (phase === 'idle' || phase === 'result' || phase === 'early') { begin(); return }
    if (phase === 'waiting') {
      clearTimeout(timerRef.current)
      setPhase('early')
      return
    }
    if (phase === 'ready') {
      const ms = Date.now() - startRef.current
      setReactionMs(ms)
      setBest(b => b === null ? ms : Math.min(b, ms))
      setAttempts(a => a + 1)
      setPhase('result')
    }
  }

  const rating =
    reactionMs < 180 ? { label: '⚡ Lightning!', color: 'text-gold' }
    : reactionMs < 260 ? { label: '🎯 Great!', color: 'text-emerald-400' }
    : reactionMs < 400 ? { label: '👍 Good', color: 'text-blue-400' }
    : { label: '🐢 Keep Practicing', color: 'text-muted' }

  const bgClass =
    phase === 'ready' ? 'bg-rose/20 border-rose shadow-[0_0_60px_rgba(212,132,154,0.35)]'
    : phase === 'waiting' ? 'bg-gold/10 border-gold/30'
    : phase === 'early' ? 'bg-rose/5 border-rose/20'
    : 'bg-card border-border hover:border-rose/30'

  return (
    <div className="text-center">
      <p className="font-body text-sm text-muted mb-2">
        Wait for the circle to glow <span className="text-rose font-medium">rose</span>, then tap as fast as you can!
      </p>
      {best !== null && (
        <p className="font-mono text-xs text-gold mb-4">Best: {best}ms · {attempts} attempt{attempts !== 1 ? 's' : ''}</p>
      )}

      <motion.button
        onClick={tap}
        whileTap={{ scale: 0.92 }}
        animate={phase === 'ready' ? { scale: [1, 1.04, 1] } : {}}
        transition={{ repeat: Infinity, duration: 0.5 }}
        className={`w-52 h-52 md:w-60 md:h-60 rounded-full mx-auto flex flex-col items-center justify-center border-4 transition-all duration-300 ${bgClass}`}
      >
        {phase === 'idle' && (
          <><Zap size={30} className="text-rose mb-2" /><span className="font-mono text-xs tracking-widest uppercase text-muted">Tap to Start</span></>
        )}
        {phase === 'waiting' && (
          <><Clock size={30} className="text-gold/60 mb-2 animate-pulse" /><span className="font-mono text-xs tracking-widest uppercase text-gold/60">Wait for it...</span></>
        )}
        {phase === 'ready' && (
          <><span className="text-5xl mb-2">👆</span><span className="font-mono text-xs tracking-widest uppercase text-rose animate-pulse">TAP NOW!</span></>
        )}
        {phase === 'early' && (
          <><span className="text-4xl mb-2">😅</span><span className="font-mono text-xs tracking-widest uppercase text-rose/60">Too early!</span><span className="font-mono text-[9px] text-muted mt-1">Tap to try again</span></>
        )}
        {phase === 'result' && (
          <>
            <span className="font-display text-4xl font-light text-gradient-rose">{reactionMs}ms</span>
            <span className={`font-body text-sm mt-1 ${rating.color}`}>{rating.label}</span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-muted mt-3">Tap to retry</span>
          </>
        )}
      </motion.button>

      {phase === 'waiting' && (
        <p className="font-mono text-[9px] tracking-widest uppercase text-muted mt-4">Tap to cancel</p>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
const GAMES = [
  { id: 'memory', label: 'Memory Match', icon: Brain, desc: 'Match all 8 emoji pairs', color: '#D4849A' },
  { id: 'trivia', label: "Angela's Trivia", icon: HelpCircle, desc: '7-question quiz', color: '#C9A84C' },
  { id: 'reaction', label: 'Reaction Tap', icon: Zap, desc: 'Test your reflexes', color: '#7EB8F7' },
]

export default function Games() {
  const [active, setActive] = useState('memory')

  return (
    <motion.div {...pageTransition}>
      <HeroSection
        label="Games"
        title={<>Play &amp; <span className="italic" style={{ color: '#D4849A' }}>Have Fun</span></>}
        subtitle="Mini-games inspired by Angela's World"
        description="Take a break and play — three original browser games built around trading, music, culinary arts, and more."
        accentColor="#D4849A"
      />

      <section className="max-w-4xl mx-auto px-5 md:px-12 py-10 md:py-16">
        {/* Game selector tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          {GAMES.map(g => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`flex-1 flex items-center gap-3 p-4 rounded-2xl border transition-all duration-250 text-left ${
                active === g.id
                  ? 'bg-card border-rose/40 shadow-[0_0_24px_rgba(212,132,154,0.12)]'
                  : 'bg-card border-border hover:border-rose/20 opacity-60 hover:opacity-100'
              }`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: g.color + '20', color: g.color }}
              >
                <g.icon size={18} />
              </div>
              <div>
                <p className="font-display text-sm font-medium text-off-white leading-tight">{g.label}</p>
                <p className="font-mono text-[9px] tracking-wide text-muted">{g.desc}</p>
              </div>
              {active === g.id && (
                <div className="ml-auto w-2 h-2 rounded-full bg-rose shrink-0" />
              )}
            </button>
          ))}
        </div>

        {/* Game area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-3xl p-6 md:p-8"
          >
            {active === 'memory' && <MemoryGame />}
            {active === 'trivia' && <TriviaGame />}
            {active === 'reaction' && <ReactionGame />}
          </motion.div>
        </AnimatePresence>
      </section>
    </motion.div>
  )
}

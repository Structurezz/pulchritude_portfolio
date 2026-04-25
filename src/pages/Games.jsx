import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain, HelpCircle, Zap, RefreshCw, Trophy, Clock,
  Shuffle, CheckCircle, Smile, TrendingUp, GitBranch,
  Hash, Eye, Heart, Sparkles, AlignLeft, LayoutGrid,
  Star, Repeat, ShoppingBag, Circle, Palette, ArrowLeft,
} from 'lucide-react'
import HeroSection from '../components/HeroSection'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

/* ════════════════════════════════════════════
   GAME 1 — MEMORY MATCH
════════════════════════════════════════════ */
const MEM_SYMS = ['🌹','💅','👑','💄','🎵','💍','🌸','✨']
function shuffleCards() {
  return [...MEM_SYMS,...MEM_SYMS].map((v,id)=>({id,v,uid:Math.random()})).sort((a,b)=>a.uid-b.uid)
}
function MemoryGame() {
  const [cards,setCards]=useState(shuffleCards)
  const [flipped,setFlipped]=useState([])
  const [matched,setMatched]=useState(new Set())
  const [moves,setMoves]=useState(0)
  const [secs,setSecs]=useState(0)
  const [running,setRunning]=useState(false)
  const [won,setWon]=useState(false)
  const lock=useRef(false)
  const reset=useCallback(()=>{setCards(shuffleCards());setFlipped([]);setMatched(new Set());setMoves(0);setSecs(0);setRunning(false);setWon(false);lock.current=false},[])
  useEffect(()=>{if(!running)return;const t=setInterval(()=>setSecs(s=>s+1),1000);return()=>clearInterval(t)},[running])
  const flip=(idx)=>{
    if(lock.current||flipped.includes(idx)||matched.has(cards[idx].v)||flipped.length===2)return
    if(!running&&moves===0)setRunning(true)
    const next=[...flipped,idx]
    setFlipped(next)
    if(next.length===2){
      setMoves(m=>m+1)
      const[a,b]=next
      if(cards[a].v===cards[b].v){
        setMatched(prev=>{const s=new Set(prev);s.add(cards[a].v);if(s.size===MEM_SYMS.length){setRunning(false);setWon(true)}return s})
        setFlipped([])
      } else {lock.current=true;setTimeout(()=>{setFlipped([]);lock.current=false},850)}
    }
  }
  const vis=(i)=>flipped.includes(i)||matched.has(cards[i].v)
  return(
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-4">
          {[{v:moves,l:'Moves',c:'text-gradient-rose'},{v:`${secs}s`,l:'Time',c:'text-gold'},{v:`${matched.size}/${MEM_SYMS.length}`,l:'Pairs',c:'text-emerald-400'}].map(s=>(
            <div key={s.l} className="text-center"><div className={`font-display text-xl font-light ${s.c}`}>{s.v}</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">{s.l}</div></div>
          ))}
        </div>
        <button onClick={reset} className="p-2 rounded-full border border-border hover:border-rose/40 text-muted hover:text-rose transition-all"><RefreshCw size={14}/></button>
      </div>
      {won&&<motion.div initial={{opacity:0,scale:.85}} animate={{opacity:1,scale:1}} className="mb-4 p-5 bg-card border border-rose/30 rounded-2xl text-center"><Trophy size={28} className="text-gold mx-auto mb-2"/><p className="font-display text-xl text-off-white mb-1">You won! 🎉</p><p className="font-mono text-xs text-muted">{moves} moves · {secs}s</p><button onClick={reset} className="mt-3 px-5 py-1.5 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Play Again</button></motion.div>}
      <div className="grid grid-cols-4 gap-2">
        {cards.map((card,idx)=>{
          const v=vis(idx),m=matched.has(card.v)
          return(
            <motion.button key={card.uid} onClick={()=>flip(idx)} whileTap={{scale:.92}}
              className={`aspect-square rounded-xl border text-2xl flex items-center justify-center transition-all duration-200 ${v?m?'bg-emerald-500/10 border-emerald-500/40 cursor-default':'bg-card border-rose/40':'bg-card border-border hover:border-rose/30 cursor-pointer'}`}>
              <AnimatePresence mode="wait">{v?<motion.span key="f" initial={{rotateY:90}} animate={{rotateY:0}} transition={{duration:.2}}>{card.v}</motion.span>:<motion.span key="b" className="text-rose/20 text-sm">✦</motion.span>}</AnimatePresence>
            </motion.button>
          )
        })}
      </div>
      <p className="font-mono text-[8px] uppercase tracking-widest text-muted text-center mt-3">Flip cards · find all {MEM_SYMS.length} pairs</p>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 2 — TRIVIA
════════════════════════════════════════════ */
const TQ=[
  {q:'Which currency pair is nicknamed "Cable"?',opts:['EUR/USD','GBP/USD','USD/JPY','AUD/USD'],ans:1,cat:'Trading'},
  {q:'What does "XAU" represent in forex?',opts:['Silver','Platinum','Gold','Oil'],ans:2,cat:'Trading'},
  {q:'Which genre blends West African rhythms with Western pop?',opts:['Gospel','R&B','Afrobeats','Soul'],ans:2,cat:'Music'},
  {q:'Egusi is used to make what Nigerian dish?',opts:['A dessert','Soup','A drink','Bread'],ans:1,cat:'Culinary'},
  {q:'What does CSAT stand for?',opts:['Client Sales Average Tool','Customer Satisfaction Score','Call Support Assessment','Client Service Action Team'],ans:1,cat:'Service'},
  {q:'In trading, what is a "prop firm"?',opts:['A property company','A firm funding traders','A stock broker','A regulator'],ans:1,cat:'Trading'},
  {q:'Which Nigerian soup uses bitter leaves?',opts:['Egusi','Afang','Ofe Onugbu','Pepper soup'],ans:2,cat:'Culinary'},
]
const CAT_C={Trading:'text-blue-400',Music:'text-rose',Culinary:'text-orange-400',Service:'text-teal-400'}
function TriviaGame(){
  const[idx,setIdx]=useState(0),[chosen,setChosen]=useState(null),[score,setScore]=useState(0),[done,setDone]=useState(false)
  const q=TQ[idx]
  const pick=(i)=>{if(chosen!==null)return;setChosen(i);if(i===q.ans)setScore(s=>s+1);setTimeout(()=>{if(idx+1<TQ.length){setIdx(x=>x+1);setChosen(null)}else setDone(true)},900)}
  const reset=()=>{setIdx(0);setChosen(null);setScore(0);setDone(false)}
  if(done)return(<motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} className="text-center py-8"><Trophy size={40} className="text-gold mx-auto mb-3"/><h3 className="font-display text-2xl text-off-white mb-1">Quiz Complete!</h3><p className="font-display text-5xl font-light text-gradient-rose mt-2">{score}<span className="text-muted text-2xl">/{TQ.length}</span></p><button onClick={reset} className="mt-5 px-7 py-2.5 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Play Again</button></motion.div>)
  return(
    <div>
      <div className="flex items-center gap-3 mb-4"><div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden"><motion.div className="h-full bg-gradient-to-r from-rose to-gold rounded-full" animate={{width:`${(idx/TQ.length)*100}%`}}/></div><span className="font-mono text-xs text-muted">{idx+1}/{TQ.length}</span></div>
      <span className={`font-mono text-[9px] uppercase tracking-widest ${CAT_C[q.cat]} mb-3 inline-block`}>{q.cat}</span>
      <AnimatePresence mode="wait"><motion.div key={idx} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:.25}}>
        <h3 className="font-display text-lg md:text-xl font-light text-off-white mb-5 leading-snug">{q.q}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {q.opts.map((opt,i)=>{let c='bg-card border-border text-muted hover:border-rose/40 hover:text-off-white cursor-pointer';if(chosen!==null){if(i===q.ans)c='bg-emerald-500/15 border-emerald-500/50 text-emerald-300 cursor-default';else if(i===chosen)c='bg-rose/10 border-rose/40 text-rose cursor-default';else c='bg-card border-border text-muted opacity-40 cursor-default'}
          return(<button key={i} onClick={()=>pick(i)} className={`p-3.5 rounded-xl border text-left font-body text-sm transition-all duration-200 ${c}`}><span className="font-mono text-[9px] text-rose/50 mr-2 uppercase">{String.fromCharCode(65+i)}.</span>{opt}</button>)})}
        </div>
        <div className="mt-4 text-right"><span className="font-mono text-xs text-muted">Score: <span className="text-rose">{score}</span></span></div>
      </motion.div></AnimatePresence>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 3 — REACTION TAP
════════════════════════════════════════════ */
function ReactionGame(){
  const[phase,setPhase]=useState('idle'),[ms,setMs]=useState(null),[best,setBest]=useState(null),[tries,setTries]=useState(0)
  const sRef=useRef(null),tRef=useRef(null)
  const begin=()=>{setPhase('waiting');setMs(null);tRef.current=setTimeout(()=>{setPhase('ready');sRef.current=Date.now()},2000+Math.random()*3000)}
  const tap=()=>{
    if(phase==='idle'||phase==='result'||phase==='early'){begin();return}
    if(phase==='waiting'){clearTimeout(tRef.current);setPhase('early');return}
    if(phase==='ready'){const t=Date.now()-sRef.current;setMs(t);setBest(b=>b===null?t:Math.min(b,t));setTries(a=>a+1);setPhase('result')}
  }
  const rat=ms<180?'⚡ Lightning!':ms<260?'🎯 Great!':ms<400?'👍 Good':'🐢 Keep Going'
  const bg=phase==='ready'?'bg-rose/20 border-rose shadow-[0_0_50px_rgba(212,132,154,0.35)]':phase==='waiting'?'bg-gold/10 border-gold/30':phase==='early'?'bg-rose/5 border-rose/20':'bg-card border-border hover:border-rose/30'
  return(
    <div className="text-center">
      <p className="font-body text-sm text-muted mb-2">Wait for the circle to glow <span className="text-rose">rose</span>, then tap!</p>
      {best&&<p className="font-mono text-xs text-gold mb-3">Best: {best}ms · {tries} attempt{tries!==1?'s':''}</p>}
      <motion.button onClick={tap} whileTap={{scale:.92}} animate={phase==='ready'?{scale:[1,1.04,1]}:{}} transition={{repeat:Infinity,duration:.5}} className={`w-48 h-48 rounded-full mx-auto flex flex-col items-center justify-center border-4 transition-all duration-300 ${bg}`}>
        {phase==='idle'&&<><Zap size={28} className="text-rose mb-2"/><span className="font-mono text-xs uppercase tracking-widest text-muted">Tap to Start</span></>}
        {phase==='waiting'&&<><Clock size={28} className="text-gold/60 mb-2 animate-pulse"/><span className="font-mono text-xs uppercase tracking-widest text-gold/60">Wait...</span></>}
        {phase==='ready'&&<><span className="text-5xl mb-2">👆</span><span className="font-mono text-xs uppercase tracking-widest text-rose animate-pulse">TAP NOW!</span></>}
        {phase==='early'&&<><span className="text-4xl mb-2">😅</span><span className="font-mono text-xs uppercase text-rose/60">Too early!</span><span className="font-mono text-[9px] text-muted mt-1">Tap to retry</span></>}
        {phase==='result'&&<><span className="font-display text-4xl font-light text-gradient-rose">{ms}ms</span><span className="font-body text-sm mt-1 text-gold">{rat}</span><span className="font-mono text-[9px] uppercase tracking-widest text-muted mt-2">Tap to retry</span></>}
      </motion.button>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 4 — WORD SCRAMBLE
════════════════════════════════════════════ */
const WORDS=[
  {w:'LIPSTICK',hint:'makeup essential'},
  {w:'MASCARA',hint:'for your lashes'},
  {w:'AFROBEATS',hint:'music genre'},
  {w:'TRADING',hint:'Angela\'s career'},
  {w:'CULINARY',hint:'art of cooking'},
  {w:'BRAIDING',hint:'hair technique'},
  {w:'SKINCARE',hint:'beauty routine'},
  {w:'PERFUME',hint:'fragrance bottle'},
  {w:'PALETTE',hint:'makeup colours'},
  {w:'BLUSH',hint:'rosy cheeks product'},
]
function scramble(w){return w.split('').sort(()=>Math.random()-.5).join('')}
function WordScramble(){
  const[qi,setQi]=useState(0),[scr,setScr]=useState(()=>scramble(WORDS[0].w)),[inp,setInp]=useState(''),[result,setResult]=useState(null),[score,setScore]=useState(0),[done,setDone]=useState(false)
  const q=WORDS[qi]
  const next=useCallback(()=>{const ni=qi+1;if(ni>=WORDS.length){setDone(true);return}setQi(ni);setScr(scramble(WORDS[ni].w));setInp('');setResult(null)},[qi])
  const check=()=>{if(!inp.trim())return;const ok=inp.trim().toUpperCase()===q.w;setResult(ok?'correct':'wrong');if(ok)setScore(s=>s+1);setTimeout(next,900)}
  const reset=()=>{setQi(0);setScr(scramble(WORDS[0].w));setInp('');setResult(null);setScore(0);setDone(false)}
  if(done)return(<motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center py-8"><Trophy size={36} className="text-gold mx-auto mb-3"/><h3 className="font-display text-2xl text-off-white mb-1">Done!</h3><p className="font-display text-5xl text-gradient-rose mt-2">{score}<span className="text-muted text-2xl">/{WORDS.length}</span></p><button onClick={reset} className="mt-5 px-7 py-2.5 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Play Again</button></motion.div>)
  return(
    <div>
      <div className="flex items-center justify-between mb-5"><div className="font-mono text-xs text-muted">{qi+1}/{WORDS.length}</div><div className="font-mono text-xs text-muted">Score: <span className="text-rose">{score}</span></div></div>
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-2">Hint: {q.hint}</p>
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {scr.split('').map((l,i)=><span key={i} className="w-9 h-9 bg-card border border-border rounded-xl flex items-center justify-center font-display text-lg font-medium text-rose">{l}</span>)}
      </div>
      <input value={inp} onChange={e=>setInp(e.target.value.toUpperCase())} onKeyDown={e=>e.key==='Enter'&&check()} placeholder="Type your answer…" maxLength={q.w.length+2}
        className={`w-full bg-card border rounded-xl px-4 py-3 font-display text-lg text-off-white tracking-widest text-center outline-none transition-colors ${result==='correct'?'border-emerald-500':'border-border focus:border-rose/50'}`}/>
      {result&&<p className={`font-mono text-xs mt-2 text-center ${result==='correct'?'text-emerald-400':'text-rose'}`}>{result==='correct'?'✓ Correct!':'✗ It was '+q.w}</p>}
      <button onClick={check} className="w-full mt-3 py-3 bg-rose text-bg rounded-xl font-mono text-xs uppercase tracking-widest">Check</button>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 5 — TRUE OR FALSE
════════════════════════════════════════════ */
const FACTS=[
  {s:'Afrobeats originated in Nigeria.',ans:true},{s:'EUR/USD is called "The Cable".',ans:false},
  {s:'GBP/USD is nicknamed "Cable".',ans:true},{s:'Gold is represented as XAU in forex.',ans:true},
  {s:'Egusi soup is made with melon seeds.',ans:true},{s:'Mascara was invented in the 1990s.',ans:false},
  {s:'Jollof rice is a West African dish.',ans:true},{s:'CSAT stands for Customer Sales Assessment Tool.',ans:false},
  {s:'Afang soup is a Nigerian delicacy.',ans:true},{s:'Braiding originated in North America.',ans:false},
]
function TrueFalse(){
  const[i,setI]=useState(0),[chosen,setChosen]=useState(null),[score,setScore]=useState(0),[done,setDone]=useState(false)
  const f=FACTS[i]
  const pick=(v)=>{if(chosen!==null)return;setChosen(v);if(v===f.ans)setScore(s=>s+1);setTimeout(()=>{if(i+1<FACTS.length){setI(x=>x+1);setChosen(null)}else setDone(true)},800)}
  const reset=()=>{setI(0);setChosen(null);setScore(0);setDone(false)}
  if(done)return(<motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center py-8"><Trophy size={36} className="text-gold mx-auto mb-3"/><p className="font-display text-5xl text-gradient-rose">{score}<span className="text-muted text-2xl">/{FACTS.length}</span></p><button onClick={reset} className="mt-5 px-7 py-2.5 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Play Again</button></motion.div>)
  return(
    <div>
      <div className="flex items-center gap-3 mb-6"><div className="flex-1 h-1.5 bg-border rounded-full"><motion.div className="h-full bg-gradient-to-r from-rose to-gold rounded-full" animate={{width:`${(i/FACTS.length)*100}%`}}/></div><span className="font-mono text-xs text-muted">{i+1}/{FACTS.length}</span></div>
      <AnimatePresence mode="wait"><motion.div key={i} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{duration:.25}}>
        <div className="bg-card border border-border rounded-2xl p-6 mb-6 text-center min-h-[100px] flex items-center justify-center">
          <p className="font-display text-lg md:text-xl font-light text-off-white leading-snug">{f.s}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[{v:true,l:'✓ True',ac:'emerald'},{v:false,l:'✗ False',ac:'rose'}].map(({v,l,ac})=>{
            let cls=`border-${ac}-500/40 text-${ac}-400 hover:bg-${ac}-500/10`
            if(chosen!==null){if(v===f.ans)cls='bg-emerald-500/15 border-emerald-500/50 text-emerald-300';else if(v===chosen)cls='bg-rose/10 border-rose/40 text-rose';else cls='opacity-30 border-border text-muted'}
            return(<button key={String(v)} onClick={()=>pick(v)} className={`py-4 rounded-xl border font-display text-xl transition-all duration-200 ${cls}`}>{l}</button>)
          })}
        </div>
      </motion.div></AnimatePresence>
      <div className="mt-4 text-right font-mono text-xs text-muted">Score: <span className="text-rose">{score}</span></div>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 6 — EMOJI DECODE
════════════════════════════════════════════ */
const EMOJIS=[
  {e:'🌹💄👑',opts:['Queen of Beauty','Trading Strategy','Music Album','Cooking Recipe'],ans:0},
  {e:'📈💰🌍',opts:['Shopping Trip','Global Trading','Music Tour','Food Festival'],ans:1},
  {e:'🎵🎤🌟',opts:['Celebrity Chef','Forex Trader','Singing Star','Hair Stylist'],ans:2},
  {e:'🍳🔥❤️',opts:['Hot Trading Day','Cooking with Love','Music Passion','Hair Styling'],ans:1},
  {e:'✂️💇‍♀️💆‍♀️',opts:['Trading Session','Music Recording','Hair & Beauty','Cooking Class'],ans:2},
  {e:'💼📊🏆',opts:['Business Success','Music Awards','Culinary Arts','Beauty Routine'],ans:0},
  {e:'🌸🌺🦋',opts:['Spring Trading','Feminine Energy','Kitchen Garden','Stage Performance'],ans:1},
]
function EmojiDecode(){
  const[i,setI]=useState(0),[chosen,setChosen]=useState(null),[score,setScore]=useState(0),[done,setDone]=useState(false)
  const q=EMOJIS[i]
  const pick=(idx)=>{if(chosen!==null)return;setChosen(idx);if(idx===q.ans)setScore(s=>s+1);setTimeout(()=>{if(i+1<EMOJIS.length){setI(x=>x+1);setChosen(null)}else setDone(true)},900)}
  const reset=()=>{setI(0);setChosen(null);setScore(0);setDone(false)}
  if(done)return(<motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center py-8"><Trophy size={36} className="text-gold mx-auto mb-3"/><p className="font-display text-5xl text-gradient-rose">{score}<span className="text-muted text-2xl">/{EMOJIS.length}</span></p><button onClick={reset} className="mt-5 px-7 py-2.5 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Play Again</button></motion.div>)
  return(
    <div>
      <div className="flex items-center gap-3 mb-5"><div className="flex-1 h-1.5 bg-border rounded-full"><motion.div className="h-full bg-gradient-to-r from-rose to-gold rounded-full" animate={{width:`${(i/EMOJIS.length)*100}%`}}/></div><span className="font-mono text-xs text-muted">{i+1}/{EMOJIS.length}</span></div>
      <AnimatePresence mode="wait"><motion.div key={i} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:.25}}>
        <div className="bg-card border border-border rounded-2xl p-6 text-center mb-5"><p className="text-5xl tracking-widest">{q.e}</p><p className="font-mono text-[9px] uppercase tracking-widest text-muted mt-2">What does this represent?</p></div>
        <div className="grid grid-cols-2 gap-2.5">
          {q.opts.map((opt,idx)=>{let c='bg-card border-border text-muted hover:border-rose/40 hover:text-off-white cursor-pointer';if(chosen!==null){if(idx===q.ans)c='bg-emerald-500/15 border-emerald-500/50 text-emerald-300';else if(idx===chosen)c='bg-rose/10 border-rose/40 text-rose';else c='opacity-40 border-border text-muted cursor-default'}
          return(<button key={idx} onClick={()=>pick(idx)} className={`p-3 rounded-xl border font-body text-sm transition-all duration-200 ${c}`}>{opt}</button>)})}
        </div>
      </motion.div></AnimatePresence>
      <div className="mt-4 text-right font-mono text-xs text-muted">Score: <span className="text-rose">{score}</span></div>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 7 — HIGHER OR LOWER
════════════════════════════════════════════ */
function HigherOrLower(){
  const[curr,setCurr]=useState(()=>Math.floor(Math.random()*100)+1)
  const[next,setNext]=useState(null),[streak,setStreak]=useState(0),[best,setBest]=useState(0),[state,setState]=useState('playing')
  const guess=(dir)=>{const n=Math.floor(Math.random()*100)+1;setNext(n);const correct=(dir==='higher'&&n>curr)||(dir==='lower'&&n<curr)||(n===curr);if(correct){const ns=streak+1;setStreak(ns);setBest(b=>Math.max(b,ns));setTimeout(()=>{setCurr(n);setNext(null)},900)}else{setState('over');setTimeout(()=>{setCurr(Math.floor(Math.random()*100)+1);setNext(null);setStreak(0);setState('playing')},1200)}}
  return(
    <div className="text-center">
      <p className="font-mono text-xs text-muted mb-1">Streak: <span className="text-rose">{streak}</span> · Best: <span className="text-gold">{best}</span></p>
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-6">Will the next number be higher or lower?</p>
      <div className="flex justify-center gap-8 mb-6">
        <div className="text-center"><div className="font-display text-7xl font-light text-gradient-rose">{curr}</div><div className="font-mono text-[9px] uppercase tracking-widest text-muted">Current</div></div>
        {next&&<div className="text-center"><div className={`font-display text-7xl font-light ${next>curr?'text-emerald-400':next<curr?'text-rose':'text-gold'}`}>{next}</div><div className="font-mono text-[9px] uppercase tracking-widest text-muted">{next>curr?'Higher':next<curr?'Lower':'Same!'}</div></div>}
      </div>
      {state==='over'&&<p className="text-rose font-mono text-sm mb-4">❌ Wrong! New game starting…</p>}
      {state==='playing'&&!next&&(
        <div className="flex gap-4 justify-center">
          <button onClick={()=>guess('higher')} className="px-8 py-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-emerald-500/30 transition-all">↑ Higher</button>
          <button onClick={()=>guess('lower')} className="px-8 py-3 bg-rose/20 border border-rose/40 text-rose rounded-full font-mono text-sm uppercase tracking-widest hover:bg-rose/30 transition-all">↓ Lower</button>
        </div>
      )}
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 8 — SIMON SAYS (colour memory)
════════════════════════════════════════════ */
const SIMON_COLS=['rose','gold','teal','lavender']
const COL_STYLE={rose:{bg:'bg-rose/80',border:'border-rose',glow:'shadow-[0_0_30px_rgba(212,132,154,0.6)]',dim:'bg-rose/20 border-rose/30'},gold:{bg:'bg-gold/80',border:'border-gold',glow:'shadow-[0_0_30px_rgba(201,168,76,0.6)]',dim:'bg-gold/20 border-gold/30'},teal:{bg:'bg-teal-400/80',border:'border-teal-400',glow:'shadow-[0_0_30px_rgba(45,212,191,0.5)]',dim:'bg-teal-400/20 border-teal-400/30'},lavender:{bg:'bg-purple-400/80',border:'border-purple-400',glow:'shadow-[0_0_30px_rgba(192,132,252,0.5)]',dim:'bg-purple-400/20 border-purple-400/30'}}
function SimonSays(){
  const[seq,setSeq]=useState([]),[playerSeq,setPlayerSeq]=useState([]),[lit,setLit]=useState(null),[phase,setPhase]=useState('start'),[level,setLevel]=useState(0),[best,setBest]=useState(0)
  const flash=useCallback(async(sequence)=>{setPhase('watching');for(const c of sequence){await new Promise(r=>setTimeout(r,500));setLit(c);await new Promise(r=>setTimeout(r,500));setLit(null)}setPhase('input')},[])
  const start=useCallback(()=>{const first=SIMON_COLS[Math.floor(Math.random()*4)];setSeq([first]);setPlayerSeq([]);setLevel(1);flash([first])},[flash])
  const press=(col)=>{if(phase!=='input')return;const np=[...playerSeq,col];setPlayerSeq(np);if(np[np.length-1]!==seq[np.length-1]){setPhase('fail');setBest(b=>Math.max(b,level-1));setTimeout(()=>{setSeq([]);setPlayerSeq([]);setLevel(0);setPhase('start')},1500);return}
    if(np.length===seq.length){const next=[...seq,SIMON_COLS[Math.floor(Math.random()*4)]];setSeq(next);setLevel(next.length);setPlayerSeq([]);setTimeout(()=>flash(next),600)}}
  return(
    <div className="text-center">
      <p className="font-mono text-xs text-muted mb-1">Level: <span className="text-rose">{level}</span> · Best: <span className="text-gold">{best}</span></p>
      {phase==='fail'&&<p className="text-rose font-mono text-sm mb-3">❌ Wrong sequence!</p>}
      {phase==='watching'&&<p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-3 animate-pulse">Watch the sequence…</p>}
      {phase==='input'&&<p className="font-mono text-[9px] uppercase tracking-widest text-rose mb-3">Your turn! Repeat the sequence</p>}
      <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-6">
        {SIMON_COLS.map(c=>{const s=COL_STYLE[c];const on=lit===c;return(
          <motion.button key={c} onClick={()=>press(c)} whileTap={{scale:.9}}
            className={`aspect-square rounded-2xl border-2 transition-all duration-150 ${on?`${s.bg} ${s.border} ${s.glow}`:s.dim} ${phase==='input'?'cursor-pointer':'cursor-default'}`}/>
        )})}
      </div>
      {(phase==='start'||phase==='fail')&&<button onClick={start} className="px-8 py-3 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">{phase==='start'?'Start Game':'Try Again'}</button>}
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 9 — WOULD YOU RATHER
════════════════════════════════════════════ */
const WYR=[
  {a:'Have perfect hair every day',b:'Have flawless skin every day'},
  {a:'Be a world-famous chef',b:'Be a chart-topping music artist'},
  {a:'Trade forex full time',b:'Run a beauty empire'},
  {a:'Cook a meal for 100 people',b:'Style hair for 100 people'},
  {a:'Live in Lagos',b:'Live in London'},
  {a:'Only wear one lipstick shade forever',b:'Only wear one hairstyle forever'},
  {a:'Shop clothes unlimited',b:'Shop beauty products unlimited'},
  {a:'Know every language',b:'Know every instrument'},
  {a:'Wear heels every day',b:'Wear flats every day'},
  {a:'Never eat jollof rice again',b:'Never eat fried rice again'},
]
function WouldYouRather(){
  const[i,setI]=useState(0),[picks,setPicks]=useState([]),[done,setDone]=useState(false)
  const pick=(side)=>{setPicks(p=>[...p,side]);if(i+1>=WYR.length)setDone(true);else setI(x=>x+1)}
  const reset=()=>{setI(0);setPicks([]);setDone(false)}
  if(done)return(
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-2">
      <h3 className="font-display text-xl text-off-white mb-4">Your choices 💖</h3>
      {WYR.map((q,idx)=>(
        <div key={idx} className="flex gap-2 items-start text-sm"><span className="text-rose shrink-0">{picks[idx]==='a'?'✓':' '}</span><span className={picks[idx]==='a'?'text-off-white':'text-muted line-through text-xs'}>{q.a}</span><span className="text-muted mx-1">vs</span><span className={picks[idx]==='b'?'text-off-white':'text-muted line-through text-xs'}>{q.b}</span></div>
      ))}
      <button onClick={reset} className="mt-4 w-full py-3 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Play Again</button>
    </motion.div>
  )
  const q=WYR[i]
  return(
    <div>
      <div className="flex items-center gap-3 mb-5"><div className="flex-1 h-1.5 bg-border rounded-full"><motion.div className="h-full bg-gradient-to-r from-rose to-gold rounded-full" animate={{width:`${(i/WYR.length)*100}%`}}/></div><span className="font-mono text-xs text-muted">{i+1}/{WYR.length}</span></div>
      <p className="font-mono text-[9px] uppercase tracking-widest text-rose text-center mb-5">Would You Rather…</p>
      <AnimatePresence mode="wait"><motion.div key={i} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} className="flex flex-col gap-3">
        <button onClick={()=>pick('a')} className="p-5 bg-card border border-border rounded-2xl text-left font-body text-off-white hover:border-rose/50 hover:bg-rose/5 transition-all active:scale-[.98]">{q.a}</button>
        <div className="text-center font-script text-2xl text-rose/50">or</div>
        <button onClick={()=>pick('b')} className="p-5 bg-card border border-border rounded-2xl text-left font-body text-off-white hover:border-gold/50 hover:bg-gold/5 transition-all active:scale-[.98]">{q.b}</button>
      </motion.div></AnimatePresence>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 10 — NUMBER GUESS (1-100)
════════════════════════════════════════════ */
function NumberGuess(){
  const[secret]=useState(()=>Math.floor(Math.random()*100)+1)
  const[inp,setInp]=useState(''),[guesses,setGuesses]=useState([]),[won,setWon]=useState(false)
  const guess=()=>{const n=parseInt(inp);if(!n||n<1||n>100)return;const hint=n<secret?'Too low 🔥':n>secret?'Too high ❄️':'';const entry={n,hint,correct:n===secret};setGuesses(g=>[entry,...g]);if(n===secret)setWon(true);setInp('')}
  const reset=()=>window.location.reload()
  return(
    <div>
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-5 text-center">I'm thinking of a number between 1 and 100</p>
      {won&&<motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} className="text-center mb-5 p-4 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl"><p className="font-display text-2xl text-emerald-300">🎉 Got it in {guesses.length} guess{guesses.length!==1?'es':''}!</p><button onClick={()=>window.location.reload()} className="mt-3 px-5 py-2 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">New Game</button></motion.div>}
      {!won&&(<div className="flex gap-2 mb-5">
        <input type="number" min={1} max={100} value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==='Enter'&&guess()} placeholder="Enter 1–100" className="flex-1 bg-card border border-border rounded-xl px-4 py-3 font-display text-lg text-off-white text-center outline-none focus:border-rose/50 transition-colors"/>
        <button onClick={guess} className="px-5 py-3 bg-rose text-bg rounded-xl font-mono text-xs uppercase tracking-widest">Guess</button>
      </div>)}
      <div className="space-y-2 max-h-52 overflow-y-auto">
        {guesses.map((g,i)=><div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${g.correct?'bg-emerald-500/15 border-emerald-500/30':'bg-card border-border'}`}><span className="font-display text-xl text-off-white">{g.n}</span><span className="font-mono text-sm text-muted">{g.correct?'✓ Correct!':g.hint}</span></div>)}
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 11 — SPOT THE ODD ONE OUT
════════════════════════════════════════════ */
const ODD_ROUNDS=[
  {items:['Lipstick','Mascara','Blush','Spatula'],odd:3,exp:'Spatula is a kitchen tool'},
  {items:['EUR/USD','GBP/USD','XAU/USD','Braids'],odd:3,exp:'Braids is a hair style'},
  {items:['Egusi','Afang','Jollof','Skincare'],odd:3,exp:'Skincare is beauty, not food'},
  {items:['Gospel','R&B','Afrobeats','MetaTrader'],odd:3,exp:'MetaTrader is a trading platform'},
  {items:['Blush','Highlighter','Concealer','FTMO'],odd:3,exp:'FTMO is a prop trading firm'},
  {items:['Braids','Weaves','Locs','Candlestick'],odd:3,exp:'Candlestick is a trading chart pattern'},
  {items:['Jollof','Egusi','Afang','Mascara'],odd:3,exp:'Mascara is makeup, not food'},
]
function SpotTheOdd(){
  const[i,setI]=useState(0),[chosen,setChosen]=useState(null),[score,setScore]=useState(0),[done,setDone]=useState(false)
  const r=ODD_ROUNDS[i]
  const pick=(idx)=>{if(chosen!==null)return;setChosen(idx);if(idx===r.odd)setScore(s=>s+1);setTimeout(()=>{if(i+1<ODD_ROUNDS.length){setI(x=>x+1);setChosen(null)}else setDone(true)},1000)}
  const reset=()=>{setI(0);setChosen(null);setScore(0);setDone(false)}
  if(done)return(<motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center py-8"><Trophy size={36} className="text-gold mx-auto mb-3"/><p className="font-display text-5xl text-gradient-rose">{score}<span className="text-muted text-2xl">/{ODD_ROUNDS.length}</span></p><button onClick={reset} className="mt-5 px-7 py-2.5 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Play Again</button></motion.div>)
  return(
    <div>
      <div className="flex items-center gap-3 mb-5"><div className="flex-1 h-1.5 bg-border rounded-full"><motion.div className="h-full bg-gradient-to-r from-rose to-gold rounded-full" animate={{width:`${(i/ODD_ROUNDS.length)*100}%`}}/></div><span className="font-mono text-xs text-muted">{i+1}/{ODD_ROUNDS.length}</span></div>
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted text-center mb-5">Which one doesn't belong?</p>
      <AnimatePresence mode="wait"><motion.div key={i} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} className="grid grid-cols-2 gap-3">
        {r.items.map((item,idx)=>{let c='bg-card border-border text-off-white hover:border-rose/40 cursor-pointer';if(chosen!==null){if(idx===r.odd)c='bg-emerald-500/15 border-emerald-500/40 text-emerald-300';else if(idx===chosen)c='bg-rose/10 border-rose/40 text-rose';else c='opacity-40 border-border text-muted cursor-default'}
        return(<button key={idx} onClick={()=>pick(idx)} className={`p-5 rounded-2xl border font-body text-center transition-all duration-200 ${c}`}>{item}</button>)})}
      </motion.div></AnimatePresence>
      {chosen!==null&&<p className="font-mono text-xs text-muted text-center mt-3">{r.exp}</p>}
      <div className="mt-4 text-right font-mono text-xs text-muted">Score: <span className="text-rose">{score}</span></div>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 12 — ROSE CLICKER
════════════════════════════════════════════ */
function RoseClicker(){
  const[phase,setPhase]=useState('idle'),[score,setScore]=useState(0),[best,setBest]=useState(0),[timeLeft,setTimeLeft]=useState(15),[roses,setRoses]=useState([])
  const iRef=useRef(null)
  const spawn=()=>setRoses(r=>{if(r.length>=8)return r;const id=Date.now()+Math.random();return[...r,{id,row:Math.floor(Math.random()*4),col:Math.floor(Math.random()*4)}]})
  const start=()=>{setPhase('playing');setScore(0);setTimeLeft(15);setRoses([])
    const countdown=setInterval(()=>setTimeLeft(t=>{if(t<=1){clearInterval(countdown);clearInterval(iRef.current);setPhase('done');return 0}return t-1}),1000)
    iRef.current=setInterval(spawn,600)
  }
  useEffect(()=>{if(phase==='done')setBest(b=>Math.max(b,score))},[phase])
  const pop=(id)=>setRoses(r=>{const f=r.filter(x=>x.id!==id);if(f.length<r.length)setScore(s=>s+1);return f})
  return(
    <div className="text-center">
      <div className="flex justify-center gap-6 mb-4">
        <div><div className="font-display text-3xl text-gradient-rose">{score}</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">Score</div></div>
        <div><div className="font-display text-3xl text-gold">{timeLeft}s</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">Time</div></div>
        <div><div className="font-display text-3xl text-purple-400">{best}</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">Best</div></div>
      </div>
      {phase==='done'&&<p className="text-rose font-display text-xl mb-3">You scored {score}! {score>10?'🌹🌹🌹':score>5?'🌹🌹':'🌹'}</p>}
      <div className="grid grid-cols-4 gap-2 mb-5 max-w-xs mx-auto">
        {Array.from({length:16},(_,k)=>{const row=Math.floor(k/4),col=k%4;const rose=roses.find(r=>r.row===row&&r.col===col)
          return(<motion.button key={k} onClick={()=>rose&&pop(rose.id)} className={`aspect-square rounded-xl border text-2xl flex items-center justify-center transition-all duration-150 ${rose?'border-rose/40 bg-rose/10 cursor-pointer':'border-border bg-card cursor-default'}`}>
            {rose&&<motion.span initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}>{phase==='playing'?'🌹':''}</motion.span>}
          </motion.button>)
        })}
      </div>
      {(phase==='idle'||phase==='done')&&<button onClick={start} className="px-8 py-3 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">{phase==='idle'?'Start (15s)':'Play Again'}</button>}
      {phase==='playing'&&<p className="font-mono text-[9px] uppercase tracking-widest text-muted">Tap the roses! 🌹</p>}
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 13 — AFFIRMATION SPIN
════════════════════════════════════════════ */
const AFFIRMATIONS=[
  'I am confident, capable, and unstoppable 💪','I attract abundance in every area of my life ✨','My hustle is my crown 👑','I am worthy of every dream I chase 🌟','Beauty, brains & boldness — that\'s me 💅','I turn my passion into purpose every day 🔥','I am the energy I wish to see in the world 🌸','My story inspires others to live fully 🦋','Every day I grow stronger, wiser, and more radiant 🌺','I create the life I desire with intention and grace 🌙',
]
function AffirmationSpin(){
  const[spinning,setSpinning]=useState(false),[current,setCurrent]=useState(null),[history,setHistory]=useState([])
  const spin=()=>{if(spinning)return;setSpinning(true);let count=0;const interval=setInterval(()=>{setCurrent(AFFIRMATIONS[Math.floor(Math.random()*AFFIRMATIONS.length)]);count++;if(count>12){clearInterval(interval);const final=AFFIRMATIONS[Math.floor(Math.random()*AFFIRMATIONS.length)];setCurrent(final);setHistory(h=>[final,...h].slice(0,3));setSpinning(false)}},120)}
  return(
    <div className="text-center">
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-6">Spin for your daily affirmation 🌸</p>
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full border-4 border-rose/40 border-t-rose mx-auto mb-4 flex items-center justify-center" style={spinning?{animation:'spin 0.3s linear infinite'}:{}}>
          <Sparkles size={24} className={spinning?'text-rose animate-pulse':'text-rose'}/>
        </div>
        <AnimatePresence mode="wait">
          {current&&<motion.div key={current} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="bg-card border border-rose/20 rounded-2xl p-6 min-h-[80px] flex items-center justify-center">
            <p className="font-display text-lg text-off-white leading-snug">{current}</p>
          </motion.div>}
          {!current&&<div className="bg-card border border-border rounded-2xl p-6 min-h-[80px] flex items-center justify-center"><p className="font-body text-muted text-sm">Your affirmation will appear here…</p></div>}
        </AnimatePresence>
      </div>
      <button onClick={spin} disabled={spinning} className="px-8 py-3 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest disabled:opacity-60 transition-opacity">
        {spinning?'Spinning…':'Spin ✨'}
      </button>
      {history.length>0&&<div className="mt-5 text-left"><p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-2">Previous</p>{history.map((h,i)=><p key={i} className="font-body text-xs text-muted mb-1 truncate">{h}</p>)}</div>}
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 14 — TYPE THE QUOTE
════════════════════════════════════════════ */
const QUOTES=[
  'She believed she could, so she did.',
  'Elegance is the only beauty that never fades.',
  'A woman who knows her worth needs no validation.',
  'Work hard in silence, let success make the noise.',
  'She is clothed in strength and dignity.',
]
function TypeTheQuote(){
  const[qi,setQi]=useState(0),[inp,setInp]=useState(''),[start,setStart]=useState(null),[done,setDone]=useState(false),[wpm,setWpm]=useState(0),[accuracy,setAccuracy]=useState(0)
  const q=QUOTES[qi]
  const onChange=(v)=>{if(!start)setStart(Date.now());setInp(v);if(v===q){const mins=(Date.now()-start)/60000;const w=q.split(' ').length;setWpm(Math.round(w/mins));const correct=v.split('').filter((c,i)=>c===q[i]).length;setAccuracy(Math.round((correct/q.length)*100));setDone(true)}}
  const next=()=>{const ni=qi+1<QUOTES.length?qi+1:0;setQi(ni);setInp('');setStart(null);setDone(false);setWpm(0);setAccuracy(0)}
  return(
    <div>
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-3">Type the quote exactly as shown</p>
      <div className="bg-card border border-border rounded-2xl p-5 mb-4">
        <p className="font-display text-base leading-relaxed">{q.split('').map((c,i)=>{let col='text-muted';if(i<inp.length)col=inp[i]===c?'text-emerald-400':'text-rose';return(<span key={i} className={col}>{c}</span>)})}</p>
      </div>
      {done?(
        <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} className="text-center p-5 bg-card border border-emerald-500/30 rounded-2xl mb-4">
          <p className="font-display text-2xl text-emerald-400 mb-2">✓ Perfect!</p>
          <div className="flex justify-center gap-6"><div><div className="font-display text-3xl text-gold">{wpm}</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">WPM</div></div><div><div className="font-display text-3xl text-emerald-400">{accuracy}%</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">Accuracy</div></div></div>
          <button onClick={next} className="mt-4 px-6 py-2 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Next Quote</button>
        </motion.div>
      ):(
        <textarea value={inp} onChange={e=>onChange(e.target.value)} placeholder="Start typing…" rows={3}
          className="w-full bg-card border border-border rounded-xl px-4 py-3 font-body text-off-white resize-none outline-none focus:border-rose/50 transition-colors"/>
      )}
      <div className="flex justify-between font-mono text-xs text-muted mt-2"><span>{inp.length}/{q.length} chars</span><span>{qi+1}/{QUOTES.length}</span></div>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 15 — FASHION QUIZ
════════════════════════════════════════════ */
const FQ=[
  {q:'Which fabric is known as the "queen of fabrics"?',opts:['Cotton','Silk','Polyester','Linen'],ans:1},
  {q:'What color is considered a classic wardrobe staple?',opts:['Neon green','Hot pink','Black','Orange'],ans:2},
  {q:'What is the "little black dress" also called?',opts:['LBD','BDD','DLB','DBL'],ans:0},
  {q:'Which accessory completes almost any outfit?',opts:['A belt','A hat','A scarf','Statement earrings'],ans:3},
  {q:'What is "fast fashion"?',opts:['Clothes made quickly for sport','Trendy affordable mass-produced fashion','High-end couture','Vintage fashion'],ans:1},
  {q:'Ankara fabric originates from?',opts:['China','India','West Africa','Italy'],ans:2},
  {q:'What does "athleisure" mean?',opts:['Athletic wear only','Casual sportswear for everyday','Luxury activewear','Swimwear'],ans:1},
]
function FashionQuiz(){
  const[i,setI]=useState(0),[chosen,setChosen]=useState(null),[score,setScore]=useState(0),[done,setDone]=useState(false)
  const q=FQ[i]
  const pick=(idx)=>{if(chosen!==null)return;setChosen(idx);if(idx===q.ans)setScore(s=>s+1);setTimeout(()=>{if(i+1<FQ.length){setI(x=>x+1);setChosen(null)}else setDone(true)},900)}
  const reset=()=>{setI(0);setChosen(null);setScore(0);setDone(false)}
  if(done)return(<motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center py-8"><Trophy size={36} className="text-gold mx-auto mb-3"/><p className="font-display text-5xl text-gradient-rose">{score}<span className="text-muted text-2xl">/{FQ.length}</span></p><button onClick={reset} className="mt-5 px-7 py-2.5 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Play Again</button></motion.div>)
  return(
    <div>
      <div className="flex items-center gap-3 mb-5"><div className="flex-1 h-1.5 bg-border rounded-full"><motion.div className="h-full bg-gradient-to-r from-rose to-gold rounded-full" animate={{width:`${(i/FQ.length)*100}%`}}/></div><span className="font-mono text-xs text-muted">{i+1}/{FQ.length}</span></div>
      <AnimatePresence mode="wait"><motion.div key={i} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:.25}}>
        <h3 className="font-display text-lg font-light text-off-white mb-5 leading-snug">{q.q}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {q.opts.map((opt,idx)=>{let c='bg-card border-border text-muted hover:border-rose/40 hover:text-off-white cursor-pointer';if(chosen!==null){if(idx===q.ans)c='bg-emerald-500/15 border-emerald-500/50 text-emerald-300';else if(idx===chosen)c='bg-rose/10 border-rose/40 text-rose';else c='opacity-40 border-border text-muted cursor-default'}
          return(<button key={idx} onClick={()=>pick(idx)} className={`p-3.5 rounded-xl border font-body text-sm transition-all duration-200 ${c}`}><span className="font-mono text-[9px] text-rose/50 mr-2 uppercase">{String.fromCharCode(65+idx)}.</span>{opt}</button>)})}
        </div>
      </motion.div></AnimatePresence>
      <div className="mt-4 text-right font-mono text-xs text-muted">Score: <span className="text-rose">{score}</span></div>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 16 — THIS OR THAT (rapid fire)
════════════════════════════════════════════ */
const TOT=[
  ['Heels','Flats'],['Gold','Silver'],['Curly hair','Straight hair'],['Red lips','Nude lips'],['Bold eyeliner','No makeup'],['Long nails','Short nails'],['Perfume','Body mist'],['Dresses','Jeans'],['Hair up','Hair down'],['Glitter','Matte'],
]
function ThisOrThat(){
  const[i,setI]=useState(0),[results,setResults]=useState([]),[done,setDone]=useState(false),[timer,setTimer]=useState(5)
  const tRef=useRef(null)
  useEffect(()=>{if(done)return;tRef.current=setInterval(()=>setTimer(t=>{if(t<=1){pick('skip');return 5}return t-1}),1000);return()=>clearInterval(tRef.current)},[i,done])
  const pick=(side)=>{clearInterval(tRef.current);setResults(r=>[...r,{q:TOT[i],pick:side}]);const ni=i+1;if(ni>=TOT.length)setDone(true);else{setI(ni);setTimer(5)}}
  const reset=()=>{setI(0);setResults([]);setDone(false);setTimer(5)}
  if(done)return(
    <motion.div initial={{opacity:0}} animate={{opacity:1}}>
      <h3 className="font-display text-xl text-off-white mb-3">Your picks 💅</h3>
      <div className="space-y-1.5 mb-4">
        {results.map((r,idx)=><div key={idx} className="flex items-center gap-2 text-sm"><span className={`${r.pick===r.q[0]?'text-off-white font-medium':'text-muted line-through'}`}>{r.q[0]}</span><span className="text-muted text-xs">vs</span><span className={`${r.pick===r.q[1]?'text-off-white font-medium':'text-muted line-through'}`}>{r.q[1]}</span></div>)}
      </div>
      <button onClick={reset} className="w-full py-3 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Play Again</button>
    </motion.div>
  )
  const pair=TOT[i]
  return(
    <div className="text-center">
      <div className="flex justify-between items-center mb-4 px-2"><span className="font-mono text-xs text-muted">{i+1}/{TOT.length}</span><div className={`font-display text-2xl font-light ${timer<=2?'text-rose':'text-gold'}`}>{timer}s</div></div>
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-4">Pick one — fast! ⚡</p>
      <AnimatePresence mode="wait"><motion.div key={i} initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} exit={{opacity:0}} className="flex gap-4">
        <button onClick={()=>pick(pair[0])} className="flex-1 py-8 bg-rose/10 border border-rose/30 rounded-2xl font-display text-xl text-rose hover:bg-rose/20 active:scale-95 transition-all">{pair[0]}</button>
        <button onClick={()=>pick(pair[1])} className="flex-1 py-8 bg-gold/10 border border-gold/30 rounded-2xl font-display text-xl text-gold hover:bg-gold/20 active:scale-95 transition-all">{pair[1]}</button>
      </motion.div></AnimatePresence>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 17 — BEAUTY BUDGET
════════════════════════════════════════════ */
const BUDGET_ITEMS=[
  {name:'Lipstick',price:4500,emoji:'💄'},{name:'Foundation',price:12000,emoji:'🫙'},{name:'Mascara',price:6500,emoji:'👁️'},
  {name:'Perfume',price:18000,emoji:'🌸'},{name:'Eyeshadow Palette',price:9500,emoji:'🎨'},{name:'Blush',price:5000,emoji:'✨'},
  {name:'Setting Spray',price:7000,emoji:'💦'},{name:'Highlighter',price:6000,emoji:'⭐'},
]
function BeautyBudget(){
  const LIMIT=25000
  const[cart,setCart]=useState(new Set()),[done,setDone]=useState(false)
  const total=[...cart].reduce((s,n)=>{const item=BUDGET_ITEMS.find(x=>x.name===n);return s+(item?.price||0)},0)
  const toggle=(name)=>{if(done)return;const item=BUDGET_ITEMS.find(x=>x.name===name);const willAdd=!cart.has(name);if(willAdd&&total+(item?.price||0)>LIMIT)return;setCart(c=>{const s=new Set(c);s.has(name)?s.delete(name):s.add(name);return s})}
  const reset=()=>{setCart(new Set());setDone(false)}
  return(
    <div>
      <div className="flex items-center justify-between mb-4">
        <div><div className="font-mono text-[9px] uppercase tracking-widest text-muted">Budget</div><div className="font-display text-2xl text-gold">₦{LIMIT.toLocaleString()}</div></div>
        <div className="text-right"><div className="font-mono text-[9px] uppercase tracking-widest text-muted">Spent</div><div className={`font-display text-2xl ${total>LIMIT*0.9?'text-rose':'text-emerald-400'}`}>₦{total.toLocaleString()}</div></div>
      </div>
      <div className="w-full h-2 bg-border rounded-full mb-5 overflow-hidden"><div className="h-full bg-gradient-to-r from-emerald-400 to-rose rounded-full transition-all duration-300" style={{width:`${Math.min((total/LIMIT)*100,100)}%`}}/></div>
      {done&&<motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center p-4 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl mb-4"><p className="font-display text-xl text-emerald-300">🛍️ Shopping done!</p><p className="font-mono text-xs text-muted">Spent ₦{total.toLocaleString()} of ₦{LIMIT.toLocaleString()}</p><button onClick={reset} className="mt-3 px-5 py-1.5 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Shop Again</button></motion.div>}
      <div className="grid grid-cols-2 gap-2.5">
        {BUDGET_ITEMS.map(item=>{const sel=cart.has(item.name);const cantAdd=!sel&&total+item.price>LIMIT
          return(<button key={item.name} onClick={()=>toggle(item.name)} className={`p-3 rounded-xl border text-left transition-all duration-200 ${sel?'bg-rose/10 border-rose/40':'bg-card border-border'} ${cantAdd?'opacity-40 cursor-not-allowed':'cursor-pointer hover:border-rose/30'}`}>
            <div className="text-xl mb-1">{item.emoji}</div><div className="font-body text-xs text-off-white leading-tight">{item.name}</div><div className="font-mono text-[9px] text-gold mt-0.5">₦{item.price.toLocaleString()}</div>
          </button>)
        })}
      </div>
      {!done&&cart.size>0&&<button onClick={()=>setDone(true)} className="w-full mt-4 py-3 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Checkout 🛍️</button>}
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 18 — BUBBLE POP
════════════════════════════════════════════ */
const BUBBLE_EMOJIS=['🌹','💅','✨','🌸','👑','💄','🦋','🌺','💍','🎵']
function BubblePop(){
  const[phase,setPhase]=useState('idle'),[bubbles,setBubbles]=useState([]),[score,setScore]=useState(0),[best,setBest]=useState(0),[timeLeft,setTimeLeft]=useState(20)
  const nextId=useRef(0)
  useEffect(()=>{if(phase!=='playing')return
    const spawn=setInterval(()=>{const id=nextId.current++;setBubbles(b=>[...b,{id,emoji:BUBBLE_EMOJIS[Math.floor(Math.random()*BUBBLE_EMOJIS.length)],x:10+Math.random()*80,y:10+Math.random()*80}]);setTimeout(()=>setBubbles(b=>b.filter(x=>x.id!==id)),2500)},700)
    const tick=setInterval(()=>setTimeLeft(t=>{if(t<=1){clearInterval(spawn);clearInterval(tick);setPhase('done');return 0}return t-1}),1000)
    return()=>{clearInterval(spawn);clearInterval(tick)}
  },[phase])
  useEffect(()=>{if(phase==='done')setBest(b=>Math.max(b,score))},[phase])
  const pop=(id)=>{setBubbles(b=>b.filter(x=>x.id!==id));setScore(s=>s+1)}
  const start=()=>{setPhase('playing');setScore(0);setTimeLeft(20);setBubbles([])}
  return(
    <div className="text-center">
      <div className="flex justify-center gap-6 mb-3"><div><div className="font-display text-3xl text-gradient-rose">{score}</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">Popped</div></div><div><div className={`font-display text-3xl ${timeLeft<=5?'text-rose':'text-gold'}`}>{timeLeft}s</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">Time</div></div><div><div className="font-display text-3xl text-purple-400">{best}</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">Best</div></div></div>
      {phase==='done'&&<p className="text-rose font-display text-lg mb-3">You popped {score} bubbles! {score>15?'🌟🌟🌟':score>8?'🌟🌟':'🌟'}</p>}
      <div className="relative bg-card border border-border rounded-2xl overflow-hidden" style={{height:'220px'}}>
        {phase==='idle'&&<div className="absolute inset-0 flex items-center justify-center"><p className="font-body text-muted text-sm">Tap bubbles as they appear!</p></div>}
        {phase==='done'&&<div className="absolute inset-0 flex items-center justify-center"><p className="font-display text-xl text-off-white">Time's up! 🎉</p></div>}
        <AnimatePresence>
          {bubbles.map(b=>(
            <motion.button key={b.id} onClick={()=>pop(b.id)} initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0,opacity:0}} transition={{duration:.2}}
              className="absolute text-3xl hover:scale-125 active:scale-75 transition-transform cursor-pointer select-none"
              style={{left:`${b.x}%`,top:`${b.y}%`,transform:'translate(-50%,-50%)'}}>
              {b.emoji}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      {(phase==='idle'||phase==='done')&&<button onClick={start} className="mt-4 px-8 py-3 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">{phase==='idle'?'Start (20s)':'Play Again'}</button>}
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 19 — COLOR MATCH (Stroop effect)
════════════════════════════════════════════ */
const COLOR_MAP={rose:'#D4849A',gold:'#C9A84C',teal:'#14B8A6',lavender:'#A78BFA',coral:'#F97316'}
const COLOR_NAMES=Object.keys(COLOR_MAP)
function ColorMatch(){
  const[score,setScore]=useState(0),[streak,setStreak]=useState(0),[best,setBest]=useState(0),[current,setCurrent]=useState(null),[result,setResult]=useState(null)
  const gen=useCallback(()=>{const word=COLOR_NAMES[Math.floor(Math.random()*COLOR_NAMES.length)];let color=COLOR_NAMES[Math.floor(Math.random()*COLOR_NAMES.length)];while(color===word)color=COLOR_NAMES[Math.floor(Math.random()*COLOR_NAMES.length)];setCurrent({word,color,answer:color});setResult(null)},[])
  useEffect(()=>{gen()},[gen])
  const pick=(name)=>{if(!current||result)return;const ok=name===current.answer;setResult(ok?'correct':'wrong');if(ok){const ns=streak+1;setStreak(ns);setBest(b=>Math.max(b,ns));setScore(s=>s+1)}else setStreak(0);setTimeout(gen,700)}
  if(!current)return null
  return(
    <div className="text-center">
      <div className="flex justify-center gap-6 mb-4"><div><div className="font-display text-2xl text-gradient-rose">{score}</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">Score</div></div><div><div className="font-display text-2xl text-gold">{streak}</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">Streak</div></div><div><div className="font-display text-2xl text-purple-400">{best}</div><div className="font-mono text-[8px] uppercase tracking-widest text-muted">Best</div></div></div>
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-2">Tap the <span className="text-rose">colour</span> of the ink, not the word!</p>
      <div className="flex items-center justify-center h-24 mb-6">
        <AnimatePresence mode="wait"><motion.p key={current.word+current.color} initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} exit={{opacity:0}} className="font-display text-5xl font-light uppercase tracking-widest" style={{color:COLOR_MAP[current.color]}}>{current.word}</motion.p></AnimatePresence>
      </div>
      {result&&<p className={`font-mono text-sm mb-3 ${result==='correct'?'text-emerald-400':'text-rose'}`}>{result==='correct'?'✓ Correct!':'✗ Wrong!'}</p>}
      <div className="flex flex-wrap justify-center gap-3">
        {COLOR_NAMES.map(name=><button key={name} onClick={()=>pick(name)} className="w-12 h-12 rounded-full border-2 border-border hover:border-off-white transition-all active:scale-90" style={{background:COLOR_MAP[name]}}/>)}
      </div>
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted mt-3">Tap the circle that matches the ink colour</p>
    </div>
  )
}

/* ════════════════════════════════════════════
   GAME 20 — MOOD BOARD
════════════════════════════════════════════ */
const MOOD_EMOJIS=['🌹','✨','🦋','🌙','🔥','💧','🌸','⭐','🌊','🍃','💎','🌈','🎵','💅','👑']
const MOOD_READINGS={
  '🌹🌙💎':'Elegant & mysterious — you have refined taste and move with quiet power.',
  '🔥⭐✨':'Bold & radiant — you light up every room with unstoppable energy.',
  '🌸🦋🌈':'Free-spirited & joyful — you see beauty in everything and everyone.',
  '💧🌊🍃':'Calm & grounded — your peace is your superpower and people feel safe with you.',
  '🎵💅👑':'Confident & expressive — a natural performer who owns every stage.',
  default:'Multidimensional & unique — you contain worlds. No single label can hold you.',
}
function getMoodReading(picks){const key=picks.join('');return MOOD_READINGS[key]||MOOD_READINGS.default}
function MoodBoard(){
  const[picks,setPicks]=useState([]),[done,setDone]=useState(false)
  const toggle=(e)=>{if(done)return;if(picks.includes(e))setPicks(p=>p.filter(x=>x!==e));else if(picks.length<3)setPicks(p=>[...p,e])}
  const reveal=()=>{if(picks.length===3)setDone(true)}
  const reset=()=>{setPicks([]);setDone(false)}
  return(
    <div className="text-center">
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-2">Pick exactly 3 emojis that represent your mood</p>
      <p className="font-body text-sm text-rose mb-5">{picks.length}/3 selected</p>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {MOOD_EMOJIS.map(e=><motion.button key={e} onClick={()=>toggle(e)} whileTap={{scale:.88}}
          className={`w-12 h-12 text-2xl rounded-2xl border-2 flex items-center justify-center transition-all duration-150 ${picks.includes(e)?'border-rose bg-rose/15 scale-110':'border-border bg-card hover:border-rose/30'}`}>
          {e}</motion.button>)}
      </div>
      {done?(
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="bg-card border border-rose/20 rounded-2xl p-6 mb-4">
          <div className="flex justify-center gap-2 text-3xl mb-3">{picks}</div>
          <p className="font-display text-base text-off-white leading-relaxed">{getMoodReading(picks)}</p>
          <button onClick={reset} className="mt-4 px-6 py-2 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest">Try Again</button>
        </motion.div>
      ):(
        <button onClick={reveal} disabled={picks.length!==3} className="px-8 py-3 bg-rose text-bg rounded-full font-mono text-xs uppercase tracking-widest disabled:opacity-40 transition-opacity">Reveal My Mood ✨</button>
      )}
    </div>
  )
}

/* ════════════════════════════════════════════
   GAMES REGISTRY
════════════════════════════════════════════ */
const GAMES=[
  {id:'memory',label:'Memory Match',icon:Brain,desc:'Match all pairs',color:'#D4849A',component:MemoryGame},
  {id:'trivia',label:"Angela's Trivia",icon:HelpCircle,desc:'7-question quiz',color:'#C9A84C',component:TriviaGame},
  {id:'reaction',label:'Reaction Tap',icon:Zap,desc:'Test reflexes',color:'#7EB8F7',component:ReactionGame},
  {id:'scramble',label:'Word Scramble',icon:Shuffle,desc:'Unscramble the word',color:'#A78BFA',component:WordScramble},
  {id:'truefalse',label:'True or False',icon:CheckCircle,desc:'Fact or fiction?',color:'#34D399',component:TrueFalse},
  {id:'emoji',label:'Emoji Decode',icon:Smile,desc:'Decode the phrase',color:'#F97316',component:EmojiDecode},
  {id:'hilo',label:'Higher or Lower',icon:TrendingUp,desc:'Guess the trend',color:'#60A5FA',component:HigherOrLower},
  {id:'simon',label:'Simon Says',icon:LayoutGrid,desc:'Colour memory',color:'#F472B6',component:SimonSays},
  {id:'wyr',label:'Would You Rather',icon:GitBranch,desc:'A or B?',color:'#FB923C',component:WouldYouRather},
  {id:'numguess',label:'Number Guess',icon:Hash,desc:'Guess 1–100',color:'#4ADE80',component:NumberGuess},
  {id:'oddone',label:'Spot the Odd',icon:Eye,desc:"Find what doesn't fit",color:'#E879F9',component:SpotTheOdd},
  {id:'clicker',label:'Rose Clicker',icon:Heart,desc:'Click roses fast!',color:'#FB7185',component:RoseClicker},
  {id:'affirmation',label:'Daily Affirmation',icon:Sparkles,desc:'Spin for positivity',color:'#FDE68A',component:AffirmationSpin},
  {id:'typequote',label:'Type the Quote',icon:AlignLeft,desc:'Accuracy challenge',color:'#6EE7B7',component:TypeTheQuote},
  {id:'fashion',label:'Fashion Quiz',icon:Star,desc:'Style knowledge',color:'#F9A8D4',component:FashionQuiz},
  {id:'thisorthat',label:'This or That',icon:Repeat,desc:'Rapid fire choices',color:'#93C5FD',component:ThisOrThat},
  {id:'budget',label:'Beauty Budget',icon:ShoppingBag,desc:'Shop within budget',color:'#D4849A',component:BeautyBudget},
  {id:'bubble',label:'Bubble Pop',icon:Circle,desc:'Pop before they pop!',color:'#FCA5A5',component:BubblePop},
  {id:'colormatch',label:'Color Match',icon:Palette,desc:'Match the ink colour',color:'#D8B4FE',component:ColorMatch},
  {id:'moodboard',label:'Mood Board',icon:Heart,desc:'Pick your vibe',color:'#FBB6CE',component:MoodBoard},
]

/* ════════════════════════════════════════════
   PAGE
════════════════════════════════════════════ */
export default function Games(){
  const[active,setActive]=useState(null)

  if(active){
    const game=GAMES.find(g=>g.id===active)
    const GameComponent=game.component
    return(
      <motion.div {...pageTransition}>
        <div className="max-w-2xl mx-auto px-5 md:px-12 pt-20 pb-10">
          <button onClick={()=>setActive(null)} className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-rose transition-colors mb-6">
            <ArrowLeft size={14}/> All Games
          </button>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0" style={{background:game.color+'25',color:game.color}}>
              <game.icon size={18}/>
            </div>
            <div>
              <h2 className="font-display text-xl text-off-white leading-tight">{game.label}</h2>
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted">{game.desc}</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-3xl p-5 md:p-7">
            <GameComponent/>
          </div>
        </div>
      </motion.div>
    )
  }

  return(
    <motion.div {...pageTransition}>
      <HeroSection
        label="Games"
        title={<>Play &amp; <span className="italic" style={{color:'#D4849A'}}>Have Fun</span></>}
        subtitle="20 mini-games inspired by Angela's World"
        description="Memory, trivia, reaction tests, word games, beauty budgets and more — all built in-browser, no downloads needed."
        accentColor="#D4849A"
      />
      <section className="max-w-4xl mx-auto px-5 md:px-12 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {GAMES.map((g,i)=>(
            <motion.button
              key={g.id}
              onClick={()=>setActive(g.id)}
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:.4,delay:i*.04}}
              whileTap={{scale:.95}}
              className="bg-card border border-border rounded-2xl p-4 text-left hover:border-rose/30 active:scale-95 transition-all duration-200 group"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-all duration-200 group-hover:scale-110" style={{background:g.color+'22',color:g.color}}>
                <g.icon size={16}/>
              </div>
              <p className="font-display text-sm font-medium text-off-white leading-tight mb-1">{g.label}</p>
              <p className="font-mono text-[8px] tracking-wide text-muted leading-tight">{g.desc}</p>
            </motion.button>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

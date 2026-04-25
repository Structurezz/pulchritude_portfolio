import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Shield, BarChart2, Award } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionLabel from '../components/SectionLabel'
import StatCard from '../components/StatCard'
import TimelineItem from '../components/TimelineItem'
import SkillTag from '../components/SkillTag'
import TradingViewWidget from '../components/TradingViewWidget'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

const timeline = [
  {
    role: 'Forex Trader & Market Analyst',
    company: 'Zili Capitals',
    period: 'Dec 2022 — Present',
    description:
      'Leading FX trade execution and market analysis across major and exotic currency pairs. Developing strategic trade setups based on price action, market structure, and liquidity analysis.',
  },
  {
    role: 'Prop Firm Forex Trader',
    company: 'FTMO | FundedNext',
    period: 'Jan 2023 — Sep 2025',
    description:
      'Successfully passed multiple funded challenges and maintained consistent profitability on prop firm accounts. Adhered to strict drawdown rules with 1–2% risk per trade discipline.',
  },
  {
    role: 'Forex & Gold Risk Trader',
    company: 'Audacity Capital',
    period: 'Mar 2023 — Jun 2025',
    description:
      'Specialised in XAU/USD and major FX pairs with a risk-first approach. Maintained disciplined position sizing and drawdown management on funded accounts.',
  },
  {
    role: 'Forex & Gold Technical Analyst',
    company: 'Traderoom Africa',
    period: 'Jan 2023 — Dec 2023',
    description:
      'Produced detailed technical analysis reports for educational and institutional clients. Covered EUR/USD, GBP/USD, and XAU/USD with multi-timeframe analysis.',
  },
  {
    role: 'Funded Forex Trader',
    company: 'The5ers | FundedNext',
    period: 'Mar 2023 — Sep 2024',
    description:
      'Managed funded accounts with consistent performance metrics, demonstrating disciplined risk management and trading journal accountability.',
  },
  {
    role: 'Independent Forex Market Analyst',
    company: 'Forexbrokers.ng',
    period: 'Jun 2023 — Mar 2025',
    description:
      'Published independent market analyses and trade ideas for Nigerian retail forex traders. Covered macro fundamentals and technical confluences.',
  },
]

const skills = [
  'Price Action', 'Market Structure', 'Liquidity Zones', 'RSI', 'MACD',
  'Fibonacci Retracement', 'Drawdown Control', 'Position Sizing', 'Multi-Timeframe Analysis',
  'Candlestick Patterns', 'Support & Resistance', 'Risk-Reward Ratio', 'Trade Journaling',
  'Fundamental Analysis', 'Economic Calendar', 'Session Analysis',
]

const tools = [
  'MetaTrader 4 (MT4)', 'MetaTrader 5 (MT5)', 'TradingView', 'FTMO Dashboard',
  'FundedNext Portal', 'The5ers Portal', 'Hantec Markets', 'Pocket Option',
  'Forex Factory', 'Myfxbook', 'Investing.com',
]

const certifications = [
  {
    title: 'FRM Part I',
    issuer: 'GARP — Global Association of Risk Professionals',
    year: '2023',
    icon: Shield,
  },
  {
    title: 'Forex Trading Certification',
    issuer: 'London Academy of Trading',
    year: '2023',
    icon: Award,
  },
]

export default function Trading() {
  return (
    <motion.div {...pageTransition}>
      <HeroSection
        label="Forex & Commodities"
        title={
          <>
            Trading the{' '}
            <span className="text-gradient-gold italic">Markets</span>
          </>
        }
        subtitle="Prop Trader — Technical Analyst — Risk Specialist"
        description="With over 3 years of active trading experience across 6+ global markets, Angela applies precision risk management and deep technical analysis to consistently navigate FX and commodities markets."
        accentColor="#3B82F6"
      />

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="3+" label="Prop Firms Funded" delay={0} />
          <StatCard value="1–2%" label="Risk Per Trade" delay={0.1} />
          <StatCard value="2022" label="Trading Since" delay={0.2} />
          <StatCard value="6+" label="Markets Traded" delay={0.3} />
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionLabel>Experience</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-12"
        >
          Career Timeline
        </motion.h2>
        <div>
          {timeline.map((item, i) => (
            <TimelineItem key={i} {...item} index={i} />
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Core Skills</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-light text-off-white mb-10"
          >
            Technical Arsenal
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <SkillTag key={s} index={i}>{s}</SkillTag>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <SectionLabel>Platforms & Tools</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-10"
        >
          Tools of the Trade
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border p-4 flex items-center gap-3 hover:border-gold/40 transition-all duration-300 group"
            >
              <BarChart2 size={14} className="text-gold/50 group-hover:text-gold flex-shrink-0" />
              <span className="font-body text-sm text-muted group-hover:text-off-white transition-colors">
                {tool}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Certifications</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-light text-off-white mb-10"
          >
            Professional Credentials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border p-8 hover:border-gold/40 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(201,168,76,0.08)]"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors">
                    <cert.icon size={22} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-off-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="font-body text-sm text-muted mb-3">{cert.issuer}</p>
                    <span className="font-mono text-xs tracking-widest text-gold border border-gold/30 px-3 py-1">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* LIVE CHART */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <SectionLabel>Live Markets</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-light text-off-white mb-4"
        >
          Live Chart
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-muted mb-6"
        >
          Real-time market data powered by TradingView. Switch symbols directly on the chart.
        </motion.p>

        {/* Symbol quick-select */}
        <SymbolSelector />
      </section>
    </motion.div>
  )
}

const SYMBOLS = [
  { label: 'EUR/USD', value: 'FX:EURUSD' },
  { label: 'GBP/USD', value: 'FX:GBPUSD' },
  { label: 'XAU/USD', value: 'TVC:GOLD' },
  { label: 'USD/JPY', value: 'FX:USDJPY' },
  { label: 'BTC/USD', value: 'BITSTAMP:BTCUSD' },
]

function SymbolSelector() {
  const [active, setActive] = useState('FX:EURUSD')
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-5">
        {SYMBOLS.map(s => (
          <button
            key={s.value}
            onClick={() => setActive(s.value)}
            className={`font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-200 ${
              active === s.value
                ? 'bg-gold text-bg border-gold'
                : 'border-border text-muted hover:border-gold/40 hover:text-gold'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <TradingViewWidget symbol={active} height={520} />
      </motion.div>
    </>
  )
}

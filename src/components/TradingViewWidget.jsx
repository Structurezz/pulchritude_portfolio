import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function TradingViewWidget({ symbol = 'FX:EURUSD', height = 500 }) {
  const container = useRef(null)
  const { isDark } = useTheme()

  useEffect(() => {
    if (!container.current) return
    // Clear any previous widget
    container.current.innerHTML = ''

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval: 'D',
      timezone: 'Africa/Lagos',
      theme: isDark ? 'dark' : 'light',
      style: '1',
      locale: 'en',
      allow_symbol_change: true,
      hide_side_toolbar: false,
      calendar: false,
      support_host: 'https://www.tradingview.com',
    })

    container.current.appendChild(script)
  }, [symbol, isDark])

  const isFluid = height === '100%'

  return (
    <div
      ref={container}
      className={`tradingview-widget-container w-full overflow-hidden border border-border ${isFluid ? 'h-full rounded-xl' : 'rounded-2xl'}`}
      style={isFluid ? { height: '100%' } : { height }}
    />
  )
}

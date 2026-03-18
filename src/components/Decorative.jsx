export function WaveDivider({ flip = false, color = 'var(--bg-2)' }) {
  return (
    <div className={`wave ${flip ? 'wave--flip' : ''}`}>
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill={color} />
      </svg>
    </div>
  )
}

export function FlowLine() {
  return (
    <div className="flow-line">
      <svg viewBox="0 0 200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M100 0C60 100 140 200 100 300C60 400 140 500 100 600C60 700 140 800 100 800" 
          stroke="url(#flowGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.15"/>
        <defs>
          <linearGradient id="flowGrad" x1="100" y1="0" x2="100" y2="800" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" stopOpacity="0"/>
            <stop offset="0.3" stopColor="#6366f1"/>
            <stop offset="0.7" stopColor="#22d3ee"/>
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

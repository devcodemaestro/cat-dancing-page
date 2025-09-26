import './AnimationControls.css'

function AnimationControls({ animationSpeed, changeSpeed, isAnimating }) {
  const speeds = [
    { value: 0.5, label: '🐌 느리게' },
    { value: 1, label: '🚶 보통' },
    { value: 1.5, label: '🏃 빠르게' },
    { value: 2, label: '⚡ 매우 빠르게' }
  ]

  if (!isAnimating) return null

  return (
    <div className="animation-controls">
      <h3>🎵 댄스 속도 조절</h3>
      <div className="speed-buttons">
        {speeds.map((speed) => (
          <button
            key={speed.value}
            onClick={() => changeSpeed(speed.value)}
            className={`speed-button ${animationSpeed === speed.value ? 'active' : ''}`}
          >
            {speed.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AnimationControls
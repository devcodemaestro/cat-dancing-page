import catSvg from '../assets/images/cat.svg'
import AnimationControls from './AnimationControls'
import { useAnimation } from '../hooks/useAnimation'
import './DancingCat.css'

function DancingCat() {
  const { isAnimating, animationSpeed, toggleAnimation, changeSpeed } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catSvg} alt="댄싱 고양이" className="cat-image" />
      </div>
      <button
        onClick={toggleAnimation}
        className={`dance-button ${isAnimating ? 'active' : ''}`}
      >
        {isAnimating ? '🛑 멈추기' : '🕺 춤추기'}
      </button>
      <AnimationControls
        animationSpeed={animationSpeed}
        changeSpeed={changeSpeed}
        isAnimating={isAnimating}
      />
    </div>
  )
}

export default DancingCat
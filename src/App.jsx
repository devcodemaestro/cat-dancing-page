import './App.css'
import DancingCat from './components/DancingCat'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 댄싱 고양이</h1>
        <p>귀여운 고양이의 춤추는 모습을 감상하세요!</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App

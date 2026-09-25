import { useState } from 'react'
import './App.css'

function App() {
  const [btnText, setBtnText] = useState('Acknowledge Deployment')
  const [isCelebrated, setIsCelebrated] = useState(false)

  const handleCelebrate = () => {
    setBtnText('Awesome! 🎉')
    setIsCelebrated(true)
    setTimeout(() => {
      setBtnText('Acknowledge Deployment')
      setIsCelebrated(false)
    }, 3000)
  }

  return (
    <div className="container">
      <div className="background-animation"></div>
      
      <header>
        <div className="status-badge">
          <span className="pulse"></span>
          System Online
        </div>
        <h1>DevOps Monitoring & CI/CD</h1>
        <p>Ostad - DevOps Batch 14 Assignment 6</p>
      </header>

      <main>
        <div className="card-grid">
          <div className="glass-card">
            <div className="icon">🚀</div>
            <h3>CI/CD Pipeline</h3>
            <p>Automated build and artifact generation using GitHub Actions Self-Hosted Runners.</p>
          </div>
          
          <div class="glass-card">
            <div className="icon">📊</div>
            <h3>Monitoring</h3>
            <p>Real-time system metrics collected by Node Exporter and stored in Prometheus.</p>
          </div>

          <div className="glass-card">
            <div className="icon">📈</div>
            <h3>Visualization</h3>
            <p>Beautiful monitoring dashboards built with Grafana for immediate insights.</p>
          </div>

          <div className="glass-card">
            <div className="icon">📝</div>
            <h3>Log Aggregation</h3>
            <p>Centralized logging using Grafana Loki and Grafana Alloy.</p>
          </div>
        </div>
      </main>

      <footer>
        <button 
          className={`cta-button ${isCelebrated ? 'celebrated' : ''}`} 
          onClick={handleCelebrate}
        >
          {btnText}
        </button>
        <p className="copyright">Developed for Ostad DevOps Batch 14</p>
      </footer>
    </div>
  )
}

export default App

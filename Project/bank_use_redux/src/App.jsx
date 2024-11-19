import HistoryBank from './components/HistoryBank/HistoryBank'
import HomePage from './components/HomePage'
import Modal from './components/Modal/Modal'

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'grid',
      placeContent: 'center'
    }}>
      <HomePage />
      <Modal />
      <HistoryBank />
    </div>
  )
}

export default App

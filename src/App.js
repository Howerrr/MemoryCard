import './App.css';
import Memorycard from './component/Memorycard'

function App() {
  return (
    <div className="home-page">
      <div className="container">
        <div className='left'>小</div>
        <div className='middle'>
          <div className='memorycards'>
            <Memorycard />
            <Memorycard />
            <Memorycard />
            <Memorycard />
            <Memorycard />
          </div>
          <div className='nav'>
            <span className='dot'>.</span>
            <span className='dot'>.</span>
            <span className='dot'>.</span>
          </div>
        </div>
        <div className='right'>大</div>
      </div>
    </div>
  );
}

export default App;

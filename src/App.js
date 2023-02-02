import logo from './logo.svg';
import './App.scss';
import { Topbar } from './components/topbar/Topbar';
import { Slider } from './components/slider/Slider';
import { News } from './components/news/News';

function App() {
  return (
    <div className="wrapper">
      <div className='block  block--black'>
      <Topbar/> 
      </div>
      <div className='block  mTop'>
      <Slider/> 
      </div>
      <div className='news block'>
      <News/>
      </div>
      
      
    </div>
  );
}

export default App;

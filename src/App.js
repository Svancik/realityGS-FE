import logo from './logo.svg';
import './App.scss';
import { Topbar } from './components/topbar/Topbar';
import { Slider } from './components/slider/Slider';

function App() {
  return (
    <div className="wrapper">
      <div className='block skewed-right'>
      <Topbar/> 
      </div>
      <div className='block skewed-left mTop'>
      <Slider/> 
      </div>
      <div className='block news'>
      </div>
      
      
    </div>
  );
}

export default App;

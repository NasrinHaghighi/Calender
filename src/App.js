
import './App.css';

import Calender from './component/Calender/Calender';
import Scheduled from './component/Scheduled/Scheduled';
function App() {
  return (
    <div className="App">
    <div className='main'>
     <Calender />
     <Scheduled />
     </div>
    </div>
  );
}

export default App;

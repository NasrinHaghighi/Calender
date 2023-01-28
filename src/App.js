
import './App.css';

import Calender from './component/Calender/Calender';
import Header from './component/Header/Header';
import Scheduled from './component/Scheduled/Scheduled';
function App() {
  return (
    <div className="App">
      <Header />
    <div className='main'>
     <Calender />
     <Scheduled />
     </div>
    </div>
  );
}

export default App;

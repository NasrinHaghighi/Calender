
import './App.css';

import Calender from './component/Calender/Calender';
import Header from './component/Header/Header';
import Scheduled from './component/Scheduled/Scheduled';
import Information from './component/Inforamtion/Information';
function App() {
  return (
    <div className="App">
      <Header />
    <div className='main'>
     <Calender />
     <Scheduled />
     <Information />
     </div>
    </div>
  );
}

export default App;

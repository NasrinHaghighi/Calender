
import './App.css';

import Calender from './component/Calender/Calender';
import Header from './component/Header/Header';
import Scheduled from './component/Scheduled/Scheduled';
import Information from './component/Inforamtion/Information';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
    <div className='main'>
      <Calender />
      <Scheduled />
     <Information />
     <div>gggggggggggg</div>  
     </div>
     <Footer />
    </div>
  );
}

export default App;

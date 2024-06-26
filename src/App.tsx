import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistics';

import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';


function App() {
  return (
    <div className="App">
      <div className="global-container">
        {/* <Popup/> */}
        <div className="container">   
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/month-statistics' element={<MonthStatistics/>}/>
          </Routes>
        </div>        
      </div>
    </div>
  );
}

export default App;

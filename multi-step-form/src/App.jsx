import React from 'react';
import Container1 from './Components/Container1';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Container2 from './Components/Container2';
import MonthlyContent from './Components/MonthlyContent';
import YearlyContent from './Components/YearlyContent';
import { YearlyfinishPage } from './Components/YearlyfinishPage';
import { MonthlyfinishPage } from './Components/MonthlyfinishPage';
import { LastPage } from './Components/LastPage';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container1/>}/>
        <Route path='/About' element={<Container2/>}/>
        <Route path='/Info3' element={<MonthlyContent/>}/>
        <Route path= "/Info4" element={<YearlyContent/>}/>
        <Route path='/Info5' element={<MonthlyfinishPage/>}/>
        <Route path='/Info6' element={<YearlyfinishPage/>}/>
        <Route path='/last' element={<LastPage/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App

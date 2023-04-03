
import './App.css';
import './css/main.css'
//비주얼메뉴 헤더
import Goods from './page/Goods.jsx'
import Menu from './page/Menu.jsx'
import Visual from './page/Visual.jsx'
import Detail from './page/Detail.jsx'
import { Routes, Route, Link,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios'
function App() {
  let [goods,setGoods]=useState([]);
  let {id}=useParams()
  return (
    <>
     <Menu/>
      <Routes>
        <Route path="/" element={
          <>
            <Visual/>
          <section style={{width:'80%',margin:'auto'}}> 
            <Goods goods={goods} setGoods={setGoods}/>
          </section>
          </>
        }/>
        <Route path="/detail/:id" goods={goods} setGoods={setGoods}/>
      </Routes>
    </>
  );
}

export default App;

import axios from "axios"
import { useEffect, useState } from "react"
import styled from 'styled-components'
import {Link,useParams } from 'react-router-dom'

function Goods ({goods,setGoods}) {
  useEffect(()=>{
    axios.get('/data/prd.json').then((data)=>{
      setGoods(data.data.products)
    },[setGoods])
  })
  let {id}=useParams()
  const Goods =styled.div`
  float:left;
  width:22%;
  margin-left:2%;
  ` 
  return(
    <>
     <div>RANKING</div>
     {
      goods.map((a,i)=>{
        return(
          <>
            <Goods>
              <div><Link to="/detail/:id"><img src={goods[i].img} style={{width:'100%'}}/></Link></div>
              <div className="goods_name">{goods[i].name}</div>
              <div className="goods_price">{goods[i].price}</div>
            </Goods>
          </>
        )
      })
     }
    </>
    
  )
  
} 


export default Goods
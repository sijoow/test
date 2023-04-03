
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
function Detail (){
  const [goods,setGoods]=useState({});
  let {id} =useParams()
  //디테일 안쪽에서 id값을 찾아야함
  useEffect(()=>{
      axios.get('/data/prd.json').then((data)=>{
        setGoods(data.data.products.find((prd)=>prd.id===parseInt(id)))
    })
  },[id]);

  return(
    <>
      <div>
       <div className="prd_img"><img src={goods.img}/></div>
      </div>
    </>
  )
}
export default Detail

import styled from 'styled-components'
import '../css/main.css'
import { Routes, Route, Link,useParams } from 'react-router-dom'
function Menu () {
  return(
    <>
      <Gnb>
        <div className="logo">
          <Link to="/"><img src={process.env.PUBLIC_URL + '/logo.png'} alt="" /></Link>
        </div>
        <ul className="list_cate">
          <li><Link to="/">APPAREL</Link></li>
          <li><Link to="/">CAP</Link></li>
          <li><Link to="/">SHOES</Link></li>
          <li><Link to="/">BAG</Link></li>
          <li><Link to="/">ACC&PET</Link></li>
          <li><Link to="/">KID</Link></li>
        </ul>
      </Gnb>
    </>
  )
}
let Gnb = styled.div`
border:1px solid red;
width:100%;height:60px;  
`
export default Menu

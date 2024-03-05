import {Link, useNavigate} from 'react-router-dom'


export function Header (){
    const navigate = useNavigate();






    return   <nav>
    <div className ="nav">
   
   
   
   
        <Link to="/"> <div className ="nav__logo"> </div></Link>
      

        <div className="nav__menu"> 
        <h3 className="nav__menu__item"> <Link to="/">Home</Link></h3>
        <h3 className="nav__menu__item"> <Link to="/contacts">Contact</Link></h3>
        <h3 className="nav__menu__item"> <Link to="/about">About</Link></h3>
        <button className='btn' onClick={()=>navigate(-1)}>back</button>
        <button className='btn' onClick={()=>navigate(+1)}>forw</button>

        </div>
    </div>
   </nav>
   
   }
   
   
  //  export default Header
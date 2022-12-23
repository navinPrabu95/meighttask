import React,{useState} from 'react'
import './NavBar.css'
import { ImMenu } from 'react-icons/im'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useNavigate, NavLink } from 'react-router-dom'



const NavBar = () => {

    const [show, setShow] = useState(false);

     const Navigate = useNavigate()


    const setLogOut = () => {
        localStorage.clear()
        Navigate('/signin')
    }

    return (
        <div className='nav_container'>
            <div className='nav_main'>
                <div className='nav_main_left'>
                   <h6>Company Info <IoMdArrowDropdown/></h6>
                </div>
                <div className='nav_main_menu'>
                  <ImMenu onClick={()=>setShow(!show)}/>
                </div>
                <div className='nav_main_right'>
                   <nav>
                     <li><NavLink className='nav_links' to='/counter'>Counter</NavLink></li>
                     <li><NavLink className='nav_links' to='/sample'>Sample</NavLink></li>
                     <li><NavLink className='nav_links' to='/'>SignUp</NavLink></li>
                     <li><NavLink className='nav_links' to='/signin'>SignIn</NavLink></li>
                     <li><NavLink className='nav_links' onClick={setLogOut}>SignOut</NavLink></li>
                   </nav>
                </div>
            </div>
            <div className={show ?'side_nav_show':'side_nav_hide'}>
                   <nav>
                     <li><h6>Company Info <IoMdArrowDropdown/></h6></li>
                     <li><NavLink className='nav_links' to='/counter'>Counter</NavLink></li>
                     <li><NavLink className='nav_links' to='/sample'>Sample</NavLink></li>
                     <li><NavLink className='nav_links' to='/'>SignUp</NavLink></li>
                     <li><NavLink className='nav_links' to='/signin'>SignIn</NavLink></li>
                     <li><NavLink className='nav_links' onClick={setLogOut}>SignOut</NavLink></li>
                   </nav>
                </div>
        </div>
    )
}

export default NavBar
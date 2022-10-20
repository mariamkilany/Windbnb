import React from 'react'
import { BiSearch } from "react-icons/bi";
import Nav from './Nav';
import { useGlobalContext } from '../context';
function Header() {
    const{showNav,setShowNav}=useGlobalContext()
    return (
        <header className='row'>
        <div className='logoContainer col-sm-6'>
            <img src="./images/logo.png" alt="logo" />
        </div>
        <div className='col-sm-6 search-col' onClick={()=>setShowNav(!showNav)}>
            <div className='searchContainer'>
            <div className='type'>Add location</div>
            <div className='guest'>Add guests</div>
            <div className='searchIcon-con'>
                <BiSearch className='searchIcon' />
            </div>
            </div>
        </div>
        <Nav/>
        </header>
    )
}

export default Header

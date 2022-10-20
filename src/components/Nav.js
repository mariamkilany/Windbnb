import React ,{ useState} from 'react'
import { BiSearch } from "react-icons/bi";
import { IoIosPin } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useGlobalContext } from '../context';

function Nav() {
    const cities=["Helsinki,Finland","Turku,Finland","Vaasa,Finland", "Oulu,Finland"]
    const {showNav,setShowNav,showLocation,setShowLocation,showBtns,setShowBtns,location,setLocation,AudltsGuests,setAudltsGuests,childrenGuests,setChildrenGuests}=useGlobalContext()
    const[loc,setLoc]=useState(location)
    const[audlts,setAudlts]=useState(AudltsGuests)
    const[children,setChildren]=useState(childrenGuests)
    const handleMinus=(num)=>{
        if(num<0)
        return 0
        return num
    }
    const handleSearch=()=>{
        setLocation(loc)
        setAudltsGuests(audlts)
        setChildrenGuests(children)
        setShowNav(!showNav)
    }
    return (
        <div className='nav-con'style={{display:showNav?"block":"none"}}>
        <nav >
            <div className='row input-con'>
                <div className='type col-sm-4' 
                style={{border:showLocation?"solid 0.5px black":"none"}}
                onClick={()=>{
                    setShowLocation(!showLocation)
                    setShowBtns(!showBtns)
                    }}>
                    <span className='smallhead'>LOCATION</span>
                    <span>{loc}</span>
                </div>
                <div className='guest col-sm-4' onClick={()=>{
                    setShowBtns(!showBtns)
                    setShowLocation(!showLocation)
                    }}
                    style={{border:showBtns?"solid 0.5px black":"none"}}
                    >
                    <label className='smallhead' htmlFor='guests'>Guests</label>
                    <span>Add guests</span>
                </div>
                <div className='searchIcon-con col-sm-4'>
                    <button  onClick={handleSearch}><BiSearch className='searchIcon' style={{fill:"white"}} /> search</button>
                </div>
            </div>
            <div className='row list-con'>
                <div className='col-sm-4'>
                    <ul style={{display:showLocation?"block":"none"}}>
                        {
                            cities.map((city,index)=>{
                                return(
                                    <li key={index} onClick={()=>setLoc(city)}>
                                        <span className='loc-icon'><IoIosPin/></span>
                                        <span className='city'>{city}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='col-sm-4' style={{display:showBtns?"block":"none"}}>
                    <div>
                        <div className="bold">Adults</div>
                        <span className='note'>Age 13 or above</span>
                        <div className='btns'><button className='btn' onClick={()=>setAudlts(audlts+1)}><AiOutlinePlus/></button> {audlts} <button className='btn' onClick={()=>setAudlts(handleMinus(audlts-1))}><AiOutlineMinus/></button></div>
                    </div>
                    <div>
                        <div className="bold">Children</div>
                        <span className='note'>Age 2-12</span>
                        <div className='btns'><button className='btn'onClick={()=>setChildren(children+1)}><AiOutlinePlus/></button> {children} <button className='btn' onClick={()=>setChildren(handleMinus(children-1))}><AiOutlineMinus/></button></div>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Nav

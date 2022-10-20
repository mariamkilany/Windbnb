import React, { useEffect } from 'react'
import { AiFillStar } from "react-icons/ai";
import { BiDesktop } from 'react-icons/bi';
import { useGlobalContext } from '../context';
function StayComponent(stay) {
    const{city,country,superHost,title,rating,maxGuests,type,beds,photo}=stay.prop
    const {location,AudltsGuests,childrenGuests}=useGlobalContext()
    const [cityConx,countryConx]=location.split(',')
    console.log(AudltsGuests+childrenGuests<=maxGuests , location , city,country,title ,cityConx===city&&countryConx===country&&AudltsGuests+childrenGuests<=maxGuests)
    return (
        <section className='col-md-6 col-lg-4 ' style={{display:cityConx===city&&countryConx===country&&AudltsGuests+childrenGuests<=maxGuests?"block":"none"}}>
            <img src={photo} alt="stay" className='stayphoto' />
            <div className='info'>
                <div className='small'>
                    {superHost?<span className='super'>super host</span>:null}
                    <span>{type} {beds!==null?".":null}{beds}{beds!==null?"beds":null}</span>
                    <span> < AiFillStar className='star' /> {rating}</span>
                </div>
                <div className='title'>{title}</div>
            </div>
        </section>
    )
}

export default StayComponent

import React from 'react'
import Counter from './Counter'
import  './Profil.css'
const Profil = ({fullName,bio,profession,imgSrc}) => {
  
    return (
        <div className='pro'>
            <Counter/>
            <h1>{fullName}</h1>
            <p>{bio}  </p>
            <h4>{profession}</h4>
            <img className='img' src={imgSrc} alt=""/>
        </div>
    )
}

export default Profil


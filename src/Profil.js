import React from 'react'

const Profil = ({fullname,bio,profession,imgSrc}) => {
   
    return (
        <div>
            <h1>{fullname}</h1>
            <p>{bio}  </p>
            <h4>{profession}</h4>
           
        </div>
    )
}

export default Profil


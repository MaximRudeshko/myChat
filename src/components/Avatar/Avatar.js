import React from 'react';
import generateAvatarFromHash from '../../utils/generateAvatar';

import './Avatar.scss'

const Avatar = ({avatar, id, userName}) => {
    
    if(avatar){
        return(
            <img
                className = 'avatar'
                src = {avatar}
                alt = {`${userName} avatar`}
            />
        )
    }else{
        const {color, colorLighten} = generateAvatarFromHash(id) 
        const firstChar = userName[0] 
        
        return(
            <div 
                className = 'avatar avatar--empty'
                style = {{background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`}} 
            >{firstChar}</div>
        ) 
        
    }
}

export default Avatar;

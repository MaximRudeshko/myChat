
import React from 'react';

import './block.scss'

const Block = ({children}) => {
    return (
        <div className = 'auth__block'>
            {children}
        </div>
    )
}

export default Block;

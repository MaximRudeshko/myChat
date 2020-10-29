import React from 'react';

import Readed from '../../assets/img/Readed.svg'
import noReaded from '../../assets/img/Noreaded.svg'

import './ReadedIndicator.scss'

const ReadedIndicator = ({isMe, isTyping, isReaded}) => {
    return (
        <div className = 'message__indicator'>
            {
                (isMe && !isTyping) && (isReaded ? <img className = 'message__readed' src = {Readed} alt = 'Readed icon'/> : <img className = 'message__noreaded' src = {noReaded} alt = 'No readed icon'/>)
            }
        </div>
    );
}

export default ReadedIndicator;

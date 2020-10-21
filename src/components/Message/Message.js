import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { ru } from 'date-fns/locale'
import classNames from 'classnames'
import {Image} from 'antd'

import Readed from '../../assets/img/Readed.svg'
import noReaded from '../../assets/img/Noreaded.svg'

import './message.scss'



const Message = ({avatar, text, date, isMe, isReaded, attachments}) => {
    
    return (
        <div className = {classNames( {
            'message__isme': isMe,
            'message': !isMe
        })}>
            <div className = 'message__wrapper'>
                            
            <div className = 'message__avatar'>
                <img src = {avatar} alt = {`avatar ${avatar}`}/>
            </div>
            <div className = 'message__content'>
                <div className = 'message__bubble'>
                    <span>{text}</span>
                        {
                            attachments &&
                                <ul className = 'message__attachments'>
                                    {attachments.map((item, index) => {
                                        return <li key = {item.fileName + index}>
                                            <Image
                                                src={item.fileUrl}
                                            />
                                        </li>
                                    })}
                            </ul>
                        }
                </div>
                <div className = 'message__date'>
                    <span>{formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true, locale: ru})}</span>
                </div>
            </div>
            {
               isMe && (isReaded ? <img src = {Readed} alt = 'Readed icon'/> : <img src = {noReaded} alt = 'No readed icon'/>)
            }
            </div>
        </div>
    );
}

export default Message;

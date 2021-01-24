import React from 'react';
import classNames from 'classnames'

import Date from '../Date/Date'

import {ReadedIndicator} from '../ReadedIndicator'

import './DialogsItem.scss'
import Avatar from '../Avatar';


const DialogsItem = ({_id, interlocutor, owner: {_id : id, userName}, avatar, lastMessage, lastMessageTime, counter, isMe, isOnline, onDialogSelect, currentUser}) => {   
    return (
        <li
            className = {classNames('dialogs__item', {
                'dialogs__item--online' : isOnline
            })}
            onClick = {() => onDialogSelect(_id)}
        >
            <div className = 'dialogs__item-avatar'>
                <Avatar 
                    id ={currentUser !== interlocutor._id ? interlocutor._id : id} 
                    userName = {currentUser !== interlocutor._id ? interlocutor.userName : userName} 
                   /*  avatar = {currentUser === interlocutor._id ? interlocutor._id : id} */
                />
            </div>
            <div className = 'dialogs__item-info'>
                <div className = 'dialogs__item-info-top'>
                    <b>{currentUser !== interlocutor._id ? interlocutor.userName : userName}</b>
                    <span><Date date = {lastMessageTime}/></span>
                </div>
                <div className = 'dialogs__item-info-bottom'>
                    <p>{lastMessage}</p>
                    <div className = 'dialogs__item-info-bottom-count'>
                        {
                            isMe ? 
                                <ReadedIndicator isMe = {isMe} isReaded/> 
                                : counter > 1 ? <span>{ counter > 9 ? '+9' : counter}</span> : null
                        } 
                    </div>
                </div>
            </div>
        </li>
    );
}

export default DialogsItem;


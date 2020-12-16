import React from 'react';
import classNames from 'classnames'

import Date from '../Date/Date'

import {ReadedIndicator} from '../ReadedIndicator'

import './DialogsItem.scss'
import Avatar from '../Avatar';


const DialogsItem = ({id, userName, avatar,date, messageText, counter, isMe, isOnline, onDialogSelect}) => {


    return (
        <li
            className = {classNames('dialogs__item', {
                'dialogs__item--online' : isOnline
            })}
            onClick = {() => onDialogSelect(id)}
        >
            <div className = 'dialogs__item-avatar'>
                <Avatar id ={id} userName = {userName} avatar = {avatar}/>
            </div>
            <div className = 'dialogs__item-info'>
                <div className = 'dialogs__item-info-top'>
                    <b>{userName}</b>
                    <span><Date date = {date}/></span>
                </div>
                <div className = 'dialogs__item-info-bottom'>
                    <p>{messageText}</p>
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


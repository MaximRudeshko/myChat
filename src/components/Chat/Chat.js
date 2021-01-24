import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Empty, Spin, Button } from 'antd';
import {EllipsisOutlined} from '@ant-design/icons'
import { Scrollbars } from 'react-custom-scrollbars';


import Message from '../Message'
import {ChatInput} from '../ChatInput'
import { addMessage, fetchMessages} from '../../redux/actions/messages';
import socket from '../../socket/socket';

const Chat = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.user.user._id)
    const {messages, loading} = useSelector(state => state.messages)
    const {currentDialog, dialogs} = useSelector(state => state.dialogs)

    const dialog = currentDialog && dialogs.find(dialog => dialog._id === currentDialog)
    const {owner, interlocutor} = dialog
    
    React.useEffect(() => {
        if(currentDialog){
            dispatch(fetchMessages(currentDialog))
        }
    }, [currentDialog])

    React.useEffect(() => {
        socket.on('NEW_MESSAGE', message => {
            dispatch(addMessage(message))
        })
    }, [])
    
    return (
        <div className = 'home__dialog-chat'> 
            <div className = 'home__dialog-header'>
                <div className = 'home__dialog-header-wrapper'>
                    <div className = 'home__dialog-header-userinfo'>
                        <b>{currentUser === owner._id ? interlocutor.userName : owner.userName}</b>
                        <span className = 'home__dialog-userinfo-status'>онлайн</span>
                    </div>
                    <Button  icon = {<EllipsisOutlined style = {{fontSize: '20px'}} />}/>
                </div>
            </div>
            {loading ? 
                <div className = 'home__dialog-spinner'>
                    <Spin size="large" tip="Загрузка сообщений..." />
                </div>
                :
                <Scrollbars  style={{height: 'calc(100% - 130px)'}}  autoHide>
                    {messages &&
                        messages.length !== 0 ? 
                            messages.map(msg => {  
                                return <Message key = {msg._id} {...msg}/>
                            })
                            : <Empty description="Диалог пуст" />
                    }
                </Scrollbars>
            } 
            <ChatInput/> 
        </div>
    );
}

export default Chat;

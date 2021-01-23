import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Empty, Spin, Button } from 'antd';
import {EllipsisOutlined} from '@ant-design/icons'
import { Scrollbars } from 'react-custom-scrollbars';


import Message from '../Message'
import {ChatInput} from '../ChatInput'
import { fetchMessages } from '../../redux/actions/messages';

const Chat = () => {

    const dispatch = useDispatch()
    const {messages, loading} = useSelector(state => state.messages)
    const {currentDialog, dialogs} = useSelector(state => state.dialogs)

    const interlocutorName = !currentDialog ? null : dialogs.find(dialog => dialog._id === currentDialog).interlocutor.userName

    React.useEffect(() => {
        if(currentDialog){
            dispatch(fetchMessages(currentDialog))
        }
    }, [currentDialog])
    

    return (
        <div className = 'home__dialog-chat'> 
            <div className = 'home__dialog-header'>
                <div className = 'home__dialog-header-wrapper'>
                    <div className = 'home__dialog-header-userinfo'>
                        <b>{interlocutorName}</b>
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
                <Scrollbars  style={{  height: 'calc(100% - 130px)' }}  autoHide>
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

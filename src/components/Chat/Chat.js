import React from 'react';
import Message from '../Message'


import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../../redux/actions/messages';
import { Empty, Spin } from 'antd';

const Chat = () => {

    const dispatch = useDispatch()
    const {messages, loading} = useSelector(state => state.messages)
    


   React.useEffect(() => {
       
   }, [])

    return (
        <div className = 'home__dialog-chat'> 
            {loading ? 
                <div className = 'home__dialog-spinner'>
                    <Spin size="large" tip="Загрузка сообщений..." />
                </div>
                : messages && !loading ? 
                    messages.length !== 0 ? 
                        messages.map(msg => {
                            return <Message key = {Math.random()} {...msg}/>
                        })
                        : <Empty description="Диалог пуст" />
                    : <Empty description="Откройте диалог" />

            } 
        </div>
    );
}

export default Chat;

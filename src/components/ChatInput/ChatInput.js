import React from 'react';
import { Input, Button } from 'antd';
import { CameraOutlined, AudioOutlined , SendOutlined, SmileOutlined } from '@ant-design/icons'

import './ChatInput.scss'


const InputActions = () => {
    return (
        <div className = 'home__dialog-input-actions'>
            <Button  icon = {<CameraOutlined style = {{fontSize: '20px'}} />}/>
            <Button  icon = {<AudioOutlined style = {{fontSize: '20px'}} />}/>
            <Button  icon = {<SendOutlined style = {{fontSize: '20px'}} />}/>
        </div>
    )
}

const ChatInput = () => {
    return (
        <div className = 'home__dialog-input'>
            <Input size = 'large' prefix = {<Button  icon = {<SmileOutlined style = {{fontSize: '20px'}} />}/>} suffix = {<InputActions/>} placeholder="Введите текст сообщения…" />
        </div>
    );
}



export default ChatInput;

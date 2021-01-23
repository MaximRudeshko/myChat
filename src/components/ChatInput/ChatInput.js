import React from 'react';
import { Input, Button, Upload, message } from 'antd';
import { CameraOutlined, AudioOutlined , SendOutlined, SmileOutlined } from '@ant-design/icons'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';


import './ChatInput.scss'
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../../redux/actions/messages';
import socket from '../../socket/socket';


const InputActions = ({messageText}) => {
    const dispatch = useDispatch()

   

    const {currentDialog} = useSelector(state => state.dialogs)
    const currentUser = useSelector(({user}) => user.user.user._id)

    const sendMessageHandler = () => {
        dispatch(sendMessage(currentDialog, messageText, currentUser))
    }

    return (
        <div className = 'home__dialog-input-actions'>
            <Upload
                showUploadList = {false}
            >
                <Button icon = {<CameraOutlined style = {{fontSize: '20px'}} />}/>
            </Upload>
            <Button icon = {<AudioOutlined style = {{fontSize: '20px'}} />}/>
            <Button icon = {<SendOutlined onClick = {() => sendMessageHandler()} style = {{fontSize: '20px'}} />}/>
        </div>
    )
}

const ChatInput = () => {

    const [smilesVisible, setSmilesVisible] = React.useState(false)
    const [messageText, setMessageText] = React.useState('')
    
    const clickSmileHandler = () => {
        if(smilesVisible){
            setSmilesVisible(false)
        }else{
            setSmilesVisible(true)
        }
    }

    return (
        <div className = 'home__dialog-input'>
            {smilesVisible &&
                <div className = 'home__dialog-input-smiles'>
                    <Picker 
                        disableAutoFocus={true} 
                        skinTone={SKIN_TONE_MEDIUM_DARK} 
                        groupNames={{smileys_people:"PEOPLE"}}
                        disableSearchBar = {true}
                        />
                </div>
            }
            <Input
                size = 'large' 
                prefix = {<Button onClick = {clickSmileHandler} 
                icon = {<SmileOutlined style = {{fontSize: '20px'}} />}/>} 
                suffix = {<InputActions 
                    messageText = {messageText}
                    />} 
                placeholder="Введите текст сообщения…" 
                value = {messageText}
                onChange = {e => setMessageText(e.target.value)}
            />
        </div>
    );
}



export default ChatInput;

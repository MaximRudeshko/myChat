import React from 'react';
import { Input, Button, Upload, message } from 'antd';
import { CameraOutlined, AudioOutlined , SendOutlined, SmileOutlined } from '@ant-design/icons'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';


import './ChatInput.scss'


const InputActions = () => {


    const changeInputHandler = info => {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
        }
    }


    return (
        <div className = 'home__dialog-input-actions'>
            <Upload
                showUploadList = {false}
            >
                <Button icon = {<CameraOutlined style = {{fontSize: '20px'}} />}/>
            </Upload>
            <Button icon = {<AudioOutlined style = {{fontSize: '20px'}} />}/>
            <Button icon = {<SendOutlined style = {{fontSize: '20px'}} />}/>
        </div>
    )
}

const ChatInput = () => {

    const [smilesVisible, setSmilesVisible] = React.useState(false)

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
            <Input size = 'large' prefix = {<Button onClick = {clickSmileHandler} icon = {<SmileOutlined style = {{fontSize: '20px'}} />}/>} suffix = {<InputActions/>} placeholder="Введите текст сообщения…" />
        </div>
    );
}



export default ChatInput;

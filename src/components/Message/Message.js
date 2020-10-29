import React, {useState, useRef, useEffect} from 'react';
import classNames from 'classnames'
import {Image} from 'antd'
import PropTypes from 'prop-types'


import { ReadedIndicator } from '../ReadedIndicator';
import Date from '../Date/Date';

import play from '../../assets/img/play.svg'
import pause from '../../assets/img/pause.svg'
import wave from '../../assets/img/wave.svg'
import test from '../../assets/test-audio/test.mp3'

import './message.scss'
import convertTime from '../../utils/convertTime';




const Message = ({avatar, text, date, isMe, isReaded, attachments, isTyping, audio}) => {

    const [isPlaying, setPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)


    const togglePlaying = () => {
        if (!isPlaying) {
            audioElem.current.play();
          } else {
            audioElem.current.pause();
          }
    }
    

    const audioElem = useRef(null)
    useEffect(() => {
        audioElem.current && audioElem.current.addEventListener('playing', () => {
            setPlaying(true)
        })

        audioElem.current && audioElem.current.addEventListener('ended', () => {
            setPlaying(false)
            setCurrentTime(0)
            setProgress(0)
        })

        audioElem.current && audioElem.current.addEventListener('pause', () => {
            setPlaying(false)
        })

        audioElem.current && audioElem.current.addEventListener('timeupdate', () => {
            const duration = (audioElem.current.duration) || 0;
            setCurrentTime(audioElem.current.currentTime)
            setProgress((audioElem.current.currentTime / duration) * 100)
        })


    } )
    
    return (
        <div className = {classNames( 'message', {
            'message--isme': isMe,
            'message--image': attachments && attachments.length === 1,
            'message--typing': isTyping,
            'message--audio': audio
        })}>
            <div className = 'message__wrapper'>              
                <div className = 'message__avatar'>
                    <img src = {avatar} alt = {`avatar ${avatar}`}/>
                </div>
                <div className = 'message__content'>
                    <div className = 'message__top'>
                        <div className = 'message__bubble'>
                            {text && 
                                <span>{text}</span>
                            }
                            {attachments &&
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
                            {isTyping && 
                                <div className="message__typing">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            }
                            {audio && 
                                <div className = 'message__audio'>
                                    <audio preload = 'auto' src = {audio} ref = {audioElem}/>
                                    <div className = 'message__audio-progress' style = {{width: progress + '%'}}></div>
                                    <div className = 'message__audio-info'>
                                        <div className = 'message__audio-btn'>
                                            <button onClick = {togglePlaying}>
                                                {
                                                    !isPlaying ? <img src = {play} alt = 'play svg'/> : <img src = {pause} alt = 'pause svg'/> 
                                                }
                                            </button>
                                        </div>
                                        <div className = 'message__audio-wave'>
                                            <img src = {wave} alt = 'Wave svg'/>
                                        </div>
                                            <div className = 'message__audio-duration'>{convertTime(currentTime)}</div>
                                    </div>
                                </div> 
                            }
                        </div>
                        <ReadedIndicator isMe = {isMe} isTyping = {isTyping} isReaded = {isReaded}/>
                    </div>
                    {date && 
                        <div className = 'message__date'>
                            <span><Date date = {date}/></span>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.object,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    attachments: PropTypes.arrayOf(PropTypes.object),
    isTyping: PropTypes.bool,
    audio: PropTypes.string
}

export default Message;

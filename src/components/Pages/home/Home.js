import React, {useState} from 'react';
import {TeamOutlined, FormOutlined, SearchOutlined, EllipsisOutlined} from '@ant-design/icons'
import {Button, Input} from 'antd'
import { Scrollbars } from 'react-custom-scrollbars';
import { Dialogs } from '../../Dialogs';
import Message from '../../Message'


import test from '../../../assets/test-audio/test.mp3'

import './home.scss'
import { ChatInput } from '../../ChatInput';

const Home = ({items}) => {

    const [filteredData, setFilteredData] = useState(items) 

    const onSearch = (e) => {
        const filteredData = items.filter(user => user.userName.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0)
        setFilteredData(filteredData)
    }

    return (
        <div className = 'home'>
            <div className = 'home__container'> 
                <div className = 'home__sidebar'>
                    <div className = 'home__sidebar-header'>
                        <div>
                            <TeamOutlined style = {{fontSize: '20px'}} />
                            <span>Список диалогов</span>
                        </div>
                        <Button  icon = {<FormOutlined style = {{fontSize: '20px'}} />}/>
                    </div>
                    <div className = 'home__sidebar-search'>
                        <Input onChange = {e => onSearch(e)} size="large" placeholder="Поиск среди контактов" prefix={<SearchOutlined style = {{color: '#CBCBCB'}} />} />
                    </div>
                    <Dialogs 
                        items = {filteredData}/>
                </div>
                <div className = 'home__dialog'>
                    <div className = 'home__dialog-header'>
                        <div className = 'home__dialog-header-wrapper'>
                            <div className = 'home__dialog-header-userinfo'>
                                <b>Alesya Dakhno</b>
                                <span className = 'home__dialog-userinfo-status'>онлайн</span>
                            </div>
                            <Button  icon = {<EllipsisOutlined style = {{fontSize: '20px'}} />}/>
                        </div>
                    </div>
                    <Scrollbars style={{  height: 'calc(100% - 130px)' }} autoHide>
                        <div className = 'home__dialog-chat'>
                        <Message
                            avatar = {'https://avatars0.githubusercontent.com/u/63315973?s=460&u=2a211c46a8e51f5633fa8b36e21b2622ab2ad9e3&v=4'}
                            isMe
                            isTyping                
                        />
                        <Message
                            avatar = {'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
                            isTyping                
                        />
                        <Message
                            avatar = {'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
                            attachments = {[
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=1'
                                }
                            ]} 
                            date = {new Date(2014, 6, 2)}               
                        />
                        <Message
                            avatar = {'https://avatars0.githubusercontent.com/u/63315973?s=460&u=2a211c46a8e51f5633fa8b36e21b2622ab2ad9e3&v=4'}
                            attachments = {[
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=1'
                                }
                            ]}
                            date = {new Date(2014, 6, 2)}
                            isMe                
                        />
                        <Message
                            text = {'Салам🖐🏻'}
                            avatar = {'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
                            date = {new Date(2014, 6, 2)}
                            attachments = {[
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=1'
                                },
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=2'
                                }
                            ]}
                        />
                        <Message
                            text = {'Hello, shdkjshdj sjdhsjdh shdkj hskjh sh kjsh🖐🏻'}
                            avatar = {'https://avatars0.githubusercontent.com/u/63315973?s=460&u=2a211c46a8e51f5633fa8b36e21b2622ab2ad9e3&v=4'}
                            date = {new Date(2014, 6, 2)}
                            isMe
                            isReaded
                        />
                        <Message
                            text = {'Hello, shdkjshdj sjdhsjdh shdkj hskjh sh kjsh🖐🏻'}
                            avatar = {'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
                            date = {new Date(2014, 6, 2)}
                            
                        />
                        <Message
                            text = {'s'}
                            avatar = {'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
                            date = {new Date(2014, 6, 2)}
                            
                            
                        />
                        <Message
                            text = {'Hello, shdkjshdj sjdhsjdh shdkj hskjh sh kjsh🖐🏻'}
                            avatar = {'https://avatars0.githubusercontent.com/u/63315973?s=460&u=2a211c46a8e51f5633fa8b36e21b2622ab2ad9e3&v=4'}
                            date = {new Date(2014, 6, 2)}
                            isMe                
                        />
                        <Message
                            avatar = {'https://avatars0.githubusercontent.com/u/63315973?s=460&u=2a211c46a8e51f5633fa8b36e21b2622ab2ad9e3&v=4'}
                            date = {new Date(2020, 9, 27)}
                            isMe 
                            audio = {test}               
                        />
                        <Message
                            avatar = {'https://avatars0.githubusercontent.com/u/63315973?s=460&u=2a211c46a8e51f5633fa8b36e21b2622ab2ad9e3&v=4'}
                            date = {new Date(2020, 9, 27)}
                            isMe 
                            attachments = {[
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=1'
                                },
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=2'
                                },
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=1'
                                },
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=2'
                                },
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=1'
                                },
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=2'
                                },
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=1'
                                },
                                {
                                    fileName: '',
                                    fileUrl: 'https://source.unsplash.com/user/erondu/900x900/?random=2'
                                }
                            ]}              
                        />
                    </div>
                    </Scrollbars> 
                    <ChatInput/>      
                </div>
            </div>
        </div>
    );
}

export default Home;

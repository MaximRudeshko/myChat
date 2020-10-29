import React from 'react';
import { Dialogs } from '../../Dialogs';
import Message from '../../Message'

import test from '../../../assets/test-audio/test.mp3'

import './home.scss'

const Home = () => {
    console.log(test)
    return (
        <div className = 'home'>
            <Dialogs 
                items = {[
                    {
                        id: 'ssca4238a0b923820dcc509a6f75849b',
                        userName: 'Lisa Ann',
                        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                        messageText: 'Hi, how are you?',
                        date: new Date(2020, 9, 27, 15,5 ),
                        counter: 3
                    },
                    {
                        id: 'l4sae728d9d4c2f636f067f89cc14862c',
                        userName: 'Luke Skyworker',
                        // avatar: 'data:image/jpeg;base64,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',
                        messageText: 'May the force be with you',
                        date: new Date(2019, 9, 27, 15,5 ),
                        counter: 2,
                        isMe: true,
                        isOnline:true
                    },
                    {
                        id: 'xzkcbc87e4b5ce2fe28308fd9f2a7baf3',
                        userName: 'Alesya Dakhno',
                        // avatar: 'https://sun9-43.userapi.com/c851028/v851028358/190260/QVMurYscTvo.jpg',
                        messageText: 'I love u, motherfucker',
                        date:new Date(2020, 9, 27, 14,5 ),
                        counter: 2,
                        isOnline:true
                    },
                    {
                        id: 'a90ff679a2f3e71d9181a67b7542122c',
                        userName: 'Alesya Dakhno',
                        // avatar: 'https://sun9-43.userapi.com/c851028/v851028358/190260/QVMurYscTvo.jpg',
                        messageText: 'I love u, motherfucker',
                        date: new Date(2020, 9, 27, 12,5 ),
                        isOnline:true
                    },
                    {
                        id: 'am2ff679a2f3e71d9181a67b7542122c',
                        userName: 'NoName',
                        messageText: 'I love u, motherfucker',
                        date: new Date(2020, 9, 27, 12,5 ),
                        isOnline:true
                    }
                ]}/>
            <div className = 'home__messages'>
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
        </div>
    );
}

export default Home;

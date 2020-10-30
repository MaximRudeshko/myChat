import React from 'react';
import Message from '../Message'

import test from '../../assets/test-audio/test.mp3'

const Chat = () => {
    return (
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
    );
}

export default Chat;

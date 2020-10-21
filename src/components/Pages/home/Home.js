import React from 'react';
import Message from '../../Message'

import './home.scss'

const Home = () => {
    return (
        <div>
            <Message
                text = {'Салам🖐🏻'}
                avatar = {'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
                date = 'Mon Oct 19 2020 07:50:17'
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
                date = 'Mon Oct 19 2020 07:50:17'
                isMe
                isReaded
            />
            <Message
                text = {'Hello, shdkjshdj sjdhsjdh shdkj hskjh sh kjsh🖐🏻'}
                avatar = {'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
                date = 'Mon Oct 19 2020 07:50:17'
                
            />
            <Message
                text = {'s'}
                avatar = {'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
                date = 'Mon Oct 19 2020 07:50:17'
                
                
            />
            <Message
                text = {'Hello, shdkjshdj sjdhsjdh shdkj hskjh sh kjsh🖐🏻'}
                avatar = {'https://avatars0.githubusercontent.com/u/63315973?s=460&u=2a211c46a8e51f5633fa8b36e21b2622ab2ad9e3&v=4'}
                date = 'Mon Oct 19 2020 07:50:17'
                isMe                
            />
        </div>
    );
}

export default Home;

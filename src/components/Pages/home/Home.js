import React from 'react';
import {Button, Empty} from 'antd'
import {TeamOutlined, FormOutlined} from '@ant-design/icons'
import { Dialogs } from '../../Dialogs';
import { Chat } from '../../Chat';

import './home.scss'
import { useSelector } from 'react-redux';


const Home = () => {

    const {currentDialog} = useSelector(state => state.dialogs)

    return (
        <div className = 'home'>
            <div className = 'home__container'> 
                <div className = 'home__sidebar'>
                    <div className = 'home__sidebar-header'>
                        <div>
                            <TeamOutlined style = {{fontSize: '20px'}} />
                            <span>Список диалогов</span>
                        </div>
                        <Button icon = {<FormOutlined style = {{fontSize: '20px'}} />}/>
                    </div>
                    
                    <Dialogs/>
                </div>
                <div className = 'home__dialog'>
                    {currentDialog? 
                        <Chat/>
                        : <Empty description = 'Откройте диалог'/>
                    }   
                </div>
            </div>
        </div>
    );
}

export default Home;

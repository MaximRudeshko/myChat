import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Input} from 'antd'
import { Scrollbars } from 'react-custom-scrollbars';
import {TeamOutlined, FormOutlined, SearchOutlined, EllipsisOutlined} from '@ant-design/icons'
import { Dialogs } from '../../Dialogs';
import { ChatInput } from '../../ChatInput';
import { Chat } from '../../Chat';
import {fetchDialogs} from '../../../redux/actions/dialogs';

import './home.scss'


const Home = () => {

    const dispatch = useDispatch()
    const {dialogs, loading} = useSelector(state => state.dialogs)
    const [items, setItems] = React.useState(null)
    const scrollBarRef = React.useRef(null)
    

    React.useEffect(() => {
        dispatch(fetchDialogs())
    }, [])


    React.useEffect(() => {
        
                
    }, [] )

    

    const onSearch = (e) => {
        const filteredData = dialogs.filter(user => user.userName.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0)
        setItems(filteredData)
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
                        items = { items || dialogs}
                        loading = {loading}
                    />
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
                    <Scrollbars
                    ref = {scrollBarRef}
                    style={{  height: 'calc(100% - 130px)' }} autoHide>
                        <Chat/>
                    </Scrollbars> 
                    <ChatInput/>      
                </div>
            </div>
        </div>
    );
}

export default Home;

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import orderBy from 'lodash/orderBy'
import { Empty, Input } from 'antd';
import {SearchOutlined} from '@ant-design/icons'



import DialogsItem from '../DialogsItem/DialogsItem'
import Loader from '../Loader/Loader';
import { fetchDialogs, setCurrentDialog } from '../../redux/actions/dialogs';

import './Dialogs.scss'



const Dialogs = () => {

    const dispatch = useDispatch()

    const {user} = useSelector(state => state.user.user)
    const {dialogs, loading} = useSelector(state => state.dialogs)
    const [items, setFilteredData] = React.useState(null)
    console.log(user)

    React.useEffect(() => {
        dispatch(fetchDialogs(user._id))
        console.log()
    }, [])
    
    const onDialogSelect = (id) => {
        dispatch(setCurrentDialog(id))
    }

    const onSearch = (e) => {
        const filteredData = dialogs.filter(dialog => dialog.interlocutor.userName.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0)
        setFilteredData(filteredData)
    }    

    return (
        <>
            <div className = 'home__sidebar-search'>
                <Input onChange = {e => onSearch(e)} size="large" placeholder="Поиск среди контактов" prefix={<SearchOutlined style = {{color: '#CBCBCB'}} />} />
            </div>
            <ul className = 'dialogs'>
                {loading ? 
                    <Loader/>
                    :dialogs.length > 0 ?
                        orderBy(items || dialogs, ['date'], ['desc'])
                        .map(item => {
                            console.log(item)
                            return <DialogsItem
                                    key = {item._id} 
                                    {...item}
                                    onDialogSelect = {onDialogSelect}
                                    currentUser = {user._id}
                                    />
                        })
                        : <Empty description = 'Ничего не найдено' image={Empty.PRESENTED_IMAGE_SIMPLE} />
                }
            </ul>
        </>
    )
}

export default Dialogs
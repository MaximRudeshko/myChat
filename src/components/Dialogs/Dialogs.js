import React from 'react'
import { useDispatch } from 'react-redux';
import orderBy from 'lodash/orderBy'
import { Empty } from 'antd';


import DialogsItem from '../DialogsItem/DialogsItem'
import Loader from '../Loader/Loader';
import { setCurrentDialog } from '../../redux/actions/dialogs';

import './Dialogs.scss'
import { fetchMessages, setCurrentMessages } from '../../redux/actions/messages';



const Dialogs = ({items, loading}) => {

    const dispatch = useDispatch()
    
    const onDialogSelect = userId => {
        dispatch(fetchMessages(userId))
    }

    return (
        <ul className = 'dialogs'>
            {loading ? 
                <Loader/>
                :items.length > 0 ?
                    orderBy(items, ['date'], ['desc'])
                    .map(item => {
                        return <DialogsItem
                                 key = {item.id} 
                                 {...item}
                                 onDialogSelect = {onDialogSelect}
                                />
                    })
                    : <Empty description = 'Ничего не найдено' image={Empty.PRESENTED_IMAGE_SIMPLE} />
            }
        </ul>
    )
}

export default Dialogs
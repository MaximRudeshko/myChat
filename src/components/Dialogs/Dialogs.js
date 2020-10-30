import React from 'react'
import orderBy from 'lodash/orderBy'
import { Empty } from 'antd';
import DialogsItem from '../DialogsItem/DialogsItem'
import Loader from '../Loader/Loader';

import './Dialogs.scss'


const Dialogs = ({items, loading}) => {
    console.log(items)
    return (
        <ul className = 'dialogs'>
            {loading ? 
                <Loader/>
                :items.length > 0 ?
                    orderBy(items, ['date'], ['desc']).map(item => <DialogsItem key = {Math.random()} {...item}/>)
                    : <Empty description = 'Ничего не найдено' image={Empty.PRESENTED_IMAGE_SIMPLE} />
            }
        </ul>
    )
}

export default Dialogs
import React from 'react'
import orderBy from 'lodash/orderBy'
import DialogsItem from '../DialogsItem/DialogsItem'

import './Dialogs.scss'

const Dialogs = ({items}) => {
    return (
        <ul className = 'dialogs'>
            {
                items &&
                    orderBy(items, ['date'], ['desc']).map(item => <DialogsItem key = {Math.random()} {...item}/>)
            }
        </ul>
    )
}

export default Dialogs
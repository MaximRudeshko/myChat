import React from 'react';
import { Button } from 'antd';


import './button.scss'

const Btn = ({children}) => {
    return (
        <Button>{children}</Button>
    );
}

export default Btn;

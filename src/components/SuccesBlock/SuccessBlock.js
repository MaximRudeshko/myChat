import React from 'react';
import { InfoCircleTwoTone } from '@ant-design/icons'


const SuccessBlock = () => {
    return (
        <div className = 'auth__success'>
            <InfoCircleTwoTone style={{ fontSize: '50px', color: '#08c' }} />  
            <h2>Подтвердите свой аккаунт</h2>
            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
        </div>
    );
}

export default SuccessBlock;

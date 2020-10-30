import React from 'react';

import isToday from 'date-fns/isToday'
import format from 'date-fns/format'


const Daate = ({date}) => {    
    return isToday(date) ? format(date, "H:mm") : format(date, "dd.MM.yy")
}

export default Daate;

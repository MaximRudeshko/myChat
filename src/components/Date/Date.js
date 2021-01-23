import isToday from 'date-fns/isToday'
import format from 'date-fns/format'


const Datee = ({date}) => {  
    const res = (Date.parse(date)) 
    return isToday(res) ? format(res, "H:mm") : format(res, "dd.MM.yy") 
}

export default Datee;

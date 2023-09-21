import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = (props) => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const [curr, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
        
       dispatch({
            type: 'CHG_CURRENCY',
            payload: curr,
        });
      };

    return (
        <div className='alert alert-primary'>
            <span>Currency: {currency} </span>
            <select  onChange={handleChange}>
            <option value="$">$ Dollar</option>
            <option value="£" selected> £ Pound</option>
            <option value="€">€ Euro</option>
            <option value="Rs">Rs Ruppee</option>
           
            </select>
        </div>
    );
};
export default Currency;

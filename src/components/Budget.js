import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value>20000)
            alert("The value cannot exceed remaining funds");
        if(event.target.value < expenses)
            alert("You cannot define budget value less than spending");
        else
            setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

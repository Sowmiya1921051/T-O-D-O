import React, { useState } from 'react';

function Buy() {
    const [add, setAdd] = useState('');
    const [items, setItems] = useState([]);

    const func = () => {

        setItems(prevItems => [...prevItems, add]);
        
        setAdd('');
    };

    return (
        <div>
            <div className='text-2xl font-bold text-center'>Todo shop</div>
            <div className='text-center'>
                <p>Select what you want? </p>
                <select>
                    <option value="pencil">pencil</option>
                    <option value="paper">paper</option>
                    <option value="notepad">notepad</option>
                    <option value="pen">pen</option>
                    <option value="note book">note book</option>
                </select>
            </div>
           
            <div className='text-center'>
                <input
                    type='text'
                    value={add}
                    onChange={(e) => setAdd(e.target.value)}
                    placeholder='Type and click add'
                />
                <button onClick={func}>Add</button>
                <div>
                <p>Added items:</p>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>Discount 5%</div>
            </div>
           
            
        </div>
    );
}

export default Buy;

import React, { useState } from 'react';

function Buy() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <div className='text-2xl font-bold text-center'>Todo shop</div>
            <div className='text-center'>
                <p>Select what you want? </p>
                <select onChange={handleChange} value={selectedOption}>
                    <option value="pencil">pencil</option>
                    <option value="paper">paper</option>
                    <option value="notepad">notepad</option>
                    <option value="pen">pen</option>
                    <option value="notebook">notebook</option>
                </select>
            </div>
                <div className='text-center mt-4'>
                    <p>Hii Sowmia, you selected: {selectedOption}</p>
                </div>
            
        </div>
    );
}

export default Buy;

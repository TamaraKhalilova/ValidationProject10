import React, { useState } from 'react';

import { regexBuilder, testRegex } from './utils';

function PasswordValidator() {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const maxLength = 20;

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setIsValid(regexBuilder(maxLength).test(e.target.value));
    };

    testRegex(12);

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                style={isValid ? { border: '1px solid green' } : { border: '1px solid red' }}
            />
            <div>
                {isValid ? 'Valid' : 'Invalid'}
            </div>
        </div>
    );
}

export default PasswordValidator;

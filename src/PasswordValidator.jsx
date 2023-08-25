import React, { useState } from 'react';

function PasswordValidator() {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const maxLength = 20;

    const regexBuilder = (length) => {
        return new RegExp(
            `^(?=(?:\\S*?[A-Z]){1})(?=(?:\\S*?[a-z]){1})(?=(?:\\S*?\\d){1})(?=(?:\\S*?[!"#$%&'()*+,-./:;<=>?@\\[\\\\\\]^_\\{|}~]){1})\\S{0,${length}}$`
        );
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setIsValid(regexBuilder(maxLength).test(e.target.value));
    };

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

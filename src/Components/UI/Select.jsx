import React from 'react';

export default function Select({options, defaultValue, value, onChange, style}) {
    return(
        <select style={style} value={value} onChange={onChange}>
            <option value={defaultValue}>{defaultValue}</option>            
            {options.map((option) => 
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
}
import React, { useState } from 'react'

export default function SidebarForFilter({ title, setFilters, filterItems }) {
    const [options, setOptions] = useState([])

    const handleOnChange = (e) => {
        const { value } = e.target;

        let updatedOptions = [];
        if (options.includes(value)) {
            updatedOptions = options.filter(item => item !== value);
        } else {
            updatedOptions = [...options, value];
        }
        setOptions(updatedOptions);

        // Map title to the correct filter key
        const key = title === 'Industries' ? 'industry' : 'packaging_style';

        setFilters(prev => ({
            ...prev,
            [key]: updatedOptions
        }));
    };

    return (
        <div className="w-full flex flex-col gap-2">
            <h3>{title}</h3>
            <hr className='border-accent border' />
            {filterItems.map((item, index) => (
                <label htmlFor={`${title}-${index}`} key={index} className="flex items-center gap-3 p-1 bg-primary-foreground cursor-pointer">
                    <input
                        className='accent-accent h-4 w-4'
                        id={`${title}-${index}`}
                        type="checkbox"
                        onChange={handleOnChange}
                        value={item}
                        checked={options.includes(item)}
                    />
                    <span className='font-semibold select-none'>{item}</span>
                </label>
            ))}
        </div>
    );
}

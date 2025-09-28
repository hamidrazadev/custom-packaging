import React from 'react'

export default function SidebarForFilter({ title, activeFilter, setActiveFilter, filterItems }) {
    const key = title === 'Industries' ? 'industry' : 'packaging_style';
    const selectedValue = activeFilter.type === key ? activeFilter.value : "";

    const handleOnChange = (e) => {
        const value = e.target.value;

        setActiveFilter({
            type: key,
            value: value
        });
    };

    const clearThisGroup = () => {
        if (activeFilter.type === key) {
            setActiveFilter({ type: null, value: "" });
        }
    };

    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <h3>{title}</h3>
                <button type="button" onClick={clearThisGroup} className="text-sm underline">Clear</button>
            </div>
            <hr className='border-accent border' />
            <div className="flex flex-col gap-3">
                {
                    filterItems.map((item, index) => {
                        // always slug-id (if object), otherwise fallback to plain string
                        const value = item.slug && item.id ? `${item.slug}-${item.id}` : item;
                        return (
                            <label
                                htmlFor={`${key}-${index}`}
                                key={index}
                                className="flex items-center gap-3 p-1 bg-white cursor-pointer"
                            >
                                <input
                                    className='accent-accent h-4 w-4'
                                    id={`${key}-${index}`}
                                    type="radio"
                                    name={key}
                                    onChange={handleOnChange}
                                    value={value}
                                    checked={selectedValue === value}
                                />
                                <span className='font-[400] text-sm select-none'>{item.name || item}</span>
                            </label>
                        );
                    })
                }
            </div>
        </div>
    );
}

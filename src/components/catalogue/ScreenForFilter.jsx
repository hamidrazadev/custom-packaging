import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

export default function ScreenForFilter({ setFilters, industries, packagingStyles, setIsFilterOpen }) {
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [selectedPackaging, setSelectedPackaging] = useState([]);

    const handleIndustryChange = (e) => {
        const { value } = e.target;
        let updated = selectedIndustries.includes(value)
            ? selectedIndustries.filter(item => item !== value)
            : [...selectedIndustries, value];

        setSelectedIndustries(updated);
        setFilters(prev => ({ ...prev, industry: updated }));
    };

    const handlePackagingChange = (e) => {
        const { value } = e.target;
        let updated = selectedPackaging.includes(value)
            ? selectedPackaging.filter(item => item !== value)
            : [...selectedPackaging, value];

        setSelectedPackaging(updated);
        setFilters(prev => ({ ...prev, packaging_style: updated }));
    };

    const resetFilters = () => {
        setSelectedIndustries([]);
        setSelectedPackaging([]);
        setFilters({ industry: [], packaging_style: [] });
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Overlay */}
            <div
                onClick={() => setIsFilterOpen(false)}
                className="absolute inset-0 bg-black/40 transition-opacity duration-300"
            />

            {/* Drawer */}
            <div
                className={`
                    relative w-4/5 sm:w-96 h-full bg-white shadow-lg flex flex-col 
                    transform transition-transform duration-300 ease-in-out animate-slide-in-right
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold">Filters</h3>
                    <button
                        onClick={() => setIsFilterOpen(false)}
                        className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200"
                    >
                        <RxCross2 className="w-5 h-5" />
                    </button>
                </div>

                {/* Body with scroll */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">

                    {/* Industries */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-2">Industries</h4>
                        <hr className="border-accent mb-3" />
                        <div className="flex flex-col gap-2">
                            {industries.map((item, index) => (
                                <label
                                    htmlFor={`industry-${index}`}
                                    key={index}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <input
                                        id={`industry-${index}`}
                                        type="checkbox"
                                        onChange={handleIndustryChange}
                                        value={item}
                                        checked={selectedIndustries.includes(item)}
                                        className="w-5 h-5 accent-accent"
                                    />
                                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Packaging Style */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-2">Packaging Style</h4>
                        <hr className="border-accent mb-3" />
                        <div className="flex flex-col gap-2">
                            {packagingStyles.map((item, index) => (
                                <label
                                    htmlFor={`packaging-${index}`}
                                    key={index}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <input
                                        id={`packaging-${index}`}
                                        type="checkbox"
                                        onChange={handlePackagingChange}
                                        value={item}
                                        checked={selectedPackaging.includes(item)}
                                        className="w-5 h-5 accent-accent"
                                    />
                                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 flex justify-end gap-3">
                    <button
                        onClick={resetFilters}
                        className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => setIsFilterOpen(false)}
                        className="px-4 py-2 text-sm rounded-md bg-accent text-white hover:opacity-90"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}

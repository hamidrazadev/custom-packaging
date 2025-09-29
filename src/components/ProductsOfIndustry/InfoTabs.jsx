"use client";
import React, { useState, useRef } from "react";
import InfoTabsData from "public/data/company/InfoTabsForProductOfIndustry.json";
import { FaCube, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function InfoTabs() {
    const { tabs } = InfoTabsData;
    const [activeTab, setActiveTab] = useState(0);
    const scrollRef = useRef(null);

    // Scroll by card width
    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 220; // card width + margin
            if (direction === "left") {
                scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <div className="container mx-auto flex flex-col py-6 lg:py-12">
            {/* Tabs Header */}
            <div className="flex w-full gap-2 border-b border-gray-200 overflow-x-scroll scrollbar-none">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`flex justify-center w-full items-center gap-2 p-4 rounded-t-lg font-medium transition-all 
                            ${activeTab === index
                                ? "bg-accent text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        <FaCube />
                        <span className="whitespace-nowrap">{tab.title.toUpperCase()}</span>
                    </button>
                ))}
            </div>

            {/* Description + Cards */}
            <div className="bg-white border border-gray-200 p-6 rounded-b-lg shadow-sm flex flex-col lg:flex-row gap-0 lg:gap-6">
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6 lg:w-[60%]">
                    {tabs[activeTab].description}
                </p>

                {/* Cards Section */}
                <div className="w-full lg:w-[50%] flex flex-col gap-4">
                    <div className="flex items-center w-full">
                        {/* Cards */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory w-full gap-4 p-2"
                        >
                            {tabs[activeTab].cards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 w-[200px] bg-white rounded-lg hover:scale-[1.05] transition snap-start duration-500"
                                >
                                    <Image
                                        src={card.image}
                                        alt={card.text}
                                        width={140}
                                        height={140}
                                        className="w-full rounded-lg"
                                    />
                                    {
                                        card.text &&
                                        <p className="text-center py-2 text-sm font-semibold text-gray-700">
                                            {card.text}
                                        </p>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center">
                        {tabs[activeTab].isScrollable && (
                            <button
                                onClick={() => handleScroll("left")}
                                className="btn !rounded-full !p-2"
                            >
                                <FaChevronLeft />
                            </button>
                        )}
                        {/* Scroll Right */}
                        {tabs[activeTab].isScrollable && (
                            <button
                                onClick={() => handleScroll("right")}
                                className="btn !rounded-full !p-2"
                            >
                                <FaChevronRight />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

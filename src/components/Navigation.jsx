"use client"
import { useState, useRef } from "react";
import { Menu, X, Phone, ChevronDown, Search, ChevronUp } from "lucide-react";
import Link from "next/link";
import FormDialog from "./FormDialog";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const hideDropdownTimeout = useRef(null);
    const [open, setOpen] = useState(false);


    const menuItems = [
        {
            name: 'Home',
            href: '/',
            hasDropdown: false,
            dropdownItems: []
        },
        {
            name: 'Industries',
            href: '#industries',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Cosmetic and Skincare', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/home-featured-industries/cosmetics-boxes.jpg" },
                { name: 'Bakery', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/home-featured-industries/bakery-boxes.jpg" },
                { name: 'Retail', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/home-featured-industries/retail-boxes.jpg" },
                { name: 'Soap', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/home-featured-industries/soap-boxes.jpg" },
                { name: 'Candles', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/home-featured-industries/luxury-candle-boxes.jpg" },
            ],
        },
        {
            name: 'Product Packaging Styles',
            href: '#packaging-styles',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Mailer Boxes', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/home-featured-industries/mailer-boxes.jpg" },
                { name: 'Tuck Boxes', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/home-featured-industries/tuck-boxes.jpg" },
                { name: 'Mylar Bags and Pouches', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/home-featured-industries/mylar-bags.jpg" },
                { name: 'Rigid Boxes', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/home-featured-industries/rigid-box.jpg" },
                // { name: 'Labels and Stickers', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/packaging-styles/labels-stickers.jpg" },
                // { name: 'Dispenser Boxes', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/packaging-styles/dispenser-boxes.jpg" },
                // { name: 'Sleeve & Tray Boxes', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/packaging-styles/sleeve-tray-boxes.jpg" },
                // { name: 'Pillow Box', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/packaging-styles/pillow-boxes.jpg" },
                // { name: 'Cigarette Boxes', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/packaging-styles/cigarette-boxes.jpg" },
                // { name: 'Child Resistant', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/packaging-styles/child-resistant-boxes.jpg" },
                // { name: 'Window Boxes', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/packaging-styles/window-boxes.jpg" },
                // { name: 'Gable Boxes', img: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_220x220/images/packaging-styles/gable-boxes.jpg" }
            ],
        },
        {
            name: 'Other Printing Products',
            href: '/',
            hasDropdown: false,
            dropdownItems: []
        },
        {
            name: 'Custom Quotes',
            href: '/',
            hasDropdown: false,
            dropdownItems: []
        },
        {
            name: 'About Us',
            href: '/',
            hasDropdown: false,
            dropdownItems: []
        },
        {
            name: 'Contact Us',
            href: '/',
            hasDropdown: false,
            dropdownItems: []
        },
    ];

    const handleMouseEnter = (name) => {
        if (hideDropdownTimeout.current) clearTimeout(hideDropdownTimeout.current);
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        hideDropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 250);
    };

    const toggleMobileDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <div className="border-b border-gray-200 bg-white shadow-md w-full z-50 sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    <Link href="/" className="flex items-center">
                        <h1 className="text-3xl font-bold text-accent">
                            Custom <span className="font-normal">Packaging</span>
                        </h1>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <div className="text-right">
                            <div className="text-xs text-gray-600">Speak with a Packaging Expert</div>
                            <div className="flex items-center text-accent font-bold text-sm">
                                <Phone className="h-4 w-4 mr-1" />
                                (866) 225-2112
                            </div>
                        </div>
                        <a href="#" onClick={()=> setOpen(true)} className="bg-accent hover:bg-primary text-white px-4 lg:px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300">
                            Want to Consult?
                        </a>
                    </div>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-accent transition-colors duration-300 md:hidden">
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            <div className="border-t border-gray-200 bg-white hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14">
                        <div className="flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <div key={item.name} className="relative group" onMouseEnter={() => handleMouseEnter(item.name)} onMouseLeave={handleMouseLeave}>
                                    <a href={item.href} className="flex items-center text-gray-700 hover:text-accent font-medium text-sm">
                                        {item.name}
                                        {item.hasDropdown && <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} />}
                                    </a>


                                    {item.hasDropdown.length > 0 && activeDropdown === item.name && (
                                        <div className="absolute left-0 top-full mt-4 bg-white shadow-lg border border-gray-200 p-6 w-[800px] grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300 z-50" onMouseEnter={() => handleMouseEnter(item.name)} onMouseLeave={handleMouseLeave}>
                                            {item.dropdownItems.map((dropdownItem, index) => (
                                                <a key={index} href="#" className="flex flex-col items-center text-center hover:shadow-lg p-3 rounded-lg transition-all duration-200 hover:scale-105">
                                                    <img src={dropdownItem.img} alt={dropdownItem.name} className="w-32 h-32 object-cover rounded-md mb-2" />
                                                    <span className="text-sm font-medium text-gray-700">{dropdownItem.name}</span>
                                                </a>
                                            ))}
                                            {/* <a href="#" className="flex flex-col items-center justify-between text-center hover:shadow-lg p-3 rounded-lg transition-all duration-200 hover:scale-105">
                                                <p className="text-start font-medium text-gray-700">Explore more than 1000+ products across various categories</p>
                                                <div className="w-32 h-32 rounded-md mb-2 flex items-center justify-center bg-gray-100">
                                                    <span className="text-sm font-medium text-gray-700">View All</span>
                                                </div>
                                            </a> */}
                                        </div>
                                    )}

                                </div>
                            ))}
                        </div>

                        <div className="flex items-center">
                            <div className="relative">
                                <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm" />
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-4 space-y-2">
                        {menuItems.map((item) => (
                            <div key={item.name}>
                                <button onClick={() => toggleMobileDropdown(item.name)} className="flex justify-between w-full text-gray-700 hover:text-accent font-medium text-base">
                                    {item.name}
                                    {activeDropdown === item.name ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </button>
                                {activeDropdown === item.name && (
                                    <div className="grid grid-cols-2 gap-4 mt-2">
                                        {item.dropdownItems.map((dropdownItem, index) => (
                                            <a key={index} href="#" className="flex flex-col items-center text-center hover:shadow-lg p-3 rounded-lg transition-all duration-200 hover:scale-105">
                                                <img src={dropdownItem.img} alt={dropdownItem.name} className="w-24 h-24 object-cover rounded-md mb-2" />
                                                <span className="text-sm font-medium text-gray-700">{dropdownItem.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex flex-col space-y-2 mt-4">
                            <a href="#" onClick={()=> setOpen(true)} className="bg-accent hover:bg-primary text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 text-center">
                                Request A Quote
                            </a>
                            <div className="flex items-center justify-center text-accent font-bold text-sm">
                                <Phone className="h-4 w-4 mr-1" />
                                (866) 225-2112
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <FormDialog open={open} onOpenChange={setOpen} />

        </div>
    );
};

export default Header;
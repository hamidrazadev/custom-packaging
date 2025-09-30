"use client"
import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Search, ChevronUp } from "lucide-react";
import Link from "next/link";
import FormDialog from "./FormDialog";
import companyInfo from 'constants/comapnyInfo'
import { GetAllIndustries } from "@/services/Industries";
import { GetAllPackagingStyles } from "@/services/PackagingStyles";
import Image from "next/image";
import { GetProductsDetailBySearch } from "@/services/Products";

export function SearchPopup({ searchedProducts }) {
    if (!Array.isArray(searchedProducts)) return null; // safety check

    return (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
            {searchedProducts.length > 0 ? (
                searchedProducts.map((product) => (
                    <Link
                        key={product.id}
                        href={`/product/${product.slug}-${product.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white transition rounded"
                    >
                        {product.title}
                    </Link>
                ))
            ) : (
                <p className="px-4 py-2 text-sm text-gray-500">No results found</p>
            )}
        </div>
    );
}

const Header = () => {
    const searchRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const hideDropdownTimeout = useRef(null);
    const [open, setOpen] = useState(false);
    const [searchedProducts, setSearchedProducts] = useState([
        // {
        //     id: "",
        //     title: "",
        //     slug: ""
        // }
    ]);

    const [industries, setIndustries] = useState([]);
    const [packagingStyles, setPackagingStyles] = useState([]);

    const fetchIndustries = async () => {
        const industries = await GetAllIndustries()
        setIndustries(industries)
    }
    const fetchPackagingStyles = async () => {
        const packagingStyles = await GetAllPackagingStyles()
        setPackagingStyles(packagingStyles)
        // console.log("packagingStyles", packagingStyles)
    }

    useEffect(() => {
        fetchIndustries()
        fetchPackagingStyles()
    }, [])

    useEffect(() => {
        function handleClickOutside(e) {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchedProducts([]);
                setSearchQuery("");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const menuItems = [
        {
            name: 'Home',
            href: '/',
            hasDropdown: false,
            dropdownItems: []
        },
        {
            name: 'Industries',
            href: '/industry',
            hasDropdown: true,
            dropdownItems: industries.slice(0, 4),
        },
        {
            name: 'Product Packaging Styles',
            href: '/shapes-and-styles',
            hasDropdown: true,
            dropdownItems: packagingStyles.slice(0, 4),
        },
        // {
        //     name: 'Other Printing Products',
        //     href: '#',
        //     hasDropdown: false,
        //     dropdownItems: []
        // },
        {
            name: 'Custom Quotes',
            href: '#',
            hasDropdown: false,
            dropdownItems: []
        },
        {
            name: 'About Us',
            href: '/about',
            hasDropdown: false,
            dropdownItems: []
        },
        {
            name: 'Contact Us',
            href: '/contact',
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

    const handleOnSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() === "") {
            setSearchedProducts([]);
            return;
        }

        const fetchedSearchedProducts = await GetProductsDetailBySearch(query);
        setSearchedProducts(fetchedSearchedProducts || []);
    };


    return (
        <div className="border-b border-gray-200 bg-white shadow-md w-full z-50 sticky top-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                                {companyInfo.phone}
                            </div>
                        </div>
                        <Link href="/contact" onClick={() => setOpen(true)} className="bg-accent hover:bg-primary text-white px-4 lg:px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300">
                            Want to Consult?
                        </Link>
                    </div>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-accent transition-colors duration-300 md:hidden">
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            <div className="border-t border-gray-200 bg-white hidden lg:block">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14">
                        <div className="flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <div key={item.name} className="relative group" onMouseEnter={() => handleMouseEnter(item.name)} onMouseLeave={handleMouseLeave}>
                                    <Link onClick={() => item.name === 'Custom Quotes' && setOpen(true)} href={item.href} className="flex items-center text-gray-700 hover:text-accent font-medium text-sm">
                                        {item.name}
                                        {item.hasDropdown && <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} />}
                                    </Link>

                                    {item.dropdownItems.length > 0 && (
                                        activeDropdown === item.name && (
                                            <div className="absolute left-0 top-full mt-4 bg-white shadow-lg border border-gray-200 p-6 w-[800px] grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300 z-50" onMouseEnter={() => handleMouseEnter(item.name)} onMouseLeave={handleMouseLeave}>
                                                {item.dropdownItems.map((dropdownItem, index) => (
                                                    <Link key={index} href={`${item.href}/${dropdownItem.slug + '-' + dropdownItem.id}`} className="flex flex-col items-center text-center hover:shadow-lg p-3 rounded-lg transition-all duration-200 hover:scale-105">
                                                        <Image width={128} height={128} src={dropdownItem.icon || '/assets/images/AllIndustries/Candle.png'} alt={dropdownItem.name} className="rounded-md mb-2" />
                                                        <span className="text-sm font-medium text-gray-700">{dropdownItem.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )
                                    )}

                                </div>
                            ))}
                        </div>

                        <div className="flex items-center">
                            <div className="relative" ref={searchRef}>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={handleOnSearch}
                                    className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                                />
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                {searchedProducts.length > 0 && (
                                    <SearchPopup searchedProducts={searchedProducts} />
                                )}
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
                                    {item.hasDropdown && <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} />}
                                </button>
                                {activeDropdown === item.name && (
                                    <div className="grid grid-cols-2 gap-4 mt-2">
                                        {item.dropdownItems.map((dropdownItem, index) => (
                                            <Link key={index} href="#" className="flex flex-col items-center text-center hover:shadow-lg p-3 rounded-lg transition-all duration-200 hover:scale-105">
                                                <Image width={96} height={96} src={dropdownItem.icon || '/assets/images/AllIndustries/Candle.png'} alt={dropdownItem.name} className="rounded-md mb-2" />
                                                <span className="text-sm font-medium text-gray-700">{dropdownItem.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex flex-col space-y-2 mt-4">
                            <Link href="/contact" onClick={() => setOpen(true)} className="bg-accent hover:bg-primary text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 text-center">
                                Request A Quote
                            </Link>
                            <div className="flex items-center justify-center text-accent font-bold text-sm">
                                <Phone className="h-4 w-4 mr-1" />
                                {companyInfo.phone}
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
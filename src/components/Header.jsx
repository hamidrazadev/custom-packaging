import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import companyInfo from 'constants/comapnyInfo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const industries = [
        'Cosmetics & Skincare',
        'Food & Beverage',
        'Bakery & Confectionery',
        'Retail & E-commerce',
        'Soap & Candles',
        'Healthcare & Pharmaceuticals'
    ];

    const productStyles = [
        'Mailer Boxes',
        'Tuck Boxes',
        'Rigid Boxes',
        'Mylar Pouches',
        'Labels & Stickers',
        'Custom Bags'
    ];

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <header className="bg-white shadow-lg fixed w-full top-0 z-50">
            {/* Top Contact Bar */}
            <div className="bg-accent text-white py-2">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone size={16} />
                            <span>{companyInfo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail size={16} />
                            <span>{companyInfo.email}</span>
                        </div>
                    </div>
                    <button className="bg-secondary text-accent px-4 py-1 rounded-full hover:bg-yellow-500 transition-colors">
                        Request a Quote
                    </button>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-primary">
                        Custom Packaging
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {/* Industries Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('industries')}
                                className="text-accent hover:text-primary transition-colors font-medium"
                            >
                                Industries
                            </button>
                            {openDropdown === 'industries' && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border z-50">
                                    <div className="py-2">
                                        {industries.map((industry, index) => (
                                            <a
                                                key={index}
                                                href="#"
                                                className="block px-4 py-2 text-accent hover:bg-gray-50 hover:text-primary transition-colors"
                                            >
                                                {industry}
                                            </a>
                                        ))}
                                        <a href="#" className="block px-4 py-2 text-primary font-medium border-t mt-2">
                                            View All Industries
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Product Styles Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('products')}
                                className="text-accent hover:text-primary transition-colors font-medium"
                            >
                                Product Packaging Styles
                            </button>
                            {openDropdown === 'products' && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border z-50">
                                    <div className="py-2">
                                        {productStyles.map((style, index) => (
                                            <a
                                                key={index}
                                                href="#"
                                                className="block px-4 py-2 text-accent hover:bg-gray-50 hover:text-primary transition-colors"
                                            >
                                                {style}
                                            </a>
                                        ))}
                                        <a href="#" className="block px-4 py-2 text-primary font-medium border-t mt-2">
                                            View All Products
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <a href="#stories" className="text-accent hover:text-primary transition-colors font-medium">
                            Client Success Stories
                        </a>
                        <a href="#capabilities" className="text-accent hover:text-primary transition-colors font-medium">
                            Our Capabilities
                        </a>
                        <a href="#contact" className="text-accent hover:text-primary transition-colors font-medium">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-accent"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t">
                        <div className="container mx-auto px-4 py-4 space-y-4">
                            <a href="#" className="block text-accent hover:text-primary transition-colors font-medium">
                                Industries
                            </a>
                            <a href="#" className="block text-accent hover:text-primary transition-colors font-medium">
                                Product Packaging Styles
                            </a>
                            <a href="#stories" className="block text-accent hover:text-primary transition-colors font-medium">
                                Client Success Stories
                            </a>
                            <a href="#capabilities" className="block text-accent hover:text-primary transition-colors font-medium">
                                Our Capabilities
                            </a>
                            <a href="#contact" className="block text-accent hover:text-primary transition-colors font-medium">
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    const industries = [
        'Cosmetics & Skincare',
        'Food & Beverage',
        'Retail & E-commerce',
        'Healthcare',
        'Technology',
        'Fashion & Apparel'
    ];

    const products = [
        'Mailer Boxes',
        'Rigid Boxes',
        'Tuck Boxes',
        'Food Packaging',
        'Labels & Stickers',
        'Custom Bags'
    ];

    const company = [
        'About Us',
        'Our Process',
        'Quality Standards',
        'Sustainability',
        'Careers',
        'Press Kit'
    ];

    const support = [
        'Contact Support',
        'Design Services',
        'Shipping Info',
        'Return Policy',
        'Terms of Service',
        'Privacy Policy'
    ];

    return (
        <footer className="bg-[#02101f] text-white">
            <div className="container mx-auto px-4 pt-16 pb-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="text-2xl font-bold text-secondary mb-4">
                            Custom Packaging
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Premium custom packaging solutions that define your brand.
                            We specialize in eco-friendly, high-quality packaging with
                            competitive pricing and fast turnaround times.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center">
                                <Phone size={16} className="mr-3 text-secondary" />
                                <span>(866) 225-2112</span>
                            </div>
                            <div className="flex items-center">
                                <Mail size={16} className="mr-3 text-secondary" />
                                <span>info@custompackaging.com</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin size={16} className="mr-3 text-secondary" />
                                <span>123 Packaging Ave, Suite 100<br />Los Angeles, CA 90210</span>
                            </div>
                        </div>
                    </div>

                    {/* Industries */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-secondary">Industries</h3>
                        <ul className="space-y-2">
                            {industries.map((industry, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        {industry}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-secondary">Products</h3>
                        <ul className="space-y-2">
                            {products.map((product, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        {product}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-secondary">Support</h3>
                        <ul className="space-y-2">
                            {support.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Certifications & Trust Badges */}
                <div className="border-t border-gray-700 pt-8 mb-8">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2">
                                <span className="text-white font-bold text-lg">ISO</span>
                            </div>
                            <span className="text-sm text-gray-300">ISO 9001 Certified</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2">
                                <span className="text-white font-bold text-lg">FSC</span>
                            </div>
                            <span className="text-sm text-gray-300">FSC Certified</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2">
                                <span className="text-white font-bold text-lg">🌱</span>
                            </div>
                            <span className="text-sm text-gray-300">100% Recyclable</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2">
                                <span className="text-white font-bold text-lg">⭐</span>
                            </div>
                            <span className="text-sm text-gray-300">5-Star Reviews</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-300 text-sm mb-4 md:mb-0">
                        © 2024 Custom Packaging. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
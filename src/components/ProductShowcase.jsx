import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProductShowcase = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const productCategories = [
        {
            name: 'Mailer Boxes',
            description: 'Perfect for e-commerce shipping and unboxing experiences',
            image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80',
            features: ['Custom Printing', 'Eco-Friendly', 'Multiple Sizes']
        },
        {
            name: 'Cosmetic Packaging',
            description: 'Premium packaging solutions for beauty and skincare brands',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
            features: ['Luxury Finishes', 'Custom Inserts', 'Sustainable Materials']
        },
        {
            name: 'Food Packaging',
            description: 'Safe, attractive packaging for food and beverage products',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
            features: ['Food Grade', 'Moisture Resistant', 'Tamper Evident']
        },
        {
            name: 'Rigid Boxes',
            description: 'Premium rigid boxes for luxury products and gifts',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
            features: ['Magnetic Closure', 'Foam Inserts', 'Premium Materials']
        }
    ];

    const featuredProducts = [
        {
            name: 'Custom Mailer Box',
            category: 'E-commerce',
            image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
            price: 'From $0.85/unit'
        },
        {
            name: 'Luxury Cosmetic Box',
            category: 'Beauty',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
            price: 'From $1.25/unit'
        },
        {
            name: 'Food Safe Container',
            category: 'Food & Beverage',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80',
            price: 'From $0.65/unit'
        },
        {
            name: 'Premium Gift Box',
            category: 'Luxury',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
            price: 'From $2.15/unit'
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-accent mb-4">
                        Featured Product Categories
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our comprehensive range of premium packaging solutions designed
                        to elevate your brand and protect your products.
                    </p>
                </div>

                {/* Category Showcase */}
                <div className="grid lg:grid-cols-5 gap-8 mb-16">
                    {/* Main Featured Product */}
                    <div className="lg:col-span-3">
                        <Card className="overflow-hidden h-full shadow-xl">
                            <div className="relative h-96">
                                <img
                                    src={productCategories[activeCategory].image}
                                    alt={productCategories[activeCategory].name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-3xl font-bold mb-2">
                                        {productCategories[activeCategory].name}
                                    </h3>
                                    <p className="text-lg mb-4 opacity-90">
                                        {productCategories[activeCategory].description}
                                    </p>
                                    <div className="flex gap-2">
                                        {productCategories[activeCategory].features.map((feature, index) => (
                                            <span
                                                key={index}
                                                className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Category Grid */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                        {productCategories.map((category, index) => (
                            <Card
                                key={index}
                                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${activeCategory === index ? 'ring-2 ring-primary' : ''
                                    }`}
                                onClick={() => setActiveCategory(index)}
                            >
                                <CardContent className="p-4">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-24 object-cover rounded-lg mb-3"
                                    />
                                    <h4 className="font-semibold text-accent text-sm">
                                        {category.name}
                                    </h4>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <CardContent className="p-0">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-secondary text-accent px-2 py-1 rounded-full text-xs font-medium">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-accent mb-2">{product.name}</h3>
                                    <p className="text-primary font-bold">{product.price}</p>
                                    <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                                        Get Quote
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
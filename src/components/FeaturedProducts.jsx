"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Carousel from './Carousel';

const FeaturedProducts = ({ subHeading, title, description, productsData }) => {
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [currentSlide, setCurrentSlide] = useState(0); // You forgot this

    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };
        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, []);

    // const featuredProducts = [
    //     {
    //         id: 1,
    //         name: "Premium Food Boxes",
    //         category: "Food Packaging",
    //         image: "https://images.surferseo.art/a8111e4f-d953-4a54-a8f3-7279abd6d117.png",
    //         rating: 4.9,
    //         reviews: 156,
    //         price: "From $2.50",
    //         features: ["Food Safe", "Custom Design", "Eco-Friendly"]
    //     },
    //     {
    //         id: 2,
    //         name: "Cosmetic Packaging",
    //         category: "Cosmetics",
    //         image: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_336x420/images/client-success-stories/kind-laundry-thumbnail-home.webp",
    //         rating: 4.8,
    //         reviews: 203,
    //         price: "From $3.20",
    //         features: ["Premium Finish", "UV Protection", "Magnetic Closure"]
    //     },
    //     {
    //         id: 3,
    //         name: "E-commerce Mailers",
    //         category: "Shipping",
    //         image: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_550x550/https://www.halfpricepackaging.com/storage/product_uploads/ecommerce-mailer-boxes-with-logo.jpg",
    //         rating: 4.9,
    //         reviews: 189,
    //         price: "From $1.80",
    //         features: ["Water Resistant", "Tear Proof", "Self Seal"]
    //     },
    //     {
    //         id: 4,
    //         name: "Custom Retail Boxes",
    //         category: "Retail",
    //         image: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_336x336/https://www.halfpricepackaging.com/storage/product_uploads/archive-boxes.jpg",
    //         rating: 4.7,
    //         reviews: 142,
    //         price: "From $1.50",
    //         features: ["Reinforced Handles", "Custom Print", "Recyclable"]
    //     },
    //     {
    //         id: 5,
    //         name: "Pharmaceutical Boxes",
    //         category: "Healthcare",
    //         image: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_550x550/https://www.halfpricepackaging.com/storage/product_uploads/pharmaceutical-packaging-manufacturers.jpg",
    //         rating: 5.0,
    //         reviews: 98,
    //         price: "From $4.00",
    //         features: ["Child Resistant", "Tamper Evident", "FDA Approved"]
    //     }
    // ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % productsData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + productsData.length) % productsData.length);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-accent mb-6">
                        {title} <span className="text-gradient">Packaging</span>
                    </h2>
                    <p className="text-xl text-accent-muted max-w-3xl mx-auto">{description}</p>
                </div>

                {/* Main Featured Product + 4 Grid Layout */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Main Featured Product */}
                    <div className="lg:col-span-2 h-full">
                        <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={productsData[0].image}
                                    alt={productsData[0].name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    {/* <div className="flex items-center mb-2">
                                        <Star className="w-5 h-5 fill-secondary text-secondary mr-1" />
                                        <span className="font-semibold">{productsData[0].rating}</span>
                                        <span className="text-sm opacity-80 ml-2">({productsData[0].reviews} reviews)</span>
                                    </div> */}
                                    <h3 className="text-2xl font-bold mb-2">{productsData[0].name}</h3>
                                </div>
                            </div>
                            {/* <div className="p-6">
                                <div className="flex flex-wrap gap-2">
                                    {productsData[0].features.map((feature, index) => (
                                        <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* 4 Smaller Products Grid */}
                    <div className="grid grid-cols-2 gap-4 h-full">
                        {productsData.slice(1, 5).map((product) => (
                            <div key={product.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover-lift">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-sm text-accent mb-1 line-clamp-2">{product.name}</h4>
                                    <div className="flex items-center justify-between">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="border-primary text-primary hover:bg-primary hover:text-white px-2 py-1 text-sm"
                                        >
                                            Request Quote
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel Section */}
                {(subHeading&& productsData) &&<div className="relative">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-accent">{subHeading}</h3>
                        <div className="flex gap-2">
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                            >
                                <ChevronLeft className="w-5 h-5 text-accent" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                            >
                                <ChevronRight className="w-5 h-5 text-accent" />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
                        >
                            {productsData.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex-shrink-0 px-2"
                                    style={{ width: `${100 / slidesPerView}%` }}
                                >
                                    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover-lift">
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="text-sm text-primary font-medium mb-2">{product.category}</div>
                                            <h4 className="text-lg font-bold text-accent mb-2">{product.name}</h4>
                                            <div className="flex items-center mb-3">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-accent-muted ml-2">({product.reviews})</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <Button
                                                    variant="outline"
                                                    size="lg"
                                                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
                                                >
                                                    Get Started
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>}
            </div>
        </section>
    );
};

export default FeaturedProducts;

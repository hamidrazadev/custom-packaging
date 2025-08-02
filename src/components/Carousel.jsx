"use client"
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
// import { Button } from '@/components/ui/button';

const Carousel = ({ subHeading, productsData }) => {
    const [slidesPerView, setSlidesPerView] = useState(3);
        const [currentSlide, setCurrentSlide] = useState(0);
    
        useEffect(() => {
            const updateSlidesPerView = () => {
                if (window.innerWidth < 440) {
                    setSlidesPerView(1);
                }else if (window.innerWidth < 640) {
                    setSlidesPerView(2);
                } else if (window.innerWidth < 1024) {
                    setSlidesPerView(3);
                } else {
                    setSlidesPerView(5);
                }
            };
            updateSlidesPerView();
            window.addEventListener("resize", updateSlidesPerView);
            return () => window.removeEventListener("resize", updateSlidesPerView);
        }, []);

        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % productsData.length);
        };

        const prevSlide = () => {
            setCurrentSlide((prev) => (prev - 1 + productsData.length) % productsData.length);
        };

    return ( 
        <section className={`py-20 bg-[#90b4d7]`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className={"text-2xl font-bold text-white"}>{subHeading}</h3>
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
                                            {/* <div className="flex items-center mb-3">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-accent-muted ml-2">({product.reviews})</span>
                                            </div> */}
                                            {/* <div className="flex items-center justify-between">
                                                <Button
                                                    variant="outline"
                                                    size="lg"
                                                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
                                                >
                                                    Get Started
                                                </Button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;
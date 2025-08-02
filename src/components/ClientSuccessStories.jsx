'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ClientSuccessStories = () => {
    const [currentStory, setCurrentStory] = useState(0);

    const successStories = [
        {
            id: 1,
            company: "FreshBite Foods",
            industry: "Food & Beverage",
            image: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_336x236/images/client-success-stories/nav-bonbon-nyc-thumb.webp",
            logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100",
            challenge: "Needed eco-friendly packaging that kept food fresh longer",
            solution: "Custom biodegradable containers with advanced sealing technology",
            results: [
                "40% increase in shelf life",
                "60% reduction in plastic waste",
                "25% boost in customer satisfaction"
            ],
            testimonial: "Half Price Packaging transformed our brand. The sustainable packaging not only keeps our food fresher but also aligns perfectly with our eco-conscious values.",
            author: "Sarah Johnson",
            position: "CEO, FreshBite Foods",
            growth: "+150% sales growth"
        },
        {
            id: 2,
            company: "Luxe Cosmetics",
            industry: "Beauty & Personal Care",
            image: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_336x236/images/client-success-stories/nav-roxyglxm-thumb.webp",
            logo: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=100",
            challenge: "Required premium packaging to match luxury brand positioning",
            solution: "Custom embossed boxes with magnetic closures and premium finishes",
            results: [
                "300% increase in unboxing videos",
                "45% higher perceived value",
                "80% customer retention rate"
            ],
            testimonial: "The packaging quality exceeded our expectations. Our customers now associate our brand with luxury from the moment they receive their order.",
            author: "Michael Chen",
            position: "Brand Director, Luxe Cosmetics",
            growth: "+200% brand value"
        },
        {
            id: 3,
            company: "TechGear Pro",
            industry: "Electronics",
            image: "https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_336x236/images/client-success-stories/nav-bur-bur-care-thumb.webp",
            logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100",
            challenge: "Needed protective packaging for delicate electronic components",
            solution: "Anti-static custom inserts with shock-absorbing foam padding",
            results: [
                "95% reduction in shipping damage",
                "50% decrease in returns",
                "35% cost savings on replacements"
            ],
            testimonial: "Our damage rates dropped dramatically after switching to Half Price Packaging. The custom protection solutions are exactly what we needed.",
            author: "David Rodriguez",
            position: "Operations Manager, TechGear Pro",
            growth: "+75% profit margin"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStory((prev) => (prev + 1) % successStories.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const nextStory = () => {
        setCurrentStory((prev) => (prev + 1) % successStories.length);
    };

    const prevStory = () => {
        setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
    };

    const currentData = successStories[currentStory];

    return (
        <section id="stories" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-accent mb-6">
                        Inspiring <span className="text-gradient">Client Success Stories</span>
                    </h2>
                    <p className="text-xl text-accent-muted max-w-3xl mx-auto">
                        Real businesses, real results. See how our packaging solutions transformed their success
                    </p>
                </div>

                {/* Main Story Slideshow */}
                <div className="relative">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            {/* Image Side */}
                            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                                <img
                                    src={currentData.image}
                                    alt={currentData.company}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <div className="flex items-center mb-2">
                                        <img
                                            src={currentData.logo}
                                            alt={`${currentData.company} logo`}
                                            className="w-12 h-12 rounded-full bg-white p-1"
                                        />
                                        <div className="ml-3 text-white">
                                            <h3 className="font-bold text-lg">{currentData.company}</h3>
                                            <p className="text-sm opacity-90">{currentData.industry}</p>
                                        </div>
                                    </div>
                                    <div className="bg-secondary text-accent px-3 py-1 rounded-full text-sm font-semibold">
                                        {currentData.growth}
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 lg:p-12">
                                <div className="h-full flex flex-col justify-center">
                                    {/* Quote */}
                                    <Quote className="w-12 h-12 text-primary/20 mb-6" />

                                    <blockquote className="text-xl lg:text-2xl text-accent font-medium leading-relaxed mb-8">
                                        "{currentData.testimonial}"
                                    </blockquote>

                                    {/* Author */}
                                    <div className="mb-8">
                                        <div className="font-bold text-accent text-lg">{currentData.author}</div>
                                        <div className="text-accent-muted">{currentData.position}</div>
                                    </div>

                                    {/* Results */}
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-accent mb-4">Key Results:</h4>
                                        {currentData.results.map((result, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                                <span className="text-accent-muted">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        <button
                            onClick={prevStory}
                            className="flex items-center px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <ChevronLeft className="w-5 h-5 text-accent mr-2" />
                            <span className="font-medium text-accent">Previous</span>
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex space-x-2">
                            {successStories.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentStory(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStory ? 'bg-primary w-8' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextStory}
                            className="flex items-center px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <span className="font-medium text-accent">Next</span>
                            <ChevronRight className="w-5 h-5 text-accent ml-2" />
                        </button>
                    </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                    {[
                        { number: "500+", label: "Success Stories", color: "text-primary" },
                        { number: "95%", label: "Client Satisfaction", color: "text-accent" },
                        { number: "200%", label: "Average Growth", color: "text-primary" },
                        { number: "24/7", label: "Support Available", color: "text-accent" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className={`text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                                {stat.number}
                            </div>
                            <div className="text-accent-muted font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientSuccessStories;
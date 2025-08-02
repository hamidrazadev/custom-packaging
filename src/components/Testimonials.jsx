import { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            company: "Green Eats Co.",
            role: "Founder & CEO",
            content: "Custom Packaging transformed our brand image completely. Their eco-friendly solutions perfectly align with our values, and the quality is outstanding. Our customers love the unboxing experience!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=100&h=100&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "Michael Chen",
            company: "Luxe Beauty",
            role: "Marketing Director",
            content: "The attention to detail and premium finish on our cosmetic packaging exceeded all expectations. Sales increased by 40% after switching to Custom Packaging. Highly recommended!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            company: "Artisan Coffee Co.",
            role: "Operations Manager",
            content: "Their subscription box design is genius! It's functional, beautiful, and our coffee stays fresh during shipping. Customer retention has improved significantly since we started using their packaging.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        },
        {
            id: 4,
            name: "David Thompson",
            company: "Tech Innovations",
            role: "Product Manager",
            content: "Professional, reliable, and innovative. Custom Packaging delivered exactly what we needed for our product launch. The protective packaging saved us thousands in damaged goods returns.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 animate-fade-in">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent mb-4">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className="text-base sm:text-xl text-accent-muted max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it. Here's what industry leaders have to say about their experience working with Custom Packaging.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden rounded-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 p-4 sm:p-6">
                                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-custom">

                                        {/* Quote Icon */}
                                        <div className="flex justify-center mb-4 sm:mb-6">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L4.414 9H17a1 1 0 100-2H4.414l1.879-1.879z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex justify-center mb-4 sm:mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Testimonial Content */}
                                        <blockquote className="text-base sm:text-xl text-accent text-center leading-relaxed mb-6 sm:mb-8 font-medium">
                                            "{testimonial.content}"
                                        </blockquote>

                                        {/* Author */}
                                        <div className="flex items-center justify-center">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                                            />
                                            <div className="text-center">
                                                <div className="font-display font-semibold text-accent text-sm sm:text-base">{testimonial.name}</div>
                                                <div className="text-xs sm:text-sm text-accent-muted">{testimonial.role}, {testimonial.company}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-6 sm:w-8' : 'bg-gray-300 w-2.5 sm:w-3'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 text-white text-center animate-scale-in">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">4.9/5</div>
                            <div className="text-primary-foreground/80 text-sm sm:text-base">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">99%</div>
                            <div className="text-primary-foreground/80 text-sm sm:text-base">Client Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">150+</div>
                            <div className="text-primary-foreground/80 text-sm sm:text-base">Five-Star Reviews</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

const Services = () => {
    const services = [
        {
            title: "Food Packaging",
            description: "Safe, sustainable packaging solutions for restaurants, food brands, and catering services.",
            features: ["FDA Approved Materials", "Custom Branding", "Eco-Friendly Options", "Bulk Ordering"],
            icon: (
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7z..." clipRule="evenodd" />
                </svg>
            ),
            color: "from-green-400 to-primary"
        },
        {
            title: "Cosmetic Packaging",
            description: "Elegant, premium packaging that showcases your beauty and skincare products perfectly.",
            features: ["Luxury Finishes", "Custom Shapes", "Sustainable Materials", "Brand Integration"],
            icon: (
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                </svg>
            ),
            color: "from-pink-400 to-secondary"
        },
        {
            title: "Retail Packaging",
            description: "Eye-catching retail packaging that drives sales and enhances your product presentation.",
            features: ["Point-of-Sale Design", "Shelf-Ready Packaging", "Security Features", "Cost-Effective"],
            icon: (
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8.5 13a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" clipRule="evenodd" />
                </svg>
            ),
            color: "from-blue-400 to-primary"
        },
        {
            title: "E-commerce Packaging",
            description: "Protective, branded packaging designed for safe shipping and memorable unboxing experiences.",
            features: ["Shipping Protection", "Unboxing Experience", "Sustainable Materials", "Size Optimization"],
            icon: (
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
            ),
            color: "from-purple-400 to-secondary"
        }
    ];

    return (
        <section id="services" className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 animate-fade-in">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent mb-4">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-base sm:text-xl text-accent-muted max-w-3xl mx-auto leading-relaxed">
                        From food to cosmetics, retail to e-commerce - we provide specialized packaging solutions tailored to your industry's unique requirements.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Service Header */}
                            <div className={`bg-gradient-to-r ${service.color} p-6 sm:p-8 text-white relative overflow-hidden`}>
                                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                                    {service.icon}
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center mb-4">
                                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                                            <div className="text-white">{service.icon}</div>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-display font-bold">{service.title}</h3>
                                    </div>
                                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">{service.description}</p>
                                </div>
                            </div>

                            {/* Service Features */}
                            <div className="p-6 sm:p-8">
                                <ul className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-accent-muted text-sm sm:text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors duration-300 text-sm sm:text-base"
                                    >
                                        Learn More
                                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12 animate-scale-in">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-center text-accent mb-8 sm:mb-12">Our Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            { step: "01", title: "Consultation", description: "We discuss your needs, brand, and goals" },
                            { step: "02", title: "Design", description: "Our team creates custom packaging concepts" },
                            { step: "03", title: "Production", description: "High-quality manufacturing with eco-materials" },
                            { step: "04", title: "Delivery", description: "Fast, reliable shipping to your location" }
                        ].map((process, index) => (
                            <div key={index} className="text-center relative">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold">
                                    {process.step}
                                </div>
                                <h4 className="text-lg sm:text-xl font-display font-semibold text-accent mb-2">{process.title}</h4>
                                <p className="text-accent-muted text-sm sm:text-base">{process.description}</p>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full">
                                        <div className="w-8 h-0.5 bg-primary/30"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

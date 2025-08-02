const About = () => {
    const values = [
        {
            icon: (
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Quality Assurance",
            description: "Premium materials and rigorous quality control ensure your packaging exceeds expectations."
        },
        {
            icon: (
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
            ),
            title: "Full Customization",
            description: "From design to materials, every aspect can be tailored to match your brand perfectly."
        },
        {
            icon: (
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
            ),
            title: "Eco-Friendly",
            description: "Sustainable materials and processes that protect both your products and the environment."
        },
        {
            icon: (
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Affordable Pricing",
            description: "Competitive rates without compromising on quality, making premium packaging accessible."
        }
    ];

    return (
        <section id="about" className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 animate-fade-in">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent mb-4">
                        About <span className="text-gradient">Custom Packaging</span>
                    </h2>
                    <p className="text-base sm:text-xl text-accent-muted max-w-3xl mx-auto leading-relaxed">
                        We're dedicated to providing innovative packaging solutions that enhance your brand while protecting our planet.
                        Our mission is to make premium, sustainable packaging accessible to businesses of all sizes.
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="bg-gray-50 rounded-2xl shadow-custom p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 animate-scale-in">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-accent mb-4 sm:mb-6">Our Mission</h3>
                            <p className="text-base sm:text-lg text-accent-muted mb-4 sm:mb-6 leading-relaxed">
                                To revolutionize the packaging industry by combining cutting-edge design, sustainable materials,
                                and affordable pricing. We believe every business deserves packaging that tells their story beautifully.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-accent text-sm sm:text-base">Certified Sustainable</p>
                                    <p className="text-xs sm:text-sm text-accent-muted">FSC Certified & Carbon Neutral</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[16/10] max-h-80 overflow-hidden rounded-2xl">
                                <img
                                    src={"https://images.surferseo.art/a8111e4f-d953-4a54-a8f3-7279abd6d117.png"}
                                    alt={"Product Image"}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Grid */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover-lift text-center animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-primary">
                                {value.icon}
                            </div>
                            <h4 className="text-lg sm:text-xl font-display font-semibold text-accent mb-2 sm:mb-4">{value.title}</h4>
                            <p className="text-sm sm:text-base text-accent-muted leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default About;

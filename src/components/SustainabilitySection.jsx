"use client"
import { useState } from 'react';
import { Leaf, Recycle, Award, Globe } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SustainabilitySection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const sustainabilityFeatures = [
        {
            icon: Leaf,
            title: "100% Recyclable Materials",
            description: "All our packaging is made from fully recyclable materials, reducing environmental impact.",
            details: "We source materials from certified sustainable suppliers and ensure complete recyclability through our closed-loop system.",
            stat: "95% reduction in waste"
        },
        {
            icon: Recycle,
            title: "Carbon Neutral Production",
            description: "Our manufacturing process is completely carbon neutral with renewable energy sources.",
            details: "Solar-powered facilities and wind energy partnerships make our production process environmentally friendly.",
            stat: "0 carbon footprint"
        },
        {
            icon: Award,
            title: "Certified Eco-Friendly",
            description: "Certified by major environmental organizations for sustainable packaging practices.",
            details: "FSC certified materials, cradle-to-cradle design principles, and third-party environmental audits.",
            stat: "5+ certifications"
        },
        {
            icon: Globe,
            title: "Global Impact Initiative",
            description: "Contributing to reforestation projects with every order placed by our customers.",
            details: "One tree planted for every 100 packages ordered, supporting global reforestation efforts worldwide.",
            stat: "50K+ trees planted"
        }
    ];

    return (
        <section id="sustainability" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-accent mb-6">
                        Half Price Packaging's Commitment to a <span className="text-gradient">Sustainable Tomorrow</span>
                    </h2>
                    <p className="text-xl text-accent-muted max-w-3xl mx-auto">
                        Leading the industry in eco-friendly packaging solutions that protect your products and our planet
                    </p>
                </div>

                {/* Interactive Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sustainabilityFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        const isHovered = hoveredCard === index;

                        return (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-accent-muted mb-4 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Stat Badge */}
                                <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary font-semibold text-sm rounded-full mb-4">
                                    {feature.stat}
                                </div>

                                {/* Expandable Details */}
                                <div className={`overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-4 border-t border-gray-200">
                                        <p className="text-sm text-accent-muted leading-relaxed">
                                            {feature.details}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Indicator */}
                                <div className={`absolute bottom-4 right-4 w-3 h-3 rounded-full bg-primary transition-all duration-300 ${isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { number: 500, suffix: "M+", label: "Packages Recycled" },
                        { number: 85, suffix: "%", label: "Waste Reduction" },
                        { number: 50, suffix: "+", label: "Countries Served" },
                        { number: 1, suffix: "M+", label: "Trees Saved" }
                    ].map((stat, index) => {
                        const { ref, inView } = useInView({ triggerOnce: false });

                        return (
                            <div key={index} ref={ref} className="group">
                                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {inView && <CountUp end={stat.number} duration={2.5} separator="," />}
                                    {stat.suffix}
                                </div>
                                <div className="text-accent-muted font-medium">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;

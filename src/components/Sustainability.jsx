import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Sustainability = () => {
    const initiatives = [
        {
            icon: '🌱',
            title: 'Eco-Friendly Materials',
            description: 'We use recycled and biodegradable materials in all our packaging solutions.'
        },
        {
            icon: '♻️',
            title: 'Sustainable Manufacturing',
            description: 'Our production processes minimize waste and reduce environmental impact.'
        },
        {
            icon: '🌍',
            title: 'Carbon Neutral Shipping',
            description: 'We offset carbon emissions from shipping to maintain a green supply chain.'
        },
        {
            icon: '🌿',
            title: 'Forest-Friendly Sourcing',
            description: 'All our paper and cardboard materials come from responsibly managed forests.'
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-green-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-accent mb-4">
                        Our Commitment to <span className="text-primary">Sustainability</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We believe in protecting our planet while delivering exceptional packaging solutions.
                        Every product we create is designed with environmental responsibility in mind.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {initiatives.map((initiative, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6">
                                <div className="text-4xl mb-4">{initiative.icon}</div>
                                <h3 className="text-xl font-semibold text-accent mb-3">
                                    {initiative.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {initiative.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Sustainability Stats */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">95%</div>
                            <div className="text-gray-600">Recyclable Materials Used</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">50%</div>
                            <div className="text-gray-600">Waste Reduction Achieved</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">100%</div>
                            <div className="text-gray-600">Carbon Neutral Shipping</div>
                        </div>
                    </div>
                </div>

                {/* Green Products CTA */}
                <div className="text-center mt-12">
                    <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold">
                        Explore Eco-Friendly Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
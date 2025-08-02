import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Capabilities = () => {
    const capabilities = [
        {
            icon: '🌍',
            title: 'Global Sourcing',
            description: 'Access to worldwide suppliers ensuring competitive pricing and quality materials.'
        },
        {
            icon: '🎨',
            title: '3D Design Services',
            description: 'Advanced 3D modeling and visualization to perfect your packaging before production.'
        },
        {
            icon: '⚡',
            title: 'Flexible Lead Times',
            description: 'Standard and rush production options to meet your timeline requirements.'
        },
        {
            icon: '💰',
            title: 'Price Match Guarantee',
            description: 'We match competitor pricing while maintaining our superior quality standards.'
        },
        {
            icon: '🖨️',
            title: 'High-Volume Printing',
            description: 'State-of-the-art printing technology for large-scale production runs.'
        },
        {
            icon: '🕐',
            title: '24/7 Support',
            description: 'Round-the-clock customer service to assist you at every step of your project.'
        },
        {
            icon: '💳',
            title: 'Custom Payment Plans',
            description: 'Flexible payment options including NET terms for established businesses.'
        },
        {
            icon: '✅',
            title: 'Quality Assurance',
            description: 'Rigorous quality control processes ensuring every product meets our high standards.'
        }
    ];

    return (
        <section id="capabilities" className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-accent mb-4">
                        Our <span className="text-primary">Capabilities</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover what sets us apart in the packaging industry. Our comprehensive
                        capabilities ensure we can handle any project, from concept to delivery.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {capabilities.map((capability, index) => (
                        <Card
                            key={index}
                            className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <CardContent className="p-6">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {capability.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-accent mb-3">
                                    {capability.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {capability.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Key Stats */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">15+</div>
                            <div className="text-gray-600 text-sm">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                            <div className="text-gray-600 text-sm">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">50+</div>
                            <div className="text-gray-600 text-sm">Countries Served</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">99%</div>
                            <div className="text-gray-600 text-sm">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;

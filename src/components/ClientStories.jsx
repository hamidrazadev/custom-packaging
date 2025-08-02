import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ClientStories = () => {
    const [activeStory, setActiveStory] = useState(0);

    const stories = [
        {
            company: 'Pure Beauty Cosmetics',
            logo: 'PBC',
            industry: 'Beauty & Skincare',
            challenge: 'Needed premium packaging for new product launch',
            solution: 'Custom rigid boxes with magnetic closure and foam inserts',
            result: '150% increase in perceived product value and 40% boost in sales',
            quote: 'Custom Packaging transformed our brand image completely. The quality exceeded our expectations!',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
        },
        {
            company: 'Artisan Bakery Co.',
            logo: 'ABC',
            industry: 'Food & Beverage',
            challenge: 'Required food-safe packaging that maintained freshness',
            solution: 'Custom food-grade boxes with moisture-resistant coating',
            result: 'Extended product shelf life by 30% and improved customer satisfaction',
            quote: 'Our products stay fresh longer and look amazing. Customer feedback has been incredible!',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80'
        },
        {
            company: 'TechStart Gadgets',
            logo: 'TSG',
            industry: 'Technology',
            challenge: 'Needed protective packaging for delicate electronics',
            solution: 'Custom mailer boxes with protective foam and anti-static lining',
            result: '90% reduction in shipping damage and enhanced unboxing experience',
            quote: 'Zero damaged products since switching to Custom Packaging. Their service is outstanding!',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
        }
    ];

    return (
        <section id="stories" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-accent mb-4">
                        Inspiring Client <span className="text-primary">Success Stories</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See how Custom Packaging has helped businesses across industries achieve
                        their packaging goals and elevate their brand presence.
                    </p>
                </div>

                {/* Featured Story */}
                <div className="mb-12">
                    <Card className="overflow-hidden shadow-2xl">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-8 lg:p-12">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                                        {stories[activeStory].logo}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-accent">
                                            {stories[activeStory].company}
                                        </h3>
                                        <p className="text-gray-600">{stories[activeStory].industry}</p>
                                    </div>
                                </div>

                                <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                                    "{stories[activeStory].quote}"
                                </blockquote>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-accent mb-2">Challenge:</h4>
                                        <p className="text-gray-600">{stories[activeStory].challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-accent mb-2">Solution:</h4>
                                        <p className="text-gray-600">{stories[activeStory].solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-accent mb-2">Result:</h4>
                                        <p className="text-primary font-semibold">{stories[activeStory].result}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src={stories[activeStory].image}
                                    alt={stories[activeStory].company}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Story Navigation */}
                <div className="grid md:grid-cols-3 gap-6">
                    {stories.map((story, index) => (
                        <Card
                            key={index}
                            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${activeStory === index ? 'ring-2 ring-primary' : ''
                                }`}
                            onClick={() => setActiveStory(index)}
                        >
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                                    {story.logo}
                                </div>
                                <h4 className="font-semibold text-accent mb-2">{story.company}</h4>
                                <p className="text-sm text-gray-600">{story.industry}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button className="bg-primary hover:bg-green-600 text-white px-8 py-3">
                        View More Success Stories
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ClientStories;
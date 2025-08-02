import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const BlogPreview = () => {
    const blogPosts = [
        {
            title: '2024 Packaging Trends: Sustainability Meets Innovation',
            excerpt: 'Explore the latest trends in eco-friendly packaging design and how they\'re shaping the industry landscape.',
            image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
            date: 'December 15, 2024',
            category: 'Industry Trends'
        },
        {
            title: 'The Complete Guide to Custom Mailer Box Design',
            excerpt: 'Learn how to create packaging that protects your products while delivering an unforgettable unboxing experience.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
            date: 'December 10, 2024',
            category: 'Design Tips'
        },
        {
            title: 'Cost-Effective Packaging Solutions for Small Businesses',
            excerpt: 'Discover strategies to reduce packaging costs without compromising quality or brand appeal.',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80',
            date: 'December 5, 2024',
            category: 'Business Tips'
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-accent mb-4">
                        Latest <span className="text-primary">Insights</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay updated with the latest packaging trends, tips, and industry news
                        from our team of packaging experts.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                        >
                            <CardContent className="p-0">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-gray-500 text-sm mb-3">
                                        <Calendar size={16} className="mr-2" />
                                        {post.date}
                                    </div>
                                    <h3 className="text-xl font-semibold text-accent mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <button className="text-primary font-semibold hover:text-green-600 transition-colors">
                                        Read More →
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-primary text-white hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
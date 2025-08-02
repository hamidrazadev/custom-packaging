import { useState } from 'react';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'food', name: 'Food Packaging' },
        { id: 'cosmetic', name: 'Cosmetics' },
        { id: 'retail', name: 'Retail' },
        { id: 'ecommerce', name: 'E-commerce' }
    ];

    const projects = [
        {
            id: 1,
            title: "Organic Food Boxes",
            category: "food",
            description: "Sustainable packaging for organic meal delivery service",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
            tags: ["Eco-Friendly", "Custom Design", "Food Safe"]
        },
        {
            id: 2,
            title: "Luxury Skincare Line",
            category: "cosmetic",
            description: "Premium packaging for high-end skincare products",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
            tags: ["Luxury Finish", "Custom Shapes", "Sustainable"]
        },
        {
            id: 3,
            title: "Tech Accessories Retail",
            category: "retail",
            description: "Modern packaging for electronics and accessories",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
            tags: ["Modern Design", "Protective", "Shelf-Ready"]
        },
        {
            id: 4,
            title: "Artisan Coffee Subscription",
            category: "ecommerce",
            description: "Custom boxes for monthly coffee subscription service",
            image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop",
            tags: ["Subscription Box", "Branding", "Shipping Safe"]
        },
        {
            id: 5,
            title: "Gourmet Bakery Boxes",
            category: "food",
            description: "Elegant packaging for premium bakery products",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
            tags: ["Food Grade", "Window Display", "Custom Print"]
        },
        {
            id: 6,
            title: "Natural Beauty Products",
            category: "cosmetic",
            description: "Eco-conscious packaging for natural beauty brand",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
            tags: ["Natural Materials", "Minimalist", "Sustainable"]
        }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="portfolio" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 animate-fade-in">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent mb-4">
                        Our <span className="text-gradient">Portfolio</span>
                    </h2>
                    <p className="text-base sm:text-xl text-accent-muted max-w-3xl mx-auto leading-relaxed">
                        Explore our diverse collection of custom packaging solutions that have helped brands stand out and succeed in their respective markets.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 animate-scale-in overflow-x-auto">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${activeCategory === category.id
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white text-accent hover:bg-primary hover:text-white shadow-md'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift animate-fade-in group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="bg-white/90 text-accent text-xs px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-5 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-display font-semibold text-accent mb-2">{project.title}</h3>
                                <p className="text-accent-muted text-sm sm:text-base mb-4 leading-relaxed">{project.description}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-primary font-medium capitalize">{project.category} Packaging</span>
                                    <button className="text-primary hover:text-primary-dark transition-colors duration-300">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-primary rounded-2xl p-6 sm:p-8 lg:p-12 text-white text-center animate-scale-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            { number: "500+", label: "Projects Completed" },
                            { number: "150+", label: "Happy Clients" },
                            { number: "50+", label: "Industries Served" },
                            { number: "99%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                                <div className="text-primary-foreground/80 text-sm sm:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

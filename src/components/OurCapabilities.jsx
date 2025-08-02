"use client"
import { useState } from 'react';
import { Package, Palette, Shield, Truck, Award, Users, Clock, Globe } from 'lucide-react';

const OurCapabilities = () => {
  const [hoveredCapability, setHoveredCapability] = useState(null);

  const capabilities = [
    {
      icon: Package,
      title: "Custom Design & Manufacturing",
      description: "End-to-end custom packaging solutions tailored to your brand",
      features: ["3D Mockups", "Prototype Development", "Brand Integration", "Size Optimization"],
      color: "bg-blue-500"
    },
    {
      icon: Palette,
      title: "Advanced Printing & Finishing",
      description: "State-of-the-art printing technology with premium finishing options",
      features: ["Full-Color Printing", "Pantone Matching", "Foil Stamping", "Embossing/Debossing"],
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control for every single package",
      features: ["Material Testing", "Durability Checks", "Color Accuracy", "Size Verification"],
      color: "bg-green-500"
    },
    {
      icon: Truck,
      title: "Fast & Reliable Delivery",
      description: "Quick turnaround times with reliable shipping worldwide",
      features: ["Express Options", "Global Shipping", "Order Tracking", "Damage Protection"],
      color: "bg-yellow-500"
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Fully certified for food safety, pharmaceuticals, and more",
      features: ["FDA Approved", "FSC Certified", "ISO Standards", "Food Safe Materials"],
      color: "bg-pink-500"
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "Expert consultation and support throughout your packaging journey",
      features: ["Design Consultation", "24/7 Support", "Account Management", "Technical Assistance"],
      color: "bg-orange-500"
    },
    {
      icon: Clock,
      title: "Rush Order Capability",
      description: "Emergency and rush orders with 24-48 hour turnaround",
      features: ["24hr Rush Orders", "Emergency Production", "Priority Processing", "Express Shipping"],
      color: "bg-red-500"
    },
    {
      icon: Globe,
      title: "Sustainable Solutions",
      description: "Eco-friendly packaging options for environmentally conscious brands",
      features: ["100% Recyclable", "Biodegradable Options", "Carbon Neutral", "Sustainable Sourcing"],
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-accent mb-6">
            Our <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-xl text-accent-muted max-w-3xl mx-auto">
            Comprehensive packaging solutions backed by cutting-edge technology and industry expertise
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isHovered = hoveredCapability === index;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden"
                onMouseEnter={() => setHoveredCapability(index)}
                onMouseLeave={() => setHoveredCapability(null)}
              >
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 ${capability.color} scale-110 shadow-lg`}>
                    <Icon className={`w-8 h-8 transition-colors duration-300 text-white`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  <p className="text-accent-muted mb-4 leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Features List */}
                  <div className={`space-y-2 transition-all duration-500 ${
                    isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${capability.color}`}></div>
                        <span className="text-accent-muted">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Indicator */}
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${capability.color} transition-all duration-300 ${
                    isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Ready to Experience Our Full Capabilities?
            </h3>
            <p className="text-accent-muted mb-6 max-w-2xl mx-auto">
              Let our team of packaging experts show you how we can transform your product packaging with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Schedule Consultation
              </a>
              <a
                href="#portfolio"
                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCapabilities;
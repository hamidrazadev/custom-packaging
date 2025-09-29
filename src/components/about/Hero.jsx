'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
    const [open, setOpen] = useState(false);
    return (
        <section className="pt-8 pb-16 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="animate-fade-in">
                        <h1 className="text-5xl lg:text-6xl font-bold text-accent mb-6 leading-tight">
                            About Us
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We give your product the attention they deserve.
                        </p>

                        {/* Special Offer Banner */}
                        {/* <div className="bg-secondary text-accent p-4 rounded-lg mb-8 border-l-4 border-primary">
                            <p className="font-semibold text-lg">🎉 Special Launch Offer!</p>
                            <p className="text-base">Grab 20% off your first order plus free shipping!</p>
                        </div> */}

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={'/catalogue'}
                                className="btn-lg"
                            >
                                Browse Catalog
                            </Link>
                            <Link
                                href={'/contact'}
                                className="btn-lg-outline"
                            >
                                Request Quote
                            </Link>
                            {/* <FormDialog open={open} onOpenChange={setOpen} /> */}
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Eco-Friendly Materials</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Custom Design Service</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Fast Turnaround</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="animate-slide-in">
                        <div className="relative">
                            <img
                                src="/assets/images/Placeholders/HeroOfAbout.jpg"
                                alt="Premium Custom Packaging Solutions"
                                className="rounded-2xl w-full"
                            />
                            {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary">500+</div>
                                    <div className="text-sm text-gray-600">Happy Clients</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
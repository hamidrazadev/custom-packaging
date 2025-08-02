'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import FormDialog from './FormDialog';

const Hero = () => {
    const [open, setOpen] = useState(false);
    return (
        <section className="pt-8 pb-16 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="animate-fade-in">
                        <h1 className="text-5xl lg:text-6xl font-bold text-accent mb-6 leading-tight">
                            Custom Packaging That
                            <span className="text-primary"> Defines Your Brand!</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Premium quality, fully customizable packaging solutions made from eco-friendly materials.
                            Perfect for cosmetics, food, retail, and more.
                        </p>

                        {/* Special Offer Banner */}
                        {/* <div className="bg-secondary text-accent p-4 rounded-lg mb-8 border-l-4 border-primary">
                            <p className="font-semibold text-lg">🎉 Special Launch Offer!</p>
                            <p className="text-base">Grab 20% off your first order plus free shipping!</p>
                        </div> */}

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-green-600 text-white px-8 py-3 text-lg"
                            >
                                Browse Catalog
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
                                onClick={() => setOpen(true)}
                            >
                                Request Quote
                            </Button>
                            <FormDialog  open={open} onOpenChange={setOpen}/>
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
                            {/* <img
                                src="https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_390x390/images/home-featured-products/coffee-cups.jpg"
                                alt="Premium Custom Packaging Solutions"
                                className="rounded-2xl shadow-2xl w-full"
                            /> */}
                            <video src="https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/Custom-Boxes-The-Packaging-Company_360.mp4" autoPlay loop muted className="rounded-2xl shadow-2xl w-full">
                            </video>
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
"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import submitForm from '@/lib/submitFormClient';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
import { GetAllIndustries } from '@/services/Industries';

export default function FooterContactForm() {
    const [industries, setIndustries] = useState([]);

    const fetchIndustries = async () => {
        const fetchedIndustries = await GetAllIndustries()
        const industriesName = fetchedIndustries.map((industry) => industry.name)
        setIndustries(industriesName)
    }

    useEffect(() => {
        fetchIndustries()
    }, [])

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        website: '',
        physicalAddress: '',
        quantity: '',
        industry: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // toast.success("Here is a toast.");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        const promise = submitForm(formData)
        toast.promise(promise, {
            loading: "Submitting your form...",
            success: (data) => {
                return data.is_spam
                    ? "Form submitted, but marked as spam ❌"
                    : "Form submitted successfully ✅";
            },
            error: (err) => `Submission failed: ${err.message}`,
        });
        redirect('/catalogue')
        // setFormData({
        //     fullName: '',
        //     email: '',
        //     phone: '',
        //     companyName: '',
        //     website: '',
        //     physicalAddress: '',
        //     quantity: '',
        //     industry: ''
        // })
    };

    return (
        <div className="bg-primary-foreground">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                    {/* Left Side - Form Content */}
                    <div className="py-4 lg:py-8 flex flex-col gap-4 order-2 lg:order-1">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                            <span className="text-accent">Try Before You Commit</span>
                            <span className="text-gray-600"> - To Us</span>
                        </h1>

                        <p className="text-gray-600 leading-relaxed">
                            We're sure you'll love what we offer. Request your samples today, and if you place an order within 30 days
                            of receiving them, we'll credit the cost of your samples-making them absolutely free!
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-2">
                            <div className="grid md:grid-cols-2 gap-2">
                                <div>
                                    <input
                                        required
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name*"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="transparent-input"
                                    />
                                </div>
                                <div>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="Email*"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="transparent-input"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-2">
                                <div>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone*"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="transparent-input"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Company Name"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className="transparent-input"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-2">
                                <div>
                                    <input
                                        type="url"
                                        name="website"
                                        placeholder="Website"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                        className="transparent-input"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="physicalAddress"
                                        placeholder="Physical Address"
                                        value={formData.physicalAddress}
                                        onChange={handleInputChange}
                                        className="transparent-input"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-2">
                                <div>
                                    <input
                                        type="number"
                                        name="quantity"
                                        placeholder="Quantity"
                                        value={formData.quantity}
                                        onChange={handleInputChange}
                                        className="transparent-input"
                                    />
                                </div>
                                <div>
                                    <select
                                        required
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleInputChange}
                                        className="transparent-input appearance-none cursor-pointer"
                                    >
                                        <option value="">Select Industry</option>
                                        {
                                            industries.map((industry, index) => (
                                                <option key={index} value={industry}>{industry}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <button
                                type='submit'
                                // onClick={handleSubmit}
                                className="btn"
                            >
                                Get Started
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Image */}
                    <div className="lg:min-h-[500px] h-[250px] sm:min-h-[400px] w-full relative ms-0 lg:ms-20 order-1 lg:order-1">
                        <Image
                            fill
                            src="/assets/images/FooterContactForm.png"
                            alt="Box Sample Kit"
                            className="h-full object-contain absolute w-[70%]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
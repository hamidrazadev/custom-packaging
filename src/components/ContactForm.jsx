"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select"
import comapnyInfo from 'constants/comapnyInfo'
import submitForm from '@/lib/submitFormClient';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const [errorInFormSubmission, setErrorInFormSubmission] = useState(null);

    const router = useRouter();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const promise = submitForm(formData);
        toast.promise(promise, {
            loading: "Submitting your form...",
            success: (data) => {
                return data.is_spam
                    ? "Form submitted, but marked as spam ❌"
                    : "Form submitted successfully ✅";
            },
            error: () => `Submission failed!`,
        }).then((data) => {
            if (!data?.is_spam) {
                router.push('/catalogue')
            }
        }).catch((error) => setErrorInFormSubmission(error.message || "Something went wrong"));
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-accent mb-4">
                        Get Your Custom <span className="text-primary">Packaging</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to elevate your brand with custom packaging? Contact our experts
                        for a personalized quote and consultation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <Card className='border-accent'>
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Phone className="text-primary mr-3" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-accent">Call Our Experts</h3>
                                        <p className="text-gray-600">{comapnyInfo.phone}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Speak directly with our packaging specialists
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='border-accent'>
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Mail className="text-primary mr-3" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-accent">Email Us</h3>
                                        <p className="text-gray-600">{comapnyInfo.email}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Get detailed quotes and technical specifications
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='border-accent'>
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <MessageSquare className="text-primary mr-3" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-accent">Live Chat</h3>
                                        <p className="text-gray-600">Available 24/7</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Instant support for quick questions
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='border-accent'>
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <MapPin className="text-primary mr-3" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-accent">Visit Us</h3>
                                        <p className="text-gray-600">{comapnyInfo.address}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="shadow-xl border-accent">
                            <CardHeader>
                                <CardTitle className="text-2xl text-accent">Want to Grow Your Business?</CardTitle>
                                <p className="text-gray-600">
                                    Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleOnSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-accent mb-2">
                                                Full Name *
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">
                                                Email Address *
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-accent mb-2">
                                                Company Name
                                            </label>
                                            <Input
                                                id="company"
                                                name="company"
                                                type="text"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your company name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-accent mb-2">
                                                Phone Number
                                            </label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-accent mb-2">
                                                Quantity
                                            </label>
                                            <Input
                                                id="quantity"
                                                name="quantity"
                                                type="tel"
                                                value={formData.quantity}
                                                onChange={handleChange}
                                                placeholder="Enter quantity"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="packagingType" className="block text-sm font-medium text-accent mb-2">
                                                Packaging Type *
                                            </label>
                                            <Select
                                                value={formData.packagingType}
                                                onValueChange={(value) =>
                                                    setFormData({ ...formData, packagingType: value })
                                                }
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select packaging type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="box">Box</SelectItem>
                                                    <SelectItem value="bag">Bag</SelectItem>
                                                    <SelectItem value="custom">Custom</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-accent mb-2">
                                                Project Details *
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your packaging needs, quantities, timeline, and any special requirements..."
                                                rows={5}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-accent mb-2">
                                                Attachments
                                            </label>
                                            <Input
                                                id="attachments"
                                                name="attachments"
                                                type="file"
                                                multiple
                                                onChange={(e) =>
                                                    setFormData({ ...formData, attachments: e.target.files })
                                                }
                                            />
                                        </div>
                                    </div>


                                    <button
                                        type="submit"
                                        className="btn-lg w-full"
                                    >
                                        Get My Custom Quote
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        By submitting this form, you agree to receive communications from Custom Packaging.
                                        We respect your privacy and will never share your information.
                                    </p>
                                </form>
                            </CardContent>
                            {errorInFormSubmission && <p className="text-red-500 text-sm mt-1">{errorInFormSubmission}</p>}
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
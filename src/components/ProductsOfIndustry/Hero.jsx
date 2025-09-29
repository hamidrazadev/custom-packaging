"use client"
import submitForm from '@/lib/submitFormClient'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function Hero({ heroData }) {
    const [imageIndx, setImageIndx] = useState(0)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        quantity: "",
        category: "",
        description: ""
    })
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // console.log("Form submitted:", formData);
        const promise = submitForm(formData);
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
    }

    const nextImage = () => {
        setImageIndx((prev) => (prev + 1) % heroData.images.length)
    }

    const prevImage = () => {
        setImageIndx((prev) => (prev - 1 + heroData.images.length) % heroData.images.length)
    }

    return (
        <div className='grid grid-cols-1 lg:gap-8 md:gap-6 gap-4 lg:grid-cols-2 container mx-auto py-4 justify-between'>
            <div className="flex lg:flex-col flex-col-reverse gap-4 lg:gap-6">
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{heroData.title}</h1>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">{heroData.description}</p>
                </div>

                <div className="flex gap-3 flex-col-reverse lg:flex-row">
                    {/* Thumbnail Gallery */}
                    <div className="flex lg:flex-col flex-row gap-2 lg:gap-3 justify-center lg:justify-start overflow-x-auto lg:overflow-visible py-2 lg:py-0">
                        {heroData.images.slice(0, 4).map((image, index) => (
                            <div key={index} className="flex-shrink-0">
                                <Image
                                    alt={`${image.altText}`}
                                    src={image.imageURL}
                                    width={80}
                                    height={80}
                                    onClick={() => setImageIndx(index)}
                                    className={`
                                        w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover
                                        cursor-pointer rounded-lg transition-all duration-300 ease-in-out
                                        hover:scale-105 hover:shadow-lg
                                        ${index === imageIndx
                                            ? "ring-4 ring-gray-500 shadow-lg scale-105"
                                            : "ring-2 ring-gray-200 hover:ring-gray-300 opacity-70 hover:opacity-100"
                                        }
                                    `}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main Image Display */}
                    <div className="relative group w-full">
                        <div className="relative overflow-hidden rounded-lg border-2 border-dashed border-gray-500">
                            <Image
                                className='w-full h-64 sm:h-80 md:h-96 lg:h-[420px] object-cover transition-all duration-500 ease-in-out transform group-hover:scale-105'
                                alt={`${heroData.images[imageIndx].altText}`}
                                src={heroData.images[imageIndx].imageURL}
                                width={500}
                                height={500}
                                priority={imageIndx === 0}
                            />

                            {/* Navigation Arrows - Only show if more than one image */}
                            {heroData.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                                        aria-label="Previous image"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                                        aria-label="Next image"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Image Counter */}
                            {heroData.images.length > 1 && (
                                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                                    {imageIndx + 1} / {heroData.images.length}
                                </div>
                            )}
                        </div>

                        {/* Dot Indicators - Mobile friendly */}
                        {heroData.images.length > 1 && (
                            <div className="flex justify-center gap-1.5 mt-3 lg:hidden">
                                {heroData.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setImageIndx(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === imageIndx
                                            ? "bg-accent scale-125"
                                            : "bg-gray-300 hover:bg-gray-400"
                                            }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleOnSubmit} className="lg:px-8 py-4 lg:py-2 flex flex-col gap-3 lg:gap-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Get an Instant Quote</h2>
                <p className="text-gray-600">Fill out the form below and we will get in touch with you to discuss your needs.</p>

                <div className="flex flex-col lg:flex-row gap-3 w-full">
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleOnChange}
                        name='name'
                        className='w-full p-3 focus:ring-2 focus:ring-accent border border-primary outline-none rounded-md transition-all duration-200'
                        placeholder='Name*'
                    />
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleOnChange}
                        name='email'
                        className='w-full p-3 focus:ring-2 focus:ring-accent border border-primary outline-none rounded-md transition-all duration-200'
                        placeholder='Email*'
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-3 w-full">
                    <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleOnChange}
                        name='phone'
                        className='w-full p-3 focus:ring-2 focus:ring-accent border border-primary outline-none rounded-md transition-all duration-200'
                        placeholder='Phone*'
                    />
                    <input
                        type="number"
                        min={200}
                        required
                        value={formData.quantity}
                        onChange={handleOnChange}
                        name='quantity'
                        className='w-full p-3 focus:ring-2 focus:ring-accent border border-primary outline-none rounded-md transition-all duration-200'
                        placeholder='Quantity (minimum 200)*'
                    />
                </div>

                <select
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleOnChange}
                    className='w-full p-3 focus:ring-2 focus:ring-accent border border-primary outline-none rounded-md transition-all duration-200'
                >
                    <option value="">Select Category*</option>
                    {heroData.sub_options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>

                <textarea
                    required
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleOnChange}
                    className='w-full p-3 focus:ring-2 focus:ring-accent border border-primary outline-none rounded-md resize-none transition-all duration-200'
                    placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we'll get back to you with an instant quote."
                />

                <button type="submit" className="btn-lg w-full lg:w-1/3 mt-2">Get a Quote</button>
            </form>
        </div>
    )
}
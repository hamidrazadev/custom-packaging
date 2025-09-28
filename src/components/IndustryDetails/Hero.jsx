"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function Hero({ heroData, nameOfTheseIndustries }) {
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
    return (
        <div className='grid grid-cols-1 lg:gap-8 lg:grid-cols-2 container mx-auto py-4 justify-between'>
            <div className="flex lg:flex-col flex-col-reverse gap-6">
                <div className="flex flex-col gap-2">
                    <h1>{heroData.name}</h1>
                    <p>{heroData.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col lg:flex-row gap-2 w-full">
                        <input type="text" required value={formData.name} onChange={handleOnChange} name='name' className='w-full p-2 focus:ring-1 focus:ring-accent border border-slate-300 outline-none rounded-md' placeholder='Name*' />
                        <input type="email" required value={formData.email} onChange={handleOnChange} name='email' className='w-full p-2 focus:ring-1 focus:ring-accent border border-slate-300 outline-none rounded-md' placeholder='Email*' />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 w-full">
                        <input type="tel" required value={formData.phone} onChange={handleOnChange} name='phone' className='w-full p-2 focus:ring-1 focus:ring-accent border border-slate-300 outline-none rounded-md' placeholder='Phone*' />
                        <input type="number" min={200} required value={formData.quantity} onChange={handleOnChange} name='quantity' className='w-full p-2 focus:ring-1 focus:ring-accent border border-slate-300 outline-none rounded-md' placeholder='Quantity (minimum 200)*' />
                    </div>
                    <select name="category" required value={formData.category} onChange={handleOnChange} className='w-full p-2 focus:ring-1 focus:ring-accent border border-slate-300 outline-none rounded-md'>
                        <option value="" disabled selected hidden>Please Select *</option>
                        {
                            nameOfTheseIndustries.map((option, index) => (
                                <option required className='w-full p-2 focus:ring-1 focus:ring-accent border border-slate-300 outline-none rounded-md' key={index} value={option}>{option}</option>
                            ))
                        }
                    </select>
                    <textarea rows={4} name="description" value={formData.description} onChange={handleOnChange} className='w-full p-2 focus:ring-1 focus:ring-accent border border-slate-300 outline-none rounded-md' placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we' ll get back to you with an instant quote." />
                    <button className="btn-lg w-full lg:w-1/3 mt-4">Get a Quote</button>
                </div>
            </div>
            <div className="lg:px-8 py-4 lg:py-2 flex flex-col gap-2 lg:gap-4">
                <Image alt={heroData.name} src={heroData.image} width={750} height={750} />
            </div>
        </div>
    )
}
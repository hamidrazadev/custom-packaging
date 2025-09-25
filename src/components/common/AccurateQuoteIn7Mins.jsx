"use client";
import React, { useState } from "react";
import { ChevronDown, Upload, X } from "lucide-react";

const AccurateQuoteIn7Mins = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        boxType: "",
        material: "",
        length: "",
        width: "",
        height: "",
        dimensionUnit: "",
        quantity: "",
        printingSides: "",
        cardThickness: "",
        coatingLamination: "",
        extraFinishing: "",
        specifications: "",
        files: [],
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files) {
            setFormData((prev) => ({
                ...prev,
                files: Array.from(files),
            }));
        }
    };

    const handleRemoveFile = (index) => {
        setFormData((prev) => ({
            ...prev,
            files: prev.files.filter((_, i) => i !== index),
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!formData.boxType) newErrors.boxType = "Box Type is required";
        if (!formData.quantity) {
            newErrors.quantity = "Quantity is required";
        } else if (isNaN(formData.quantity) || Number(formData.quantity) < 200) {
            newErrors.quantity = "Quantity must be at least 200";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const formPayload = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key === "files") {
                formData.files.forEach((file) => {
                    formPayload.append("files", file);
                });
            } else {
                formPayload.append(key, formData[key]);
            }
        });

        console.log("Form submitted:", Object.fromEntries(formPayload));

        // Example fetch (replace with your API endpoint)
        // fetch("/api/quote", { method: "POST", body: formPayload })
        //   .then(res => res.json())
        //   .then(data => console.log("Response:", data))
        //   .catch(err => console.error("Error:", err));
    };

    const SelectField = ({ name, placeholder, options = [] }) => (
        <div className="relative">
            <select
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700 ${errors[name] ? "border-red-500" : "border-gray-300"
                    }`}
            >
                <option value="">{placeholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
            )}
        </div>
    );

    const InputField = ({ name, placeholder, type = "text" }) => (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors[name] ? "border-red-500" : "border-gray-300"
                    }`}
            />
            {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-secondary py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-600 mb-2">
                        Get an Accurate Quote in Just 7 Minutes
                    </h1>
                    <p className="text-lg text-gray-500">
                        Order 5000+ & Get Upto 50% Discount
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                >
                    {/* Top Row - Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <InputField name="fullName" placeholder="Full Name*" />
                        <InputField name="phone" placeholder="Phone*" />
                        <InputField name="email" placeholder="Email*" type="email" />
                        <SelectField
                            name="boxType"
                            placeholder="Select Box Type*"
                            options={["Custom Box", "Shipping Box", "Product Box", "Gift Box"]}
                        />
                    </div>

                    {/* Second Row - Material and Dimensions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <SelectField
                            name="material"
                            placeholder="Select Material"
                            options={["Cardboard", "Corrugated", "Kraft Paper", "Rigid"]}
                        />
                        <InputField name="length" placeholder="Length" />
                        <InputField name="width" placeholder="Width" />
                        <InputField name="height" placeholder="Height" />
                    </div>

                    {/* Third Row - Additional Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                        <SelectField
                            name="dimensionUnit"
                            placeholder="Select Dimension Unit"
                            options={["Inches", "CM", "MM"]}
                        />
                        <InputField name="quantity" placeholder="Quantity (min: 200)*" />
                        <SelectField
                            name="printingSides"
                            placeholder="Select Printing Sides"
                            options={["No Printing", "1 Side", "2 Sides", "4 Sides"]}
                        />
                        <SelectField
                            name="cardThickness"
                            placeholder="Select Card Thickness"
                            options={["12pt", "14pt", "16pt", "18pt"]}
                        />
                        <SelectField
                            name="coatingLamination"
                            placeholder="Select Coating Lamination"
                            options={["None", "Gloss", "Matte", "Spot UV"]}
                        />
                    </div>

                    {/* Fourth Row - Extra Finishing */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
                        <SelectField
                            name="extraFinishing"
                            placeholder="Select Extra Finishing"
                            options={["None", "Embossing", "Debossing", "Foil Stamping"]}
                        />
                    </div>

                    {/* Specifications Text Area */}
                    <div className="mb-6">
                        <textarea
                            name="specifications"
                            placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we'll get back to you with an instant quote."
                            value={formData.specifications}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        />
                    </div>

                    {/* Upload Section */}
                    <div className="mb-8">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center relative">
                            <input
                                type="file"
                                name="files"
                                multiple
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleFileChange}
                            />
                            <div className="flex flex-col items-center pointer-events-none">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <Upload className="w-8 h-8 text-blue-500" />
                                </div>
                                <p className="text-gray-600 mb-2">
                                    Upload your Artwork or Reference Images
                                </p>
                                <p className="text-sm text-gray-400">File(s) size limit is 20MB</p>
                            </div>
                        </div>

                        {/* File Preview List */}
                        {formData.files.length > 0 && (
                            <div className="mt-4 text-left">
                                <p className="text-sm text-gray-600 mb-2">Selected Files:</p>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {formData.files.map((file, index) => (
                                        <li key={index} className="flex items-center justify-between">
                                            <span>{file.name}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveFile(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Order Button */}
                    <div className="text-center">
                        <button type="submit" className="btn-lg">
                            Order Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AccurateQuoteIn7Mins;

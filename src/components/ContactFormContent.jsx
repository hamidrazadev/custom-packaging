// components/ContactFormContent.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ContactFormContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    quantity: "",
    packagingType: "",
    message: "",
    attachments: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: handle submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
        <div className="text-center mb-4">
            <h1 className="text-2xl font-bold">Want to Grow Your Business?</h1>
            <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
            </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
            <div>
            {/* <label className="block text-sm font-medium text-accent mb-2">Full Name *</label> */}
            <Input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
            />
            </div>
            <div>
            {/* <label className="block text-sm font-medium text-accent mb-2">Email Address *</label> */}
            <Input
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
            {/* <label className="block text-sm font-medium text-accent mb-2">Company Name</label> */}
            <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
            />
            </div>
            <div>
            {/* <label className="block text-sm font-medium text-accent mb-2">Phone Number</label> */}
            <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
            />
            </div>
            <div>
            {/* <label className="block text-sm font-medium text-accent mb-2">Quantity</label> */}
            <Input
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
            />
            </div>
            <div>
            {/* <label className="block text-sm font-medium text-accent mb-2">Packaging Type *</label> */}
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
            <div className="">
            {/* <label className="block text-sm font-medium text-accent mb-2">Project Details *</label> */}
            <Textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={3}
            />
            </div>
            <div>
            {/* <label className="block text-sm font-medium text-accent mb-2">Attachments</label> */}
            <Input
                name="attachments"
                type="file"
                multiple
                onChange={(e) =>
                setFormData({ ...formData, attachments: e.target.files })
                }
            />
            </div>
        </div>

        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-green-600 text-white">
            Get My Custom Quote
        </Button>

        <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to receive communications from Custom Packaging.
            We respect your privacy and will never share your information.
        </p>
        </form>
    </div>
  );
}

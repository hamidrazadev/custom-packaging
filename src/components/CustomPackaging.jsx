import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const packagingOptions = [
  {
    title: "Product Packaging",
    description: "Standard cardstock boxes made from thin, flexible paperboard.",
    image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-1.webp",
  },
  {
    title: "Corrugated Boxes",
    description: "Durable 3-layer corrugated cardboard boxes.",
    image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-2.webp",
  },
  {
    title: "Rigid Boxes",
    description: "Luxurious packaging made from thick durable chipboard.",
    image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-3.webp",
  },
  {
    title: "Box Inserts",
    description:
      "Keep your loose products nicely tucked, presented, and protected.",
    image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-4.webp",
  },
  {
    title: "Corrugated Boxes",
    description: "Durable 3-layer corrugated cardboard boxes.",
    image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-5.webp",
  },
  {
    title: "Rigid Boxes",
    description: "Luxurious packaging made from thick durable chipboard.",
    image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-6.webp",
  },
  {
    title: "Box Inserts",
    description:
      "Keep your loose products nicely tucked, presented, and protected.",
    image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-7.webp",
  }
];

const CustomPackagingSection = () => {
  return (
    <section className="bg-[#F8F9F9] py-16 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 flex flex-col items-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            One for all solution, for custom printed packaging
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Get everything custom packaging your business needs all in one place.
          </p>
          <Link
            href={'/catalogue'}
            className="btn-lg w-fit"
          >
            Browse full catalog
          </Link>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {packagingOptions.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover aspect-ratio-square"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
          {/* Last Custom Quote Card */}
          <div
            className="group bg-[#E8E8E8] bg-[url('https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-8.webp')] bg-contain bg-center bg-no-repeat rounded-lg p-6 flex flex-col justify-between shadow-sm"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Looking for something else?
              </h3>
              <p className="text-gray-800 text-lg font-medium">We can help.</p>
            </div>
            <Link
              href={'/catalogue'}
              className="btn-lg-outline w-fit"
            >
              Browse full catalog
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomPackagingSection;

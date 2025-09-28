"use client"
import React, { useEffect, useState } from 'react'
import AllIndustries from 'public/data/company/AllIndustries.json';
import PackagingStyles from 'public/data/company/PackagingStyles.json';
import SidebarForFilter from './SidebarForFilter';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/utils/formatting';
import ScreenForFilter from './ScreenForFilter';
import { RiFilter2Line } from "react-icons/ri";
import Skeleton from 'react-loading-skeleton'
import { GetAllProductsOfIndustry, GetAllProductsOfPackagingStyle } from '@/services/Products';
import { GoDotFill } from "react-icons/go";

export default function Main({ allProducts, allIndustries, allPackagingStyles }) {
    const [allProductsFiltered, setAllProductsFiltered] = useState(allProducts);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // instead of two keys, keep one "activeFilter"
    const [activeFilter, setActiveFilter] = useState({ type: null, value: "" });

    const handleFiltering = async () => {
        if (!activeFilter.value) {
            setAllProductsFiltered(allProducts);
            return;
        }

        // reset products instantly when filter changes
        setAllProductsFiltered([]);

        let filtered = allProducts;

        if (activeFilter.type === "industry") {
            // console.log("Industry Changed!");

            const industryProducts = await GetAllProductsOfIndustry(activeFilter.value.split("-")[activeFilter.value.split("-").length - 1]);

            // console.log("industryProducts", industryProducts);
            filtered = industryProducts;
        }

        if (activeFilter.type === "packaging_style") {
            // console.log("Packaging Style Changed!");

            const packagingStyleProducts = await GetAllProductsOfPackagingStyle(activeFilter.value.split("-")[activeFilter.value.split("-").length - 1]);

            // console.log("packagingStyleProducts", packagingStyleProducts);

            filtered = packagingStyleProducts;
        }

        setAllProductsFiltered(filtered);
    }

    useEffect(() => {
        handleFiltering();
    }, [activeFilter, allProducts]);

    return (
        <div className='flex flex-col lg:flex-row gap-4 w-full py-4 container mx-auto'>
            {/* Sidebar (desktop) */}
            <div className="hidden w-1/4 lg:flex flex-col gap-4">
                <SidebarForFilter
                    title="Industries"
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    filterItems={allIndustries}
                />
                <SidebarForFilter
                    title="Packaging Styles"
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    filterItems={allPackagingStyles}
                />
            </div>

            {/* Mobile filter */}
            <div className="lg:hidden w-full flex justify-between">
                <div className="flex w-full items-center justify-between">
                    <h3>Filters</h3>
                    <RiFilter2Line onClick={() => setIsFilterOpen(!isFilterOpen)} className='text-2xl' />
                </div>
                {isFilterOpen && (
                    <ScreenForFilter
                        setIsFilterOpen={setIsFilterOpen}
                        setActiveFilter={setActiveFilter}
                        activeFilter={activeFilter}
                        industries={AllIndustries}
                        packagingStyles={allPackagingStyles}
                    />
                )}
            </div>

            {/* Products grid */}
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {allProductsFiltered.length > 0 ? (
                        allProductsFiltered.map((product) => (
                            <Link key={product.id} href={`/product/${product.slug}`} className='hover:shadow-xl rounded-xl transition-all duration-500 bg-white w-full h-full flex flex-col gap-2 hover:scale-[1.05]'>
                                {
                                    product.featuredImage.node.guid ?
                                        <Image src={`${product.featuredImage.node.guid}`} width={300} height={300} className='rounded-3xl' /> :
                                        <Skeleton height={200} />
                                }
                                <div className="flex flex-col gap-2 p-4">
                                    <span className='text-sm text-start'>{product?.deliveryInfo?.moq && product?.deliveryInfo?.moq} {product?.deliveryInfo?.moq && product?.deliveryInfo?.moq && <GoDotFill />} {product?.deliveryInfo?.deliveryTime && `Delivery: ${product?.deliveryInfo?.deliveryTime}`}</span>
                                    <span className='font-semibold text-start'>{product.title}</span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

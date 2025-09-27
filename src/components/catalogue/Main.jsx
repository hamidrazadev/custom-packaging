"use client"
import React, { useEffect, useState } from 'react'
import AllIndustries from 'public/data/company/AllIndustries.json';
import SampleProducts from 'public/data/company/SampleProducts.json';
import PackagingStyles from 'public/data/company/PackagingStyles.json';
import SidebarForFilter from './SidebarForFilter';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/utils/formatting';
import ScreenForFilter from './ScreenForFilter';
import { RiFilter2Line } from "react-icons/ri";
import Skeleton from 'react-loading-skeleton'

export default function Main() {
    const [allProducts, setAllProducts] = useState(SampleProducts);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        industry: [],
        packaging_style: []
    });

    useEffect(() => {
        let filteredProducts = SampleProducts;

        if (filters.industry.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                product.industry.some(ind => filters.industry.includes(ind))
            );
        }

        if (filters.packaging_style.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                product.packaging_style.some(style => filters.packaging_style.includes(style))
            );
        }

        console.log("Current filters:", filters);
        setAllProducts(filteredProducts);
    }, [filters]);

    return (
        <div className='flex flex-col lg:flex-row gap-4 w-full py-4 container mx-auto'>
            <div className="hidden w-1/4 lg:flex flex-col gap-4">
                <SidebarForFilter setFilters={setFilters} title="Industries" filterItems={AllIndustries} />
                <SidebarForFilter setFilters={setFilters} title="Packaging Styles" filterItems={PackagingStyles} />
            </div>
            <div className="lg:hidden w-full flex justify-between">
                <div className="flex w-full items-center justify-between">
                    <h3>Filters</h3>
                    <RiFilter2Line onClick={() => setIsFilterOpen(!isFilterOpen)} className='text-2xl' />
                </div>
                {
                    isFilterOpen &&
                    <ScreenForFilter setIsFilterOpen={setIsFilterOpen} setFilters={setFilters} filterItems={AllIndustries} industries={AllIndustries} packagingStyles={PackagingStyles} />
                }
            </div>
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {allProducts.length > 0 ? (
                        allProducts.map((product, i) => (
                            <Link key={i} href={`/${slugify(product.industry[0])}/${slugify(product.title)}`} className='hover:shadow-xl rounded-xl transition-all duration-500 bg-white w-full h-full flex flex-col gap-2 hover:scale-[1.05]'>
                                {
                                    product.image ?
                                        <Image src={`${product.image}`} width={300} height={300} className='rounded-3xl' /> :
                                        <Skeleton />
                                }
                                <div className="flex flex-col gap-2 p-4">
                                    <span className='text-sm text-start'>Min. {product.min_units} units · Delivery: {product.delivery}</span>
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

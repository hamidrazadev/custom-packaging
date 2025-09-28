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
import {
    GetAllProductsOfIndustry,
    GetAllProductsOfPackagingStyle,
    GetAllProducts
} from '@/services/Products';

export default function Main({ allProducts, allIndustries, allPackagingStyles }) {
    // normalize input: if `allProducts` has `.nodes` it's from GraphQL, otherwise it's already an array
    const initialNodes = allProducts?.nodes || allProducts || [];
    const initialPageInfo = allProducts?.pageInfo || null;

    const [allProductsFiltered, setAllProductsFiltered] = useState(initialNodes);
    const [pageInfo, setPageInfo] = useState(initialPageInfo);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [activeFilter, setActiveFilter] = useState({ type: null, value: "" });

    // pagination
    const [after, setAfter] = useState(null);
    const [before, setBefore] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFiltering = async () => {
        setLoading(true);

        // always fetch fresh products (default = paginated list)
        let response = await GetAllProducts({
            first: !before ? 20 : null,
            after,
            last: before ? 20 : null,
            before,
        });

        let filtered = response?.nodes || [];
        let pageInfoResponse = response?.pageInfo || null;

        if (activeFilter.type === "industry" && activeFilter.value) {
            const id = activeFilter.value.split("-").pop();
            const industryProducts = await GetAllProductsOfIndustry(id);
            filtered = industryProducts || [];
            pageInfoResponse = null; // filtered lists don’t paginate
        }

        if (activeFilter.type === "packaging_style" && activeFilter.value) {
            const id = activeFilter.value.split("-").pop();
            const packagingStyleProducts = await GetAllProductsOfPackagingStyle(id);
            filtered = packagingStyleProducts || [];
            pageInfoResponse = null;
        }

        setAllProductsFiltered(filtered);
        setPageInfo(pageInfoResponse);
        setLoading(false);
    };

    useEffect(() => {
        handleFiltering();
    }, [activeFilter, after, before]);

    return (
        <div className='flex flex-col lg:flex-row gap-4 w-full py-4 container mx-auto'>
            {/* Sidebar (desktop) */}
            <div className="hidden w-1/4 lg:flex flex-col gap-6">
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
            <div className="flex flex-col gap-4 w-full">
                <h2 className="">Products</h2>
                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                            <Skeleton className='w-full' key={index} height={350} />
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
                            {allProductsFiltered?.length > 0 ? (
                                allProductsFiltered.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/${product.industries?.nodes[0].slug + "-" + product.industries?.nodes[0].id}/${product.slug + "-" + product.id}`}
                                        className='hover:shadow-xl rounded-xl transition-all duration-500 bg-white w-full h-full flex flex-col gap-2 hover:scale-[1.05]'>
                                        {product.featuredImage?.node?.guid ? (
                                            <Image
                                                src={product.featuredImage.node.guid}
                                                width={500}
                                                height={500}
                                                className='rounded-3xl'
                                                alt={product.title}
                                            />
                                        ) : (
                                            <Skeleton height={200} />
                                        )}
                                        <div className="flex flex-col gap-2 p-4">
                                            <span className='text-xs text-start'>
                                                {product?.deliveryInfo?.moq} • Delivery: {product?.deliveryInfo?.deliveryTime}
                                            </span>
                                            <span className='font-semibold text-start'>{product.title}</span>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p>No products found.</p>
                            )}
                        </div>

                        {/* Pagination controls */}
                        {pageInfo && (
                            <div className="flex justify-center gap-4 mt-6">
                                <button
                                    disabled={!pageInfo.hasPreviousPage}
                                    onClick={() => {
                                        setBefore(pageInfo.startCursor);
                                        setAfter(null);
                                    }}
                                    className="btn disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <button
                                    disabled={!pageInfo.hasNextPage}
                                    onClick={() => {
                                        setAfter(pageInfo.endCursor);
                                        setBefore(null);
                                    }}
                                    className="btn disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

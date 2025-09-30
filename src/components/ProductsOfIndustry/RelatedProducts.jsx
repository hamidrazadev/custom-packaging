"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import ProductCard from './ProductCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function RelatedProducts({ products }) {
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8; // scroll by ~80% of container width
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='py-6 lg:py-12 bg-primary-foreground'>
            <div className="flex flex-col gap-2 container mx-auto relative">
                <div className='flex items-end flex-wrap gap-4'>
                    <h2>Related Products</h2>
                    <span className='flex gap-2'>
                        Discover packaging tailored for your products. Can't find what you need?
                        <Link className='link-md w-fit' href={'/catalogue'}>View All</Link>
                    </span>
                </div>

                {/* Scroll buttons */}
                {
                    products?.length > 0 ?
                        <>
                            <button
                                onClick={() => scroll('left')}
                                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hidden md:flex"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hidden md:flex"
                            >
                                <FaChevronRight />
                            </button>

                            {/* Scrollable products */}
                            <div
                                ref={scrollRef}
                                className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-none py-4 px-2 gap-4"
                            >
                                {products.map((product, index) => (
                                    <ProductCard key={index} product={product} />
                                ))}
                            </div>
                        </> :
                        <p>No Related Products.</p>
                }
            </div>
        </div>
    )
}

import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'

export default function ProductsOfIndustry({ products, isToNextPage, industryName }) {
    // console.log(products);
    return (
        <div className='bg-primary-foreground py-6'>
            <div className="container mx-auto px-4 flex flex-col gap-6">
                <h4 className='lg:text-center text-xl md:text-3xl lg:text-4xl py-4'>{industryName} Products</h4>
                {
                    products.length ?
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 w-full gap-4">
                            {
                                products?.slice(0, 9).map((product, index) => {
                                    return (
                                        <ProductCard isToNextPage={isToNextPage} product={product} key={index} />
                                    )
                                })
                            }
                            <div className="hover:shadow-xl rounded-xl transition-all duration-500 w-full bg-slate-100 h-full flex flex-col items-center justify-center gap-6 p-4 hover:scale-[1.05]">
                                <span className='text-2xl font-semibold'>Explore all {industryName} Products</span>
                                <Link href={'/catalogue'} className="btn text-center w-full">View All</Link>
                            </div>
                        </div>
                        :
                        <p>No products found for this industry</p>
                }
            </div>
        </div>
    )
}
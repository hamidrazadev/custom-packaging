import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsOfIndustry({ products }) {
    // console.log(products);
    return (
        <div className='bg-primary-foreground py-6'>
            <div className="container mx-auto px-4 flex flex-col gap-6">
                <h2 className='lg:text-center'>Automotive Packaging Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-full gap-2">
                    {
                        products.map((product, index) => {
                            return (
                                <ProductCard product={product} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
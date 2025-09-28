import Hero from '@/components/catalogue/Hero'
import Main from '@/components/catalogue/Main'
import { GetAllIndustries } from '@/services/Industries';
import { GetAllPackagingStyles } from '@/services/PackagingStyles';
import { GetAllProducts } from '@/services/Products';
import React from 'react'

export default async function page() {
    const allProducts = await GetAllProducts();
    const allIndustries = await GetAllIndustries();
    const allPackagingStyles = await GetAllPackagingStyles()
    // console.log("allPackagingStyles", allPackagingStyles);
    return (
        <div className='flex flex-col'>
            <Hero />
            <Main allPackagingStyles={allPackagingStyles} allIndustries={allIndustries} allProducts={allProducts} />
        </div>
    )
}
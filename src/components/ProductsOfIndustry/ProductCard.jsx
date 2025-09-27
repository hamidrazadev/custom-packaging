import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { slugify } from 'utils/formatting'

export default function ProductCard({ product, industry_name }) {
    return (
        <Link href={`/${industry_name}/${slugify(product.title)}`} className='w-[400px] flex-shrink-0 rounded-lg bg-primary-foreground/80 hover:bg-white hover:shadow-lg p-4'>
            <Image src={product.image} className='rounded-xl' width={400} height={400} alt={product.title} />
            <div className="flex flex-col gap-2 px-2 py-4">
                <span className='text-sm'>Min. {product.min_units} units · Delivery: {product.delivery}</span>
                <span className='font-semibold'>{product.title}</span>
            </div>
            <button className="btn">Request a Quote</button>
        </Link>
    )
}
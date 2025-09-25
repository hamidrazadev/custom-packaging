import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ product }) {
    return (
        <Link href={`#`} className='hover:shadow-xl rounded-xl transition-all duration-500 p-4 w-full h-full flex flex-col gap-2 hover:-translate-y-2'>
            <Image src={`${product.image}`} width={300} height={300} className='rounded-xl' />
            <span className='text-sm'>Min. {product.min_units} units · Delivery: {product.delivery}</span>
            <span className='font-semibold'>{product.title}</span>
        </Link>
    )
}

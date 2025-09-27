import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function IndustriesCard({ industry }) {
    return (
        <Link href={`/industry/${industry.slug}-${industry.id}`} className='bg-primary-foreground w-full h-full rounded-md shadow hover:shadow-sm hover:scale-[1.025] p-4 flex flex-col items-center justify-center transition-all'>
            <Image src={`${industry.icon || "/assets/images/AllIndustries/Candle.png"}`} width={300} height={300} />
            <span className='font-semibold text-primary text-center'>{industry.name}</span>
        </Link>
    )
}
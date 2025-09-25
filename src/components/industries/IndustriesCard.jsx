import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function IndustriesCard({ industry }) {
    return (
        <Link href={`/industries/${industry.href}`} className='bg-primary-foreground w-full h-full rounded-md shadow hover:shadow-sm hover:scale-[1.025] p-4 flex flex-col items-center justify-center transition-all'>
            <Image src={`/assets/images/AllIndustries/${industry.image}`} width={300} height={300} />
            <span className='font-semibold text-primary text-center'>{industry.title}</span>
        </Link>
    )
}
import Image from 'next/image'
import React from 'react'

export default function ProductOverview({ overview }) {
    return (
        <div className='bg-secondary py-6 lg:py-12'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between w-full">
                    <div className="flex flex-col gap-4 order-2 lg:order-1">
                        <h2>{overview.title}</h2>
                        <p>{overview.description}</p>
                        <ul className='list-disc flex flex-col ps-4'>
                            {
                                overview.points.map((point, index) => {
                                    return (
                                        <li key={index}><strong>{point.key}</strong> {point.value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="flex items-center justify-center order-1 lg:order-2">
                        <Image src={overview.image} alt={overview.title} className='rounded-lg shadow-lg' width={600} height={600} />
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import OurCapabilitiesData from 'public/data/company/OurCapabilities.json'
import Link from 'next/link'

export default function OurCapabilities() {
    return (
        <div className='flex flex-col gap-4'>
            <h2>{OurCapabilitiesData.title}</h2>
            <p>{OurCapabilitiesData.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {
                    OurCapabilitiesData.cards.map((card, index) => {
                        return (
                            <div className="flex flex-col items-center gap-2 p-4 rounded-xl shadow-sm border-secondary border bg-primary-foreground" key={index}>
                                <i className={`text-4xl text-gray-600 ${card.icon}`}></i>
                                <h4 className='text-center text-sm'>{card.title}</h4>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex gap-2">
                {
                    OurCapabilitiesData.buttons.map((button, index) => {
                        return (
                            <Link href={button.href} className="btn" key={index}>{button.text}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
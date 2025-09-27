import React from 'react'
import TopBreadCrumb from './TopBreadCrumb'

export default function Hero() {
    return (
        <div className='bg-primary-foreground py-8'>
            <div className="flex flex-col gap-4 container mx-auto">
                <TopBreadCrumb />
                <h1>Catalog</h1>
            </div>
        </div>
    )
}
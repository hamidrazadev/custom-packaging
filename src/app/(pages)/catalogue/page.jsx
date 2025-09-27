import Hero from '@/components/catalogue/Hero'
import Main from '@/components/catalogue/Main'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col'>
            <Hero />
            <Main />
        </div>
    )
}
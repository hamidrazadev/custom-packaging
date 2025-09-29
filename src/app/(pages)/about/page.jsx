import Hero from '@/components/about/Hero'
import Maps from '@/components/common/Maps'
import ContactForm from '@/components/ContactForm'
import React from 'react'

export default function page() {
    return (
        <div className='w-full flex flex-col'>
            {/* <Maps lat={40.7128} lng={-74.0060} /> */}
            <Hero />
            <ContactForm />
        </div>
    )
}

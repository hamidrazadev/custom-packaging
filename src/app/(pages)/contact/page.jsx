import Maps from '@/components/common/Maps'
import ContactForm from '@/components/ContactForm'
import React from 'react'

export default function page() {
    return (
        <div className='w-full flex flex-col gap-4 py-4'>
            <Maps lat={40.7128} lng={-74.0060} />
            <ContactForm />
        </div>
    )
}

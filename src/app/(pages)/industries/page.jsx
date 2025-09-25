import FooterContactForm from '@/components/common/FooterContactForm'
import AllIndustries from '@/components/industries/AllIndustries'
import TopBreadCrumb from '@/components/industries/TopBreadCrumb'
import React from 'react'

export default function page() {
    return (
        <div className='min-h-[80vh] flex gap-2 flex-col py-4'>
            <TopBreadCrumb />
            <AllIndustries />
            <FooterContactForm />
        </div>
    )
}
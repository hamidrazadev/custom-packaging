import FooterContactForm from '@/components/common/FooterContactForm'
import AllIndustries from '@/components/industries/AllIndustries'
import TopBreadCrumb from '@/components/industries/TopBreadCrumb'
import { GetAllIndustries } from '@/services/Industries'
import React from 'react'

export default async function page() {
    const allIndustries = await GetAllIndustries();

    return (
        <div className='min-h-[80vh] flex gap-2 flex-col py-4'>
            <TopBreadCrumb />
            <AllIndustries allIndustries={allIndustries} />
            <FooterContactForm />
        </div>
    )
}
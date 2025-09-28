import FooterContactForm from '@/components/common/FooterContactForm'
import AllIndustries from '@/components/industry/AllIndustries'
import TopBreadCrumb from '@/components/industry/TopBreadCrumb'
import { GetAllIndustries } from '@/services/Industries'
import React from 'react'

export const dynamic = "force-dynamic"

export default async function Page() {
    const allIndustries = await GetAllIndustries();

    return (
        <div className="min-h-[80vh] flex gap-2 flex-col py-4">
            <TopBreadCrumb />
            <AllIndustries allIndustries={allIndustries} />
            <FooterContactForm />
        </div>
    );
}
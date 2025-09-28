import FooterContactForm from '@/components/common/FooterContactForm'
import AllPackagningStyles from '@/components/PackagingStyles/AllPackagningStyles'
import TopBreadCrumb from '@/components/PackagingStyles/TopBreadCrumb'
import { GetAllPackagingStyles } from '@/services/PackagingStyles'
import React from 'react'

export const dynamic = "force-dynamic"

export default async function Page() {
    const allPackagingStyles = await GetAllPackagingStyles();

    return (
        <div className="min-h-[80vh] flex gap-2 flex-col py-4">
            <TopBreadCrumb />
            <AllPackagningStyles allPackagingStyles={allPackagingStyles} />
            <FooterContactForm />
        </div>
    );
}
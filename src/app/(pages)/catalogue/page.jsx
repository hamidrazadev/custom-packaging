import Hero from '@/components/catalogue/Hero'
import Main from '@/components/catalogue/Main'
import { GetAllIndustries } from '@/services/Industries';
import { GetAllPackagingStyles } from '@/services/PackagingStyles';
import React from 'react'

export default async function page() {
    // Fetch filters on server
    const allIndustries = await GetAllIndustries();
    const allPackagingStyles = await GetAllPackagingStyles();

    return (
        <div className="flex flex-col">
            <Hero />
            {/* Only send filters; let <Main /> handle paginated fetching */}
            <Main allPackagingStyles={allPackagingStyles} allIndustries={allIndustries} />
        </div>
    );
}

import FAQs from '@/components/common/FAQs'
import FooterContactForm from '@/components/common/FooterContactForm'
import OurCapabilities from '@/components/common/OurCapabilities'
import Hero from '@/components/ProductsOfIndustry/Hero'
import InfoTabs from '@/components/ProductsOfIndustry/InfoTabs'
import LearnMore from '@/components/ProductsOfIndustry/LearnMore'
import ProductOverview from '@/components/ProductsOfIndustry/ProductOverview'
import RelatedProducts from '@/components/ProductsOfIndustry/RelatedProducts'
import path from 'path'
import fs from "fs";
import React from 'react'
import TopBreadCrumb from '@/components/ProductsOfIndustry/TopBreadCrumb'

export default async function page({ params }) {
    const { industry_name, product_name } = await params

    const filePath = path.join(
        process.cwd(),
        "public/data/ProductsOfIndustries/",
        `${industry_name}`,
        `${product_name}.json`
    );
    const fileData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileData);

    const heroData = {
        title: data.title,
        description: data.description,
        images: data.images,
        sub_options: data.sub_options,
    }

    return (
        <div className="flex flex-col pt-4">
            <TopBreadCrumb data={{ industry_name, product_name }} />
            <Hero heroData={heroData} />
            <ProductOverview overview={data.overview} />
            <InfoTabs />
            <LearnMore data={data.learn_more} />
            <RelatedProducts industry_name={industry_name} products={data.related_products} />
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4 w-full container mx-auto py-4 lg:py-8">
                <OurCapabilities />
                <FAQs faqs={data.faqs} />
            </div>
            <FooterContactForm />
        </div>
    )
}
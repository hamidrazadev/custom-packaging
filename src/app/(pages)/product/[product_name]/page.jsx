import FAQs from '@/components/common/FAQs'
import FooterContactForm from '@/components/common/FooterContactForm'
import OurCapabilities from '@/components/common/OurCapabilities'
import Hero from '@/components/ProductsOfIndustry/Hero'
import InfoTabs from '@/components/ProductsOfIndustry/InfoTabs'
import LearnMore from '@/components/ProductsOfIndustry/LearnMore'
import ProductOverview from '@/components/ProductsOfIndustry/ProductOverview'
import RelatedProducts from '@/components/ProductsOfIndustry/RelatedProducts'
import React from 'react'
import TopBreadCrumb from '@/components/ProductsOfIndustry/TopBreadCrumb'
import { GetAProduct } from '@/services/Products'
import { GetAllIndustries } from '@/services/Industries'
import { GetAllPackagingStyles } from '@/services/PackagingStyles'
import Image from 'next/image'

export default async function page({ params }) {
    const { product_name } = await params
    const product_id = await product_name.split("-")[product_name.split("-").length - 1];

    const productDetails = await GetAProduct(product_id);
    // console.log(productDetails);
    const sub_options_details = productDetails.isFromIndustry ? await GetAllIndustries() : await GetAllPackagingStyles();

    const sub_options = sub_options_details.map((option) => option.name);

    const heroData = {
        title: productDetails.title,
        description: productDetails.description,
        images: productDetails.images,
        sub_options,
    }

    const parent_name = productDetails.packaging_style_slug ? productDetails.packaging_style_slug + "-" + productDetails.packaging_style_id : productDetails.industry_slug + "-" + productDetails.industry_id

    // console.log("productDetails", productDetails);

    return (
        <div className="flex flex-col pt-4 gap-4">
            <TopBreadCrumb data={{ parent_name, product_name, isFromIndustry: productDetails.isFromIndustry }} />
            <Hero heroData={heroData} />
            <ProductOverview overview={productDetails.overview} />
            <InfoTabs />
            {
                productDetails.learn_more &&
                <LearnMore data={productDetails.learn_more} />
            }
            <RelatedProducts products={productDetails.related_products} />
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4 w-full container mx-auto py-4 lg:py-8">
                <OurCapabilities />
                {
                    productDetails.faqs.length ?
                        <FAQs faqs={productDetails.faqs} /> :
                        <Image src={'/assets/images/Placeholders/FaqAlternative.png'} width={500} height={500} alt="Our Capabilities" />
                }
            </div>
            <FooterContactForm />
        </div>
    )
}
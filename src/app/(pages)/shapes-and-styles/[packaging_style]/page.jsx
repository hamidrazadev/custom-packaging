import AccurateQuoteIn7Mins from "@/components/common/AccurateQuoteIn7Mins";
import Hero from "@/components/PackagingStyleDetail/Hero";
import TopBreadCrumb from "@/components/PackagingStyleDetail/TopBreadCrumb";
import LearnMore from "@/components/PackagingStyleDetail/LearnMore";
import FooterContactForm from "@/components/common/FooterContactForm";
import OurCapabilities from "@/components/common/OurCapabilities";
import FAQs from "@/components/common/FAQs";
import { GetAllIndustries } from "@/services/Industries";
import Image from "next/image";
import { GetAllPackagingStyles, GetAnPackageStyle } from "@/services/PackagingStyles";
import ProductsOfPackagingStyle from "@/components/PackagingStyleDetail/ProductsOfPackagingStyle";

export default async function Page({ params }) {
    const { packaging_style } = await params;
    const packaging_style_id = packaging_style.split("-")[packaging_style.split("-").length - 1];
    const packageStyleDetails = await GetAnPackageStyle(packaging_style_id);
    // console.log(industryDetails);
    const allPackagingStyles = await GetAllPackagingStyles();
    const nameOfTheseStyle = allPackagingStyles.map((style) => style.name);


    const heroData = {
        name: packageStyleDetails.name,
        description: packageStyleDetails.description,
        image: packageStyleDetails.image || 'https://www.halfpricepackaging.com/_ipx/s_600x331/https://www.halfpricepackaging.com/storage/cat_uploads/automotive-hardware-packaging.webp',
    }

    return (
        <div className="flex flex-col pt-4">
            <TopBreadCrumb packaging_style={packaging_style} />
            <Hero heroData={heroData} nameOfTheseStyle={nameOfTheseStyle} />
            <ProductsOfPackagingStyle packageStyleName={packageStyleDetails.name} products={packageStyleDetails.products} isToNextPage={packageStyleDetails.isToNextPage} />
            {packageStyleDetails.learn_more && <LearnMore data={packageStyleDetails.learn_more} />}
            <AccurateQuoteIn7Mins />
            <div className={`grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4 w-full container mx-auto py-4 lg:py-8 justify-between`}>
                <OurCapabilities />
                {
                    packageStyleDetails.faqs?.length ?
                        <FAQs faqs={packageStyleDetails.faqs} /> :
                        <div className="flex items-center justify-end">
                            <Image src={'/assets/images/Placeholders/FaqAlternative.png'} width={500} height={500} alt="Our Capabilities" />
                        </div>
                }
            </div>
            <FooterContactForm />
        </div>
    );
}
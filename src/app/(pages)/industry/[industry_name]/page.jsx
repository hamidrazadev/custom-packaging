import AccurateQuoteIn7Mins from "@/components/common/AccurateQuoteIn7Mins";
import Hero from "@/components/IndustryDetails/Hero";
import ProductsOfIndustry from "@/components/IndustryDetails/ProductsOfIndustry";
import TopBreadCrumb from "@/components/IndustryDetails/TopBreadCrumb";
import fs from "fs";
import path from "path";
import LearnMore from "@/components/IndustryDetails/LearnMore";
import FooterContactForm from "@/components/common/FooterContactForm";
import OurCapabilities from "@/components/common/OurCapabilities";
import FAQs from "@/components/common/FAQs";
import { GetAllIndustries, GetAnIndustryDetails } from "@/services/Industries";

export default async function Page({ params }) {
    const { industry_name } = await params;
    const industry_id = industry_name.split("-")[industry_name.split("-").length - 1];
    const industryDetails = await GetAnIndustryDetails(industry_id);
    const allIndustries = await GetAllIndustries();
    const nameOfTheseIndustries = allIndustries.map((industry) => industry.name);

    // const filePath = path.join(
    //     process.cwd(),
    //     "public/data/industries",
    //     `${industry_name}.json`
    // );
    // const fileData = fs.readFileSync(filePath, "utf-8");
    // const data = JSON.parse(fileData);

    const heroData = {
        name: industryDetails.name,
        description: industryDetails.description,
        image: industryDetails.industryInformation?.iindustryFeaturedImage || 'https://www.halfpricepackaging.com/_ipx/s_600x331/https://www.halfpricepackaging.com/storage/cat_uploads/automotive-hardware-packaging.webp',
    }

    return (
        <div className="flex flex-col pt-4">
            <TopBreadCrumb industry_name={industry_name} />
            <Hero heroData={heroData} nameOfTheseIndustries={nameOfTheseIndustries} />
            <ProductsOfIndustry products={industryDetails.products} isToNextPage={industryDetails.isToNextPage} />
            {industryDetails.learn_more && <LearnMore data={industryDetails.learn_more} />}
            <AccurateQuoteIn7Mins />
            <div className={`grid grid-cols-1 ${industryDetails.faqs?.length && 'lg:grid-cols-2'} lg:gap-8 gap-4 w-full container mx-auto py-4 lg:py-8`}>
                <OurCapabilities />
                {industryDetails.faqs?.length && <FAQs faqs={industryDetails.faqs} />}
            </div>
            <FooterContactForm />
        </div>
    );
}
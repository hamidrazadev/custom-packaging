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

export default async function Page({ params }) {
    const { industry_name } = await params;

    const filePath = path.join(
        process.cwd(),
        "public/data/industries",
        `${industry_name}.json`
    );
    const fileData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileData);

    const heroData = {
        title: data.title,
        description: data.description,
        image: data.image,
        sub_options: data.sub_options,
    }

    return (
        <div className="flex flex-col pt-4">
            <TopBreadCrumb data={{ industry_name }} />
            <Hero heroData={heroData} />
            <ProductsOfIndustry products={data.products} isToNextPage={data.isToNextPage} />
            <LearnMore data={data.learn_more} />
            <AccurateQuoteIn7Mins />
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4 w-full container mx-auto py-4 lg:py-8">
                <OurCapabilities />
                <FAQs faqs={data.faqs} />
            </div>
            <FooterContactForm />
        </div>
    );
}
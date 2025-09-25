import Hero from "@/components/IndustryDetails/Hero";
import TopBreadCrumb from "@/components/IndustryDetails/TopBreadCrumb";
import fs from "fs";
import path from "path";

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
        <div className="flex flex-col gap-2 py-4">
            <TopBreadCrumb data={{ industry_name }} />
            <Hero heroData={heroData} />
        </div>
    );
}
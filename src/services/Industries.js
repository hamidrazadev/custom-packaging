import { GetAllIndustries as GetAllIndustriesQuery } from '@/graphql/queries/GetAllIndustries';
import { GetAnIndustry as GetAnIndustryQuery } from '@/graphql/queries/GetAnIndustry';
import { graphqlClient } from '@/lib/graphqlClient';

export const GetAllIndustries = async () => {
    const allIndustries = await graphqlClient(GetAllIndustriesQuery);
    const refinedData = [];

    // console.log("All Industries", allIndustries.industries.nodes);

    await allIndustries.industries.nodes.map((industry) => refinedData.push({
        id: industry.id,
        name: industry.name,
        slug: industry.slug,
        icon: industry.industryInformation.industryIcon?.node.guid
    }));

    return refinedData
}

export const GetAnIndustryDetails = async (id) => {
    const industryDetails = await graphqlClient(GetAnIndustryQuery, { id });
    const refinedData = {
        name: industryDetails.industry.name,
        description: industryDetails.industry.description,
        image: industryDetails.industryInformation?.iindustryFeaturedImage,
        isToNextPage: industryDetails.industry.isToNextPage,
        products: industryDetails.industry.products.nodes,
        learn_more: industryDetails.industry.learnMore,
        faqs: industryDetails.industry.faq
    };

    // console.log("Industry Details", industryDetails);
    return refinedData
}
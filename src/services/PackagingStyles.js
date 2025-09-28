import { graphqlClient } from "@/lib/graphqlClient";
import { GetAllPackagingStyles as GetAllPackagingStylesQuery } from "@/graphql/queries/GetAllPackagingStyles";
import { GetAPackagingStyle } from "@/graphql/queries/GetAPackagingStyle";

export async function GetAllPackagingStyles() {
    const allPackagingStyles = await graphqlClient(GetAllPackagingStylesQuery);
    const refinedData = [];
    // console.log("allPackagingStyles", allPackagingStyles);
    allPackagingStyles.packagingStyles.nodes.map((packagingStyle) => refinedData.push({
        id: packagingStyle.id,
        name: packagingStyle.name,
        slug: packagingStyle.slug,
        icon: packagingStyle.packageStyleInformation.packagingIcon ? packagingStyle.packageStyleInformation.packagingIcon.node.guid : undefined
    }));
    // console.log("allPackagingStyles", refinedData);
    return refinedData
}

export const GetAnPackageStyle = async (id) => {
    const packageStyleInformation = await graphqlClient(GetAPackagingStyle, { id });
    // console.log("Package Style Details", packageStyleInformation);
    const refinedData = {
        name: packageStyleInformation.packagingStyle.name,
        description: packageStyleInformation.packagingStyle.description,
        image: packageStyleInformation.packagingStyle.packagingStyleInformation?.packagingFeaturedImage?.node?.guid,
        isToNextPage: packageStyleInformation.packagingStyle?.packagingStyleInformation?.hasDetailedPage[0] === "Yes" ? true : false,
        products: packageStyleInformation.packagingStyle.products.nodes,
        learn_more: packageStyleInformation.packagingStyle.packagingStyleInformation?.longDescription,
        faqs: packageStyleInformation.packagingStyle?.faq
    };

    // console.log("Industry Details", packageStyleInformation);
    return refinedData
}
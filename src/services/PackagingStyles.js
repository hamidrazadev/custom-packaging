import { graphqlClient } from "@/lib/graphqlClient";
import { GetAllPackagingStyles as GetAllPackagingStylesQuery } from "@/graphql/queries/GetAllPackagingStyles";

export async function GetAllPackagingStyles() {
    const allPackagingStyles = await graphqlClient(GetAllPackagingStylesQuery);
    const refinedData = [];
    allPackagingStyles.packagingStyles.nodes.map((packagingStyle) => refinedData.push({
        id: packagingStyle.id,
        name: packagingStyle.name,
        slug: packagingStyle.slug
    }));
    // console.log("allPackagingStyles", refinedData);
    return refinedData
}
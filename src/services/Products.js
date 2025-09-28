import { GetAllProducts as GetAllProductsQuery } from "@/graphql/queries/GetAllProducts";
import { GetAnIndustry } from "@/graphql/queries/GetAnIndustry";
import { GetAPackagingStyle } from "@/graphql/queries/GetAPackagingStyle";
import { graphqlClient } from "@/lib/graphqlClient";

export async function GetAllProducts() {
    const allProducts = await graphqlClient(GetAllProductsQuery, { first: 20 });
    // console.log("allProducts", allProducts.products.nodes);

    return allProducts.products.nodes
}

export async function GetAllProductsOfIndustry(industry_id) {
    const allProducts = await graphqlClient(GetAnIndustry, { id: industry_id });
    // console.log("allProducts", allProducts.industry.products.nodes);

    return allProducts.industry.products.nodes
}

export async function GetAllProductsOfPackagingStyle(packaging_style_id) {
    // console.log("packaging_style", packaging_style_id);
    const allProducts = await graphqlClient(GetAPackagingStyle, { id: packaging_style_id });
    // console.log("allProducts", allProducts.packagingStyle.products.nodes);

    return allProducts.packagingStyle.products.nodes
}

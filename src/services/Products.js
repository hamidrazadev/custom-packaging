import { GetAllProducts as GetAllProductsQuery } from "@/graphql/queries/GetAllProducts";
import { GetAnIndustry } from "@/graphql/queries/GetAnIndustry";
import { GetAProduct as GetAProductQuery } from "@/graphql/queries/GetAProduct";
import { GetAPackagingStyle } from "@/graphql/queries/GetAPackagingStyle";
import { graphqlClient } from "@/lib/graphqlClient";

export async function GetAllProducts({ first = 20, after = null, last = null, before = null }) {
    const res = await graphqlClient(GetAllProductsQuery, { first, after, last, before });
    return res.products; // contains { nodes, pageInfo }
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

export async function GetAProduct(id) {
    // console.log("packaging_style", packaging_style_id);
    const productDetails = await graphqlClient(GetAProductQuery, { id: parseInt(id) });
    // console.log("allProducts", allProducts.packagingStyle.products.nodes);
    {
        // slugOfIndustryOrPackagingStyle: productDetails.products.nodes[0].industry ? productDetails.products.nodes[0].industry.slug : productDetails.products.nodes[0].packagingStyle.slug
    }

    return productDetails
}
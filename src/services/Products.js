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
    const productDetailsObj = productDetails.products.nodes[0]
    // console.log(productDetailsObj);
    const requiredData = {
        productId: productDetailsObj.id,

        isFromIndustry: productDetailsObj?.industries?.nodes?.length ? true : false,

        title: productDetailsObj.title,

        slug: productDetailsObj.slug,

        overview: {
            title: productDetailsObj.title,
            description: productDetailsObj.productOverview.productOverview,
            image: productDetailsObj.featuredImage.node.guid
        },

        industry_slug: productDetailsObj?.industries?.nodes?.length ? productDetailsObj?.industries?.nodes[0]?.slug : null,

        industry_id: productDetailsObj?.industries?.nodes?.length ? productDetailsObj?.industries?.nodes[0]?.id : null,

        packaging_style_slug: productDetailsObj?.packagingStyles?.nodes?.length ? productDetailsObj?.packagingStyles?.nodes[0]?.slug : null,

        packaging_style_id: productDetailsObj?.packagingStyles?.nodes?.length ? productDetailsObj?.packagingStyles?.nodes[0]?.id : null,

        related_products: getRelatedProducts(productDetailsObj?.[productDetailsObj?.industries?.nodes?.length ? "industries" : "packagingStyles"]?.nodes),

        images: extractMaterialImages(productDetailsObj.productMaterial),

        learn_more: productDetailsObj.productLearnMore?.learMore || null,

        faqs: transformFaqs(productDetailsObj.productFaqs) || null,
    }

    return requiredData
}

function extractMaterialImages(productMaterial) {
    const images = [];

    // Loop through keys inside productMaterial
    Object.keys(productMaterial).forEach((key) => {
        if (key.startsWith("materialImage") && productMaterial[key]?.node) {
            images.push({
                imageURL: productMaterial[key].node.guid,
                imageAlt: productMaterial[key].node.altText || "",
            });
        }
    });

    // Sort by number (materialImage1, 2, 3...) to keep order
    images.sort((a, b) => {
        const numA = parseInt(a.imageURL.match(/(\d+)/)?.[0] || "0", 10);
        const numB = parseInt(b.imageURL.match(/(\d+)/)?.[0] || "0", 10);
        return numA - numB;
    });

    return images;
}

function transformFaqs(productFaqs) {
    const result = [];

    // Iterate through the keys of productFaqs
    Object.keys(productFaqs).forEach((key) => {
        if (key.startsWith("q")) {
            const index = key.replace("q", ""); // extract "one", "two", etc.
            const answerKey = "a" + index;
            if (productFaqs[answerKey]) {
                result.push({
                    question: productFaqs[key],
                    answer: productFaqs[answerKey],
                });
            }
        }
    });

    return result;
}

function getRelatedProducts(data, skipSlug) {
    const relatedProducts = [];

    data.forEach(industry => {
        industry.products.nodes.forEach(product => {
            if (product.slug !== skipSlug) {
                relatedProducts.push({
                    id: product.id,
                    slug: product.slug,
                    title: product.title,
                    image: product.featuredImage?.node?.guid || null,
                    deliveryTime: product.deliveryInfo?.deliveryTime || null,
                    moq: product.deliveryInfo?.moq || null,
                    industry: {
                        id: industry.id,
                        name: industry.name,
                        slug: industry.slug
                    }
                });
            }
        });
    });

    return relatedProducts;
}
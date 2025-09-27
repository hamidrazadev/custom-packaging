export const GetAllIndustries = `
query industry {
    industries(first: 50) {
    nodes {
            id: databaseId
            name
            description
            link
            slug
        seo {
                title
                opengraphTitle
                opengraphSiteName
                opengraphDescription
                metaDesc
                canonical
            }
        industryInformation {
        iindustryFeaturedImage {
            node {
                        altText
                        guid
                    }
                }
        industryIcon {
            node {
                        guid
                    }
                }
                industrySecondSectionDescription
        industrySecondSectionImage {
            node {
                        guid
                    }
                }
            }
        }
    }
}`
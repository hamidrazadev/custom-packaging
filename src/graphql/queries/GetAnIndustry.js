export const GetAnIndustry = `query industryData($id: ID!) {
  industry(id: $id, idType: DATABASE_ID) {
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
#     Products list
    products{
      nodes{
        id: databaseId
        title
        slug
        content
        deliveryInfo{
          deliveryTime
          moq
        }
        featuredImage{
          node{
            guid
          }
        }
      }
    }
    }
}`
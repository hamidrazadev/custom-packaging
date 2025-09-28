export const GetAPackagingStyle = `query PackageStyleData($id: ID!) {
  packagingStyle(id: $id, idType: DATABASE_ID) {
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
    packageStyleInformation{
      hasDetailedPage
      packagingLongDescription
      packagingDeliveryInformation
      packagingMoq
      packagingFeaturedImage{
        node{
          guid
          id
        }
      }
      packagingFirstSectionDescription
      packagingFirstSectionImage{
        node{
          guid
          id
        }
      }
      packagingIcon{
        node{
          guid
          id
        }
      }
      packagingSecondSectionDescription
      packagingSecondSectionImage{
        node{
          guid
          id
        }
      }
      packagingGallery{
        largefullFileUrl
        mediumFullFile
        thumbnailfullFileUrl
      }
      
      
    }
    
#   Products list
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
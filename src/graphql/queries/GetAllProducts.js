export const GetAllProducts = `query GetProducts($first:Int, $after:String, $last:Int, $before:String) {
  products(first: $first, after:$after, last:$last, before:$before) {
    pageInfo{
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
      
    nodes {
      id: databaseId
      title
      slug
      status
      featuredImage {
        node {
          guid
        }
      }
      seo {
        title
        opengraphTitle
        opengraphSiteName
        opengraphDescription
        metaDesc
        canonical
      }
      productShipping{
        shippingDescription
        shippingImage1{
          node{
            guid
            altText
          }
        }
        shippingImage2{
          node{
            guid
            altText
          }
        }
        shippingImage3{
          node{
            guid
            altText
          }
        }
        shippingImage4{
          node{
            guid
            altText
          }
        }
      }
      productOverview{
        productOverview
      }
      productAddons{
        addOnsFinish
        addOnsFinishImage1{
          node{
            guid
            altText
          }
        }
        addOnsFinishImage2{
          node{
            guid
            altText
          }
        }
        addOnsFinishImage3{
          node{
            guid
            altText
          }
        }
        addOnsFinishImage4{
          node{
            guid
            altText
          }
        }
        addOnsFinishImage5{
          node{
            guid
            altText
          }
        }
      }
      productMaterial{
        materialDescription
        ...productMaterialImages
      }
      productFaqs{
        ...productFaqs
      }
      
      deliveryInfo{
        deliveryTime
        moq
      }
      
      
      gallery{
        productGallery{
          fullFileUrl
          mediumfullFileUrl
          thumbnailfullFileUrl
        }
      }
      industries{
        nodes{
          id:databaseId
          slug
          name
          description
          industryInformation{
            iindustryFeaturedImage{
              node{
                id:databaseId
                guid
              }
            }
          }
        }
        
      }
    }
  
  }
}

fragment productMaterialImages on ProductMaterial{
  materialImage1{
          node{
            guid
            altText
          }
        }
        materialImage2{
          node{
            guid
            altText
          }
        }
        materialImage3{
          node{
            guid
            altText
          }
        }
        materialImage4{
          node{
            guid
            altText
          }
        }
        materialImage5{
          node{
            guid
            altText
          }
        }
        materialImage6{
          node{
            guid
            altText
          }
        }
  
}

fragment  productFaqs on ProductFaqs{
        qone
        aone
        qtwo
        atwo
        qthree
        athree
        qfour
        afour
        qfive
        afive
      }
`
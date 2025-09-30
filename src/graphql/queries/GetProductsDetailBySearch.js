export const GetProductsDetailBySearch = `query SearchProducts($first:Int, $after:String, $last:Int, $before:String, $search: String) {
  products(first: $first, after:$after, last:$last, before:$before, 
  where:{search:$search}) {
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
    
      deliveryInfo{
        deliveryTime
        moq
      }
      
     
     
    }
  
  }
}
`
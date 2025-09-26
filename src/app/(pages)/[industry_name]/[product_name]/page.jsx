import React from 'react'

export default async function page({ params }) {
    const { industry_name, product_name } = await params
    return (
        <div>{product_name} from {industry_name}</div>
    )
}
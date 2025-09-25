import React from 'react'

export default async function page({ params }) {
    const { industry_name } = await params

    return (
        <div>{industry_name}</div>
    )
}
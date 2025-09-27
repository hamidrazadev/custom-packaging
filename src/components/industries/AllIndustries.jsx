import React from 'react'
import IndustriesCard from './IndustriesCard'

// export const allIndustries = [
//     {
//         title: "Apparel & Fashion",
//         image: "Apparel-and-Fashion.png",
//         href: "apparel-and-fashion"
//     },
//     {
//         title: "Automotive",
//         image: "Automotive.png",
//         href: "automotive"
//     },
//     {
//         title: "Baby Products",
//         image: "Baby-Products.png",
//         href: "baby-products"
//     },
//     {
//         title: "Bakery",
//         image: "Bakery.png",
//         href: "bakery"
//     },
//     {
//         title: "Beverage, Wine, Liquor",
//         image: "Beverage-Wine-Liquor.png",
//         href: "beverage-wine-liquor"
//     },
//     {
//         title: "Candle",
//         image: "Candle.png",
//         href: "candle"
//     },
//     {
//         title: "Candy & Sweets",
//         image: "Candy-and-Sweets.png",
//         href: "candy-and-sweets"
//     },
//     {
//         title: "CBD",
//         image: "CBD.png",
//         href: "cbd"
//     },
//     {
//         title: "Chocolate",
//         image: "Chocolate.png",
//         href: "chocolate"
//     },
//     {
//         title: "Coffee & Tea",
//         image: "Coffee-and-Tea.png",
//         href: "coffee-and-tea"
//     },
// ]

export default function AllIndustries({ allIndustries }) {
    return (
        <div className='container mx-auto py-4 flex flex-col lg:items-center gap-4'>
            <div className="flex flex-col gap-2 w-full lg:w-2/3 lg:items-center lg:text-center">
                <h1>Custom packaging solutions for every industry.</h1>
                <p>Half Price Packaging possesses extensive expertise in delivering personalized packaging solutions to over 3000 businesses across the globe. Below, you will find a carefully curated selection of packaging solutions designed to cater to various industries.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 3xl:grid-cols-6 w-full gap-4 px-2 py-4">
                {
                    allIndustries.map((industry, index) => {
                        return (
                            <IndustriesCard industry={industry} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
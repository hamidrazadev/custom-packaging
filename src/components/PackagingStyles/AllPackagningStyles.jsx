import React from 'react'
import PackagingStylesCard from './PackagingStylesCard'

// export const allPackagingStyles = [
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

export default function AllPackagningStyles({ allPackagingStyles }) {
    return (
        <div className='container mx-auto py-4 flex flex-col lg:items-center gap-4'>
            <div className="flex flex-col gap-2 w-full lg:w-2/3 lg:items-center lg:text-center">
                <h1>The most versatile paperboard printing solution on the market</h1>
                <p>Tap into unlimited customization from start to finish to craft the perfect box experience.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 3xl:grid-cols-6 w-full gap-4 px-2 py-4">
                {
                    allPackagingStyles.map((packagingStyle, index) => {
                        // console.log(packagingStyle);
                        return (
                            <PackagingStylesCard packagingStyle={packagingStyle} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
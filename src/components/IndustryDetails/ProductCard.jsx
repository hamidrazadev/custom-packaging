"use client"
import Image from 'next/image'
import React from 'react'
import FormDialog from '../FormDialog'
import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'

export default function ProductCard({ product, isToNextPage }) {
    const [open, setOpen] = React.useState(false)
    const productURL = `/${window.location.pathname.split("/")[2]}/${product.slug + "-" + product.id}`
    const onClickBtn = () => {
        setOpen(true)
    }
    // console.log(product);
    return (
        isToNextPage ?
            <Link href={productURL} className='hover:shadow-xl rounded-xl transition-all duration-500 bg-white w-full h-full flex flex-col gap-2 hover:scale-[1.05]'>
                {
                    product.featuredImage.node.guid ?
                        <Image src={`${product.featuredImage.node.guid}`} width={300} height={300} className='rounded-3xl' /> :
                        <Skeleton height={200} />
                }
                <div className="flex flex-col gap-2 p-4">
                    <span className='text-sm text-start'>{product.deliveryInfo.moq}· Delivery: {product.deliveryInfo.deliveryTime}</span>
                    <span className='font-semibold text-start'>{product.title}</span>
                </div>
            </Link> :
            <>
                <button onClick={onClickBtn} className='hover:shadow-xl rounded-xl transition-all duration-500 bg-white w-full h-full flex flex-col gap-2 hover:scale-[1.05]'>
                    {
                        product.featuredImage.node.guid ?
                            <Image src={`${product.featuredImage.node.guid}`} width={300} height={300} className='rounded-3xl' /> :
                            <Skeleton height={200} />
                    }
                    <div className="flex flex-col gap-2 p-4">
                        <span className='text-sm text-start'>{product.deliveryInfo.moq}· Delivery: {product.deliveryInfo.deliveryTime}</span>
                        <span className='font-semibold text-start'>{product.title}</span>
                    </div>
                </button>
                <FormDialog open={open} onOpenChange={setOpen} />
            </>
    )
}

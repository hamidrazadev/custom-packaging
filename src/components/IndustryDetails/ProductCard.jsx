"use client"
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
import FormDialog from '../FormDialog'
import { slugify } from '@/utils/formatting'

export default function ProductCard({ product, isToNextPage }) {
    const [open, setOpen] = React.useState(false)
    const onClickBtn = () => {
        if (isToNextPage) {
            redirect(`/${window.location.pathname.split("/")[2]}/${product.slug + "-" + product.id}`)
        }
        setOpen(true)
    }

    return (
        <>
            <button onClick={onClickBtn} className='hover:shadow-xl rounded-xl transition-all duration-500 bg-white w-full h-full flex flex-col gap-2 hover:scale-[1.05] border border-gray-300'>
                <Image src={`${product.featuredImage.node.guid}`} width={300} height={300} className='rounded-xl' />
                <div className="flex flex-col gap-2 px-2 py-4">
                    <span className='text-sm text-start'>Min. {product.deliveryInfo.moq} units · Delivery: {product.deliveryInfo.deliveryTime}</span>
                    <span className='font-semibold text-start'>{product.title}</span>
                </div>
            </button>
            <FormDialog open={open} onOpenChange={setOpen} />
        </>
    )
}

import React from 'react'
import { TbHome } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'
import { extractName, unslugify } from '@/utils/formatting';

export default function TopBreadCrumb({ packaging_style }) {
    return (
        <div className='container mx-auto flex gap-1 py-4 items-center'>
            <Link href={'/'} className="link-for-icon">
                <TbHome />
            </Link>
            <MdOutlineKeyboardArrowRight className='text-2xl' />
            <Link href={`/shapes-and-styles`} className="link-md">
                <span>Packaging Styles</span>
            </Link>
            <MdOutlineKeyboardArrowRight className='text-2xl' />
            <span>{unslugify(extractName(packaging_style))}</span>
        </div>
    )
}

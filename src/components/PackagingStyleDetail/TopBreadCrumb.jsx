import React from 'react'
import { TbHome } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'
import { extractName, unslugify } from '@/utils/formatting';

export default function TopBreadCrumb({ packaging_style }) {
    return (
        <div className='container mx-auto flex gap-1 items-center'>
            <Link href={'/'} className="link-for-icon">
                <TbHome />
            </Link>
            <MdOutlineKeyboardArrowRight className='text-2xl' />
            <Link href={`/industry`} className="link-md">
                <span>Industries</span>
            </Link>
            <MdOutlineKeyboardArrowRight className='text-2xl' />
            <span>{unslugify(extractName(packaging_style))}</span>
        </div>
    )
}

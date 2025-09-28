import React from 'react'
import { TbHome } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'

export default function TopBreadCrumb() {
    return (
        <div className='container mx-auto flex gap-1 py-4 items-center'>
            <Link href={'/'} className="link-for-icon">
                <TbHome />
            </Link>
            <MdOutlineKeyboardArrowRight className='text-2xl' />
            <span>Industries</span>
        </div>
    )
}

import React from 'react'
import { TbHome } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'
import { unslugify } from 'utils/formatting';

export default function TopBreadCrumb({ data }) {
    return (
        <div className='container mx-auto flex gap-1 items-center'>
            <Link href={'/'} className="link-for-icon">
                <TbHome />
            </Link>
            <MdOutlineKeyboardArrowRight className='text-2xl' />
            <Link href={`/industries`} className="link-md">
                <span>Industries</span>
            </Link>
            <MdOutlineKeyboardArrowRight className='text-2xl' />
            <span>{unslugify(data.industry_name)}</span>
        </div>
    )
}

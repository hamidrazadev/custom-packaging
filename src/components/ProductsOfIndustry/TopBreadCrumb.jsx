import React from 'react'
import { TbHome } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'
import { extractName, unslugify } from '@/utils/formatting';

export default function TopBreadCrumb({ data }) {
    return (
        <div className='container mx-auto flex gap-1 py-4 items-center'>
            <Link href={'/'} className="link-for-icon">
                <TbHome />
            </Link>
            <MdOutlineKeyboardArrowRight className='text-2xl' />
            <Link href={data.isFromIndustry ? `/industry` : '/shapes-and-styles'} className="link-md">
                <span>{data.isFromIndustry ? `Industries` : 'Packaging Styles'}</span>
            </Link>
            <MdOutlineKeyboardArrowRight className='text-2xl' />
            <Link href={`/${data.isFromIndustry ? 'industry' : 'shapes-and-styles'}/${data.parent_name}`} className="link-md">
                <span>{unslugify(extractName(data.parent_name))}</span>
            </Link>
            <MdOutlineKeyboardArrowRight className='text-2xl' />
            <span>{unslugify(extractName(data.product_name))}</span>
        </div>
    )
}

import React from 'react'
import styles from '@/app/styles/IndustryDetail/LearnMore.module.css'

export default function LearnMore({ data }) {
    return (
        <div className='py-6'>
            <div className="container mx-auto flex items-center justify-center">
                <div className="bg-secondary rounded-xl p-4 lg:p-10 w-full flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1">
                    <h2 className='text-center'>Learn More About This Industry</h2>
                    {/* Scoped CSS applied only here */}
                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: data }}
                    />
                </div>
            </div>
        </div>
    )
}

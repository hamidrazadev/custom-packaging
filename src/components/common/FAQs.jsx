import React from 'react'
import { Accordion } from "radix-ui";
import { FaAngleRight } from "react-icons/fa6";


export default function FAQs({ faqs }) {
    return (
        <div className='flex flex-col gap-4'>
            <h2>Frequently Asked Questions</h2>
            <div className="flex flex-col gap-2">
                {
                    faqs.map((faq, index) => {
                        return (
                            <Accordion.Root key={index} type="single" collapsible>
                                <Accordion.Item value={faq.question}>
                                    <Accordion.Header className="bg-secondary hover:bg-secondary/80 px-4 py-2 rounded-md">
                                        <Accordion.Trigger className="AccordionTrigger flex justify-between items-center w-full">
                                            <span className='text-start'>{faq.question}</span>
                                            <FaAngleRight className="AccordionChevron" aria-hidden />
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="px-4 py-2">{faq.answer}</Accordion.Content>
                                </Accordion.Item>
                            </Accordion.Root>
                        )
                    })
                }
            </div>
        </div>
    )
}

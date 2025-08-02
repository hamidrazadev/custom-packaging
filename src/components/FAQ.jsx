import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are your minimum order quantities?",
      answer: "Our minimum order quantities vary by product type. For most custom packaging solutions, the minimum is 100 units. However, we offer flexible options for smaller businesses and can work with you to find a solution that fits your needs."
    },
    {
      question: "Do you offer design assistance?",
      answer: "Yes! We have an in-house design team that provides complimentary design assistance. Whether you need help creating artwork from scratch or optimizing an existing design for packaging, our experts are here to help you achieve the perfect look for your brand."
    },
    {
      question: "What materials are available for packaging?",
      answer: "We offer a wide range of eco-friendly materials including recycled cardboard, kraft paper, biodegradable plastics, and sustainable alternatives. All our materials are sourced responsibly and can be customized with various finishes, coatings, and printing options."
    },
    {
      question: "How long does production take?",
      answer: "Standard production time is 7-10 business days after artwork approval. Rush orders can be accommodated in 3-5 business days for an additional fee. We'll provide you with a detailed timeline when you place your order."
    },
    {
      question: "Can I see a sample before placing a large order?",
      answer: "Absolutely! We highly recommend ordering samples before committing to a large production run. We can provide physical samples for a small fee, which is often credited back to your main order. Digital proofs are also available at no charge."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide! We have partnerships with major shipping carriers to ensure your packaging arrives safely and on time. International shipping costs and delivery times vary by destination."
    },
    {
      question: "What printing options do you offer?",
      answer: "We offer full-color digital printing, offset printing, flexographic printing, and screen printing. Special finishes include embossing, debossing, foil stamping, spot UV, and matte/gloss coatings to make your packaging truly stand out."
    },
    {
      question: "Can you match specific colors for my brand?",
      answer: "Yes! We can match Pantone colors and work with your brand guidelines to ensure consistent color representation across all your packaging. Our color matching process ensures your brand colors are reproduced accurately."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers! Find everything you need to know 
            about our packaging solutions and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-accent hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? Our packaging experts are here to help!
          </p>
          <button className="bg-secondary text-accent hover:bg-yellow-500 px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

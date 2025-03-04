'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What can the AI voice agent do for my import-export business?",
    answer: "The AI voice agent can handle customer inquiries 24/7, including questions about product availability, pricing, lead times, order statuses, and shipping details. It can also manage follow-ups, schedule appointments, and escalate complex queries to human agents, keeping your business running efficiently day and night."
  },
  {
    question: "Does the AI voice agent support multiple languages for international clients?",
    answer: "Yes, the AI voice agent supports multiple languages, enabling effective communication with clients worldwide. It ensures accurate and clear responses for non-English-speaking customers, helping you serve a global market seamlessly."
  },
  {
    question: "How does the AI voice agent enhance customer satisfaction for my trading business?",
    answer: "The AI voice agent delivers fast, accurate answers to customer inquiries—like pricing or shipping details—24/7, ensuring your clients feel valued and informed. Happy customers mean stronger relationships and repeat business for traders like you."
  },
  {
    question: "Can the AI voice agent be customized for my specific products and industry jargon?",
    answer: "Absolutely. The AI voice agent is pretrained on import-export data and can be further customized with your product catalogs, FAQs, and business policies. It understands niche terms like \"customs clearance\" or \"bulk pricing\" to provide accurate, tailored responses."
  },
  {
    question: "How does AI Agent save me money?",
    answer: "The AI voice agent reduces operational costs by automating routine inquiries, minimizing the need for additional staff during peak times. It also speeds up response times, leading to higher customer satisfaction and retention—helping you save money while improving service quality."
  },
  {
    question: "How secure is the AI voice agent with my business data?",
    answer: "We use encryption, secure servers, and comply with GDPR and industry regulations to protect your data. Your customer and business information remains confidential, giving you confidence in its security."
  },
  {
    question: "Can the AI voice agent handle a high volume of inquiries during peak seasons?",
    answer: "Yes, the AI voice agent scales effortlessly to manage increased inquiry volumes without performance drops. It keeps your business responsive even during busy periods like holidays or trade surges."
  },
  {
    question: "What kind of support is available if I encounter issues with the AI voice agent?",
    answer: "We provide 24/7 customer support via email, chat, and phone. Our team is ready to resolve technical issues, and we deliver regular updates to keep the AI agent optimized for your needs."
  },
  {
    question: "How does the AI voice agent improve my team's productivity?",
    answer: "By handling repetitive inquiries, the AI voice agent frees your team to focus on high-value tasks like deal-making or resolving complex issues. This boosts productivity and lets your staff work more strategically."
  },
  {
    question: "What is the setup process like, and how long does it take?",
    answer: "To get started, join our waitlist, and once your spot opens, a dedicated team member will reach out to guide you through the setup process. We'll help you customize the AI agent to your business needs and integrate it with your systems, ensuring a smooth and tailored experience."
  }
];

const FAQAccordion = ({ faq, index }: { faq: FAQItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div className="bg-gray-50 rounded-lg">
        <button
          className="w-full text-left p-4 flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium pr-8">{faq.question}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-500"
          >
            ↓
          </motion.span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 text-gray-600">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function FAQ() {
  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midPoint);
  const rightColumn = faqs.slice(midPoint);

  return (
    <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {leftColumn.map((faq, index) => (
            <FAQAccordion key={index} faq={faq} index={index} />
          ))}
        </div>
        <div>
          {rightColumn.map((faq, index) => (
            <FAQAccordion key={index + midPoint} faq={faq} index={index + midPoint} />
          ))}
        </div>
      </div>
    </section>
  );
}

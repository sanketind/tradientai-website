import React from 'react';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      title: "24/7 Call Answering",
      description: "Answer every customer call instantly with an AI agent available 24/7—handling inquiries about pricing, availability, or shipping anytime, anywhere.",
      image: "/images/247 Call Answering.jpg"
    },
    {
      title: "Multi-Lingual Communication",
      description: "Break language barriers with support for 15+ languages, letting you serve clients across borders with clear, fluent communication.",
      image: "/images/Multi-Lingual Communication.jpg"
    },
    {
      title: "Auto Schedule & Follow-Ups",
      description: "Automate appointment booking, rescheduling, reminders, and follow-up emails or SMS—syncing with your calendar to secure meetings and ensure no more missed opportunities.",
      image: "/images/Auto Schedule & Follow-Ups.jpg"
    },
    {
      title: "Actionable Call Insights",
      description: "Gain deep insights with call recordings, sentiment analysis, and concise summaries—helping you understand customer needs and prioritize follow-ups.",
      image: "/images/Actionable Call Insights.jpg"
    },
    {
      title: "Personalized AI Agent",
      description: "Customize your AI agent's voice, tone, and responses to match your brand—ensuring every interaction feels professional and on-point.",
      image: "/images/Personalized AI Agent.jpg"
    },
    {
      title: "Customizable Knowledge Base",
      description: "Upload your product catalogs, SOPs, or website URLs to create a tailored knowledge base—ensuring the AI always gives accurate, business-specific answers.",
      image: "/images/Customizable Knowledge Base.jpg"
    },
  ];

  return (
    <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">Transform Your Customer Experience</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">AI-powered solutions that revolutionize customer interactions</p>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card flex flex-col items-center">
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>
              <div className="w-full text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

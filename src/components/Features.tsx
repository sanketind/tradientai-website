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
    <section className="section-padding">
      <h2 className="text-3xl font-bold text-center mb-12">Transform Your Customer Experience</h2>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="relative w-full h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

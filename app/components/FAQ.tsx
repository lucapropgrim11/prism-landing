'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-effect rounded-xl overflow-hidden">
      <button
        className="w-full p-6 text-left flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="p-6 pt-0 text-white/60">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "What makes Prism's AI different from other productivity tools?",
      answer: "Prism's AI is specifically designed to understand your work patterns, priorities, and deadlines. It actively learns from your behavior to provide personalized scheduling suggestions and automatically organizes tasks based on your unique workflow.",
    },
    {
      question: "How can Prism help me study more efficiently?",
      answer: "Prism enhances your study efficiency in several ways: 1) Our Pomodoro timer helps you maintain focus with customized study and break intervals, 2) The AI scheduler creates optimal study blocks based on your peak concentration hours, 3) Our folder-based note system helps organize study materials by subject, and 4) The smart task manager breaks down large study goals into manageable chunks. Plus, our analytics track your study patterns to help you understand when you're most productive.",
    },
    {
      question: "How does the smart scheduling feature work?",
      answer: "Our smart scheduling system analyzes your tasks, deadlines, and priorities to automatically create an optimized daily schedule. It considers your peak productivity hours, meeting times, and breaks to ensure a balanced and efficient workday.",
    },
    {
      question: "Can I integrate Prism with other calendar apps?",
      answer: "Yes! Prism seamlessly integrates with popular calendar applications like Google Calendar, Outlook, and Apple Calendar. This allows you to maintain a single view of all your commitments while leveraging our AI-powered scheduling features.",
    },
    {
      question: "Is my data secure with Prism?",
      answer: "Absolutely. We use industry-standard encryption and security measures to protect your data. Your information is stored securely, and we never share your personal or business data with third parties.",
    },
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes basic task management, simple calendar integration, a basic Pomodoro timer, and limited notes storage. It's perfect for individuals looking to get started with productivity tools.",
    },
  ];

  return (
    <section className="px-4" id="faqs">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
            Frequently Asked <span className="text-[#9D6FFF]">Questions</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Prism and how it can transform your productivity
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
} 
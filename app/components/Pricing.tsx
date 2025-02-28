'use client';

import Link from 'next/link';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingTier = ({ name, price, description, features, isPopular }: PricingTierProps) => (
  <div className={`p-8 rounded-2xl relative ${isPopular ? 'glass-effect neon-glow border-2 border-purple-500' : 'glass-effect'}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2">{name}</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold">{price}</span>
      {price !== 'Free' && <span className="text-gray-400">/month</span>}
    </div>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-3">
          <span className="text-purple-400 text-lg">✓</span>
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
    <Link
      href={price === 'Free' ? '/pre-register' : '/pre-register'}
      className={`w-full py-3 rounded-full font-semibold transition-all duration-300 block text-center ${
        isPopular 
          ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_20px_rgba(92,23,229,0.5)]' 
          : 'border border-white/20 hover:bg-white/10'
      }`}
    >
      Pre-Register Now
    </Link>
  </div>
);

export default function Pricing() {
  const tiers = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Perfect for getting started with basic productivity tools.',
      features: [
        'Basic task management',
        'Simple calendar view',
        'Basic Pomodoro timer',
        'Limited notes storage',
        '2 projects',
        'Email support',
      ],
    },
    {
      name: 'Pro',
      price: '$12',
      description: 'Ideal for professionals seeking advanced productivity features.',
      features: [
        'Advanced task management',
        'AI-powered scheduling',
        'Advanced Pomodoro with analytics',
        'Unlimited notes storage',
        'Unlimited projects',
        'Priority support',
      ],
      isPopular: true,
    },
    {
      name: 'Team',
      price: '$29',
      description: 'Perfect for teams and organizations.',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Admin dashboard',
        'Team analytics',
        'Custom integrations',
        '24/7 priority support',
      ],
    },
  ];

  return (
    <section className="py-20 px-4" id="pricing">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free and upgrade as you grow. Special launch pricing available for early adopters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <PricingTier key={tier.name} {...tier} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-purple-400 text-lg">✓</span>
              <span className="text-gray-300">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-400 text-lg">✓</span>
              <span className="text-gray-300">Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-400 text-lg">✓</span>
              <span className="text-gray-300">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
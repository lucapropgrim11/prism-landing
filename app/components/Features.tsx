'use client';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const FeatureCard = ({ icon, title, description, features }: FeatureCardProps) => (
  <div className="p-8 rounded-2xl glass-effect hover-scale neon-glow">
    <div className="w-12 h-12 mb-6 text-3xl flex items-center justify-center bg-white/5 rounded-xl">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-white/60 mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-3">
          <span className="text-[#9D6FFF] mt-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-white/80 leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Features() {
  const features = [
    {
      icon: '📋',
      title: 'Smart Task Manager',
      description: 'Organize and prioritize your tasks with intelligent features that adapt to your workflow.',
      features: [
        'AI-powered task prioritization',
        'Drag-and-drop task organization',
        'Custom task categories and tags',
        'Progress tracking and analytics',
      ],
    },
    {
      icon: '🤖',
      title: 'AI Assistant',
      description: 'Let our AI help you optimize your schedule and maximize your productivity throughout the day.',
      features: [
        'Smart schedule optimization',
        'Deadline-based task ordering',
        'Priority-based time allocation',
        'Automated task suggestions',
      ],
    },
    {
      icon: '⏱️',
      title: 'Focus Timer',
      description: 'Stay focused and productive with our advanced Pomodoro timer and session tracking.',
      features: [
        'Customizable work intervals',
        'Break time reminders',
        'Session statistics',
        'Focus mode integration',
      ],
    },
  ];

  return (
    <section className="px-4" id="features">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
            Powerful Features for
            <br />
            <span className="text-[#9D6FFF]">Maximum Productivity</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to stay organized, focused, and productive
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
} 
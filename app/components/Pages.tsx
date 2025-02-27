'use client';

interface PageCardProps {
  title: string;
  type: 'main' | 'utility';
}

const PageCard = ({ title, type }: PageCardProps) => (
  <div className="group relative aspect-[4/3] rounded-xl overflow-hidden glass-effect hover-scale neon-glow">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300">{type === 'main' ? 'Main Page' : 'Utility Page'}</p>
    </div>
  </div>
);

export default function Pages() {
  const mainPages = [
    'Home',
    'About',
    'Services',
    'Portfolio',
    'Blog',
    'Contact',
    'Pricing',
    'Team',
  ];

  const utilityPages = [
    '404 Error',
    'Password Protected',
    'Style Guide',
    'Licensing',
    'Changelog',
    'Search Results',
  ];

  return (
    <section className="py-20 px-4" id="pages">
      {/* Main Pages */}
      <div className="container mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Main Pages
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Essential pages for your website, beautifully designed and ready to use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainPages.map((title) => (
            <PageCard key={title} title={title} type="main" />
          ))}
        </div>
      </div>

      {/* Utility Pages */}
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Utility Pages
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Additional pages to enhance your website functionality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {utilityPages.map((title) => (
            <PageCard key={title} title={title} type="utility" />
          ))}
        </div>
      </div>
    </section>
  );
} 
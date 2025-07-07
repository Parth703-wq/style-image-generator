
import { useState } from 'react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700" style={{ backgroundColor: '#1e293b' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              Doc<span style={{ color: '#8b5cf6' }}>Gen</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Docs
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Workspace
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button 
              className="text-white px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)' }}
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Docs
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Workspace
              </a>
              <div className="pt-3 border-t border-slate-700">
                <button className="text-slate-300 hover:text-white transition-colors mb-2 block">
                  Sign In
                </button>
                <button 
                  className="text-white px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)' }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

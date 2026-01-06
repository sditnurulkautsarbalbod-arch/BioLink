import React from 'react';
import { LINKS, SOCIAL_LINKS, SCHOOL_NAME } from './constants';
import LinkCard from './components/LinkCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-teal-950 to-slate-900">
      
      {/* Decorative Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[50%] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none animate-fade-in" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[60%] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none animate-fade-in" />

      {/* Main Content Container */}
      <main className="w-full max-w-md mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <header className="flex flex-col items-center space-y-4 mb-8 pt-6 sm:pt-10 text-center animate-slide-up">
          {/* Optional: Placeholder for Logo if needed later
          <div className="w-24 h-24 bg-teal-800 rounded-full flex items-center justify-center shadow-2xl mb-2">
             <span className="text-3xl">🏫</span>
          </div> 
          */}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-md">
            {SCHOOL_NAME}
          </h1>
          <div className="h-1 w-20 bg-teal-500 rounded-full opacity-80"></div>
        </header>

        {/* Links List Section */}
        <section className="w-full space-y-3 sm:space-y-4 mb-10">
          {LINKS.map((link, index) => (
            <LinkCard key={link.id} item={link} index={index} />
          ))}
        </section>

        {/* Footer Section (Socials) */}
        <footer className="flex items-center justify-center space-x-6 pt-4 pb-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              className="text-teal-200/80 hover:text-white hover:scale-110 transition-all duration-300 p-2 bg-teal-900/30 rounded-full hover:bg-teal-700/50"
            >
              {social.icon}
            </a>
          ))}
        </footer>
        
        <div className="text-teal-500/40 text-xs mt-4">
          © {new Date().getFullYear()} {SCHOOL_NAME}
        </div>

      </main>
    </div>
  );
};

export default App;
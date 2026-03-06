import React from 'react';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const sectionItems = [
  { to: '/overview', icon: 'cogs', label: 'Overview' },
  { to: '/hobby', icon: 'star', label: 'Hobby' },
];

const SectionTabs: FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  if (!['/', '/overview', '/hobby'].includes(pathname)) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <nav
        aria-label="Primary sections"
        className="inline-flex w-full max-w-md items-center gap-1.5 rounded-full border border-white/70 bg-white/78 p-1.5 shadow-[0_20px_48px_rgba(15,23,42,0.1)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/72"
      >
        {sectionItems.map((item) => {
          const isActive = pathname === item.to || (item.to === '/overview' && pathname === '/');

          return (
            <Link
              key={item.to}
              to={item.to}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold no-underline transition ${
                isActive
                  ? 'bg-slate-950 text-white shadow-[0_10px_24px_rgba(15,23,42,0.2)]'
                  : 'text-slate-600 hover:bg-slate-950/4 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/6 dark:hover:text-white'
              }`}
            >
              <i className={`fas fa-${item.icon}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default SectionTabs;

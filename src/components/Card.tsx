import React from 'react';
import type { FC, ReactNode } from 'react';
import styles from './Card.module.css';

const Card: FC<{
  title: string;
  hrefText: string;
  href: string;
  icon: string;
  tags?: string[];
  children?: ReactNode;
}> = ({ title, hrefText, href, icon, tags, children }) => (
  <article className={`group ${styles.cardShell}`}>
    <div className={styles.cardGlow} />
    <div className={`relative flex h-full flex-col gap-5 p-6 sm:p-7 ${styles.cardContent}`}>
      <div className={`flex items-start gap-4 ${styles.media}`}>
        <div className="shrink-0">
          <figure className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:bg-slate-900 dark:ring-slate-700/80">
            <img src={icon} alt={`${title} icon`} className="h-11 w-11 object-contain" />
          </figure>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">{title}</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            <a className={styles.cardLink} target="_blank" rel="noopener noreferrer" href={href}>
              {hrefText}
              <i className="fas fa-external-link-alt text-[0.72rem]" />
            </a>
          </p>
        </div>
      </div>
      {children ? (
        <div className={`text-left text-sm leading-7 text-slate-600 dark:text-slate-300 ${styles.cardBody}`}>
          {children}
          {tags ? (
            <div className={styles.tagList}>
              {tags.map((tag) => (
                <span key={`card-${tag}`} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  </article>
);

export default Card;

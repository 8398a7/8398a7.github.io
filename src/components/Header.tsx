import React from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import profile from '../images/profile.jpg';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroNoise} />
      <div className={styles.heroGlowPrimary} />
      <div className={styles.heroGlowSecondary} />
      <div className="mx-auto grid w-[min(1180px,calc(100%-clamp(2rem,7vw,6rem)))] gap-10 px-0 pb-12 pt-6 lg:pb-16 lg:pt-8">
        <div className="relative z-10 grid gap-10">
          <nav className="flex flex-wrap items-center justify-between gap-4">
            <Link
              className="text-sm font-semibold tracking-[0.28em] text-white/80 no-underline transition hover:text-white"
              to="/"
            >
              8398a7.github.io
            </Link>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-medium text-white no-underline shadow-[0_20px_45px_rgba(15,23,42,0.22)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/18 hover:text-white"
              href="https://github.com/8398a7/8398a7.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
              Source
            </a>
          </nav>

          <div className="grid justify-items-center gap-6 text-center">
            <figure className="h-36 w-36 overflow-hidden rounded-[36px] border border-white/18 bg-white/10 p-2 shadow-[0_24px_60px_rgba(8,15,37,0.35)] sm:h-40 sm:w-40">
              <img
                className={`h-full w-full rounded-[28px] object-cover ${styles.profileImage}`}
                alt="profile"
                src={profile}
              />
            </figure>
            <div className="grid justify-items-center gap-3">
              <h1 className="text-5xl font-semibold leading-none tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">
                8398a7
              </h1>
              <p className="text-sm uppercase tracking-[0.28em] text-white/58">Kyoto based web engineer</p>
              <span className={styles.heroBadge}>
                <i className="fa fa-beer" />
                Web Engineer
              </span>
            </div>
            <div className={styles.tagCluster}>
              {['Golang', 'TypeScript', 'Ruby', 'AWS', 'GCP'].map((elem) => {
                return (
                  <span key={`tag-${elem}`} className={styles.skillTag}>
                    {elem}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

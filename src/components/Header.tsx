import React, { useCallback } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import profile from '../images/profile.jpg';
import { toggleNavbar } from '../features/ui';
import { useAppDispatch, useAppSelector } from '../hooks';
import styles from './Header.module.css';

const MENU_ID = 'header-navbar-menu';

const Header: FC = () => {
  const openNavbar = useAppSelector((state) => state.ui.openNavbar);

  const dispatch = useAppDispatch();
  const handleClick = useCallback(() => dispatch(toggleNavbar()), [dispatch]);
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <nav className="mx-auto flex w-[min(1100px,calc(100%-clamp(2.5rem,8vw,7rem)))] flex-col gap-4 px-0 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4">
            <div>
              <Link className="text-base font-semibold tracking-[0.18em] text-white no-underline" to="/">
                8398a7.github.io
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-slate-950/15 text-white shadow-lg backdrop-blur md:hidden"
              aria-label="Toggle navigation"
              aria-controls={MENU_ID}
              aria-expanded={openNavbar}
              onClick={handleClick}
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
              </span>
            </button>
          </div>
          <div id={MENU_ID} className={`${openNavbar ? 'flex' : 'hidden'} md:flex`}>
            <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/90 px-5 py-2.5 text-sm font-semibold text-sky-900 no-underline shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
                href="https://github.com/8398a7/8398a7.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center">
                  <i className="fab fa-github"></i>
                </span>
                <span>Source</span>
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className={styles.heroInner}>
        <div className="mx-auto flex w-[min(1100px,calc(100%-clamp(2.5rem,8vw,7rem)))] flex-col items-center px-0 pb-10 pt-4 text-center sm:pb-14 sm:pt-6">
          <h1>
            <figure className="mx-auto h-32 w-32 overflow-hidden rounded-full">
              <img
                className={`h-full w-full rounded-full object-cover ${styles.profileImage}`}
                alt="profile"
                src={profile}
              />
            </figure>
          </h1>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">@8398a7</h2>
          <span className={styles.heroBadge}>
            <i className="fa fa-beer" />
            Web Developer
          </span>
          <div className={styles.tagCluster}>
            {['Ruby', 'Golang', 'TypeScript', 'AWS', 'GCP'].map((elem) => {
              return (
                <span key={`tag-${elem}`} className={styles.skillTag}>
                  {elem}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.heroInner}>
        <nav className="mx-auto w-[min(1100px,calc(100%-clamp(2.5rem,8vw,7rem)))] px-0">
          <ul className={styles.navTabs}>
            <li>
              <Link to="/overview">
                <i className="fas fa-cogs" />
                Overview
              </Link>
            </li>
            <li>
              <Link to="/hobby">
                <i className="fas fa-star" />
                Hobby
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;

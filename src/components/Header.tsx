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
  const openNavbarClass = openNavbar ? 'is-active' : '';

  const dispatch = useAppDispatch();
  const handleClick = useCallback(() => dispatch(toggleNavbar()), [dispatch]);
  return (
    <section className={`hero is-info is-bold ${styles.hero}`}>
      <div className={`hero-head ${styles.heroInner}`}>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                8398a7.github.io
              </Link>
              <button
                type="button"
                className={`navbar-burger burger ${openNavbarClass}`}
                aria-label="Toggle navigation"
                aria-controls={MENU_ID}
                aria-expanded={openNavbar}
                onClick={handleClick}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
            <div id={MENU_ID} className={`navbar-menu ${openNavbarClass}`}>
              <div className="navbar-end">
                <span className="navbar-item">
                  <a
                    className="button is-info is-inverted"
                    href="https://github.com/8398a7/8398a7.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                    <span>Source</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className={`hero-body ${styles.heroInner}`}>
        <div className="container has-text-centered">
          <h1 className="title">
            <figure className="image container is-128x128">
              <img className={`is-rounded ${styles.profileImage}`} alt="profile" src={profile} />
            </figure>
          </h1>
          <h2 className="subtitle">@8398a7</h2>
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

      <div className={`hero-foot ${styles.heroInner}`}>
        <nav className="tabs">
          <div className="container">
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
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;

import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import profile from '../images/profile.jpg';
import { RootState } from '../ducks';
import { actions } from '../ducks/UI';

const Header: React.SFC = () => {
  const openNavbar = useSelector((state: RootState) => state.ui.openNavbar);
  const openNavbarClass = openNavbar ? 'is-active' : '';

  const dispatch = useDispatch();
  const handleClick = useCallback(() => dispatch(actions.toggleNavbar()), [
    dispatch,
  ]);
  return (
    <>
      <section className="hero is-info is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                  8398a7.github.io
                </Link>
                <span
                  className={`navbar-burger burger ${openNavbarClass}`}
                  data-target="navbarMenuHeroA"
                  onClick={handleClick}
                >
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div
                id="navbarMenuHeroA"
                className={`navbar-menu ${openNavbarClass}`}
              >
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

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              <figure className="image container is-128x128">
                <img className="is-rounded" alt="profile" src={profile} />
              </figure>
            </h1>
            <h2 className="subtitle">@8398a7</h2>
            <span className="tag is-warning is-large">
              <i className="fa fa-beer" />
              Web Developer
            </span>
            <div style={{ marginTop: '5px' }}>
              {[
                'AWS',
                'GCP',
                'Rails',
                'Golang',
                'TypeScript',
                'Kubernetes',
                'Docker',
                'Chef',
                'React',
              ].map((elem) => {
                return (
                  <span
                    key={`tag-${elem}`}
                    style={{ marginTop: '5px', marginLeft: '5px' }}
                    className="tag is-success is-medium"
                  >
                    {elem}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul>
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
    </>
  );
};

export default Header;

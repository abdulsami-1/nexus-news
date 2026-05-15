import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, Briefcase, Film, HeartPulse,
  FlaskConical, Trophy, Cpu, Sun, Moon,
} from 'lucide-react';

const CATEGORIES = [
  { path: '/',              label: 'Home',          Icon: Home         },
  { path: '/business',     label: 'Business',      Icon: Briefcase    },
  { path: '/entertainment',label: 'Entertainment', Icon: Film         },
  { path: '/health',       label: 'Health',        Icon: HeartPulse   },
  { path: '/science',      label: 'Science',       Icon: FlaskConical },
  { path: '/sports',       label: 'Sports',        Icon: Trophy       },
  { path: '/technology',   label: 'Technology',    Icon: Cpu          },
];

const LogoMark = () => (
  <svg className="nm-logo-mark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="0"  y="0"  width="9" height="9" rx="1.5" fill="#E11D48"/>
    <rect x="11" y="0"  width="9" height="9" rx="1.5" fill="#E11D48" opacity="0.38"/>
    <rect x="0"  y="11" width="9" height="9" rx="1.5" fill="#E11D48" opacity="0.38"/>
    <rect x="11" y="11" width="9" height="9" rx="1.5" fill="#E11D48"/>
  </svg>
);

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar fixed-top navbar-expand-lg nm-navbar">
      <div className="container">
        <Link className="nm-brand" to="/">
          <LogoMark />
          Nexus
        </Link>

        <button
          className="navbar-toggler ms-auto me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nmNavLinks"
          aria-controls="nmNavLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nmNavLinks">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {CATEGORIES.map(({ path, label, Icon }) => (
              <li className="nav-item" key={path}>
                <Link
                  className={`nav-link nm-nav-link ${pathname === path ? 'active' : ''}`}
                  to={path}
                >
                  <Icon size={14} strokeWidth={2} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button onClick={toggleDarkMode} className="nm-dark-toggle">
            {darkMode
              ? <><Sun size={14} strokeWidth={2} /> Light</>
              : <><Moon size={14} strokeWidth={2} /> Dark</>
            }
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

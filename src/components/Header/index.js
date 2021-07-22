import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, WrapperRoute, Routes, Route } from './styles.js';

import moon from '../../assets/images/icons/moon.svg';
import sun from '../../assets/images/icons/sun.svg';

const routes = [
  {
    id: 0,
    nameRoute: 'Home',
    to: '/',
    active: true,
  },

  {
    id: 1,
    nameRoute: 'About Us',
    to: '/',
    active: false,
  },

  {
    id: 3,
    nameRoute: 'Contacts',
    to: '/',
    active: false,
  },

];

export default function Header() {
  const { selectedTheme, onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <WrapperRoute>
          <div id="wrapper-logo">
            <a href="/">
              Clothing<span>store</span>
            </a>
          </div>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.id}
                active={route.active}
              >
                <a href={route.to}>{route.nameRoute}</a>
              </Route>
            ))}
              <Route>
                <button
                  type="button"
                  onClick={onToggleTheme}
                >
                  <img
                    src={selectedTheme === 'dark' ? sun : moon}
                    alt={selectedTheme === 'dark' ? 'Sun' : 'Moon'}
                  />
                </button>
              </Route>
          </Routes>
        </WrapperRoute>
      </Container>
    </>
  );
}

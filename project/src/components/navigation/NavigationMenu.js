import { slide as Menu } from 'react-burger-menu';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react'
import React from 'react';

function NavigationMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div>
        <button className="text-2xl" onClick={handleMenuClick}>
          <FaBars />
        </button>
      </div>
      <Menu
        isOpen={menuOpen}
        width={'100%'}
        right
        customBurgerIcon={false}
        customCrossIcon={false}
        styles={{
          bmBurgerButton: {
            display: 'none'
          },
          bmOverlay: {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          },
          bmMenuWrap: {
            top: 0,
            height: '100vh'
          },
          bmMenu: {
            background: '#fff',
            padding: '2.5em 1.5em',
            fontSize: '1.15em',
            overflow: 'hidden'
          }
        }}
      >
        <nav className=" flex-col justify-center text-center pt-32">
            <a className="text-3xl " href="#about" onClick={closeMenu}>
            <h1>Home</h1>
            </a>
          <a className="text-3xl mt-[10%]" href="#services" onClick={closeMenu}>
            <h1>Search</h1>
          </a>
          <a className="text-3xl py-4" href="#contact" onClick={closeMenu}>
            <h1>My Schedule</h1>
          </a>
          <a className="text-3xl py-4" href="#contact" onClick={closeMenu}>
            <h1>Log out</h1>
          </a>
          <button className="absolute top-4 right-4 text-2xl" onClick={closeMenu}>
            <FaTimes />
          </button>
        </nav>
      </Menu>
    </>
  );
}

export default NavigationMenu
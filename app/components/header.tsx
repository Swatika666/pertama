// components/Header.tsx
'use client';

import { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">aryoks.</a>
      </div>
      <nav className={styles.nav}>
        <div className={styles.menuToggle} onClick={toggleDropdown}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${styles.menuItems} ${isDropdownOpen ? styles.open : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

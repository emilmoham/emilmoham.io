import { useState } from 'react';
import styles from '../styles/navbar.module.css'

export default function Navbar () {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
    console.log(showMenu);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.icon_container}>
        <a href="/">Emil Mohammed</a>
      </div>
      <ul className={showMenu ? styles.nav_list + ' ' + styles.active : styles.nav_list}>
        <li className={styles.list_item}>
          <a href="/">Home</a>
        </li>
        <li className={styles.list_item}>
          <a href="/archive">Archive</a>
        </li>
        <li className={styles.list_item}>
          <a href="https://github.com/emilmoham/">Github</a>
        </li>
      </ul>
      <button className={styles.menu} onClick={() => {toggleMenu()}}>
        <div className={styles.menu_line}></div>
        <div className={styles.menu_line}></div>
        <div className={styles.menu_line}></div>
      </button>
    </nav>
  );
}
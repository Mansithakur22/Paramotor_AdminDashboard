// components/Header.js
import Link from 'next/link';
import styles from './Sidebar.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Admin Dashboard</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
          <li>
            <Link href="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

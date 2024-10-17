import styles from './Sidebar.module.css'

export function Footer() {
    return (
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Admin Dashboard. All rights reserved.</p>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
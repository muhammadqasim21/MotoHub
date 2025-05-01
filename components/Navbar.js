import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">MotoHub</Link>
      </div>
      <div className={styles.menu}>
        <Link href="/login" className={styles.link}>Login</Link>
        <Link href="/signup" className={styles.link}>Signup</Link>
        <Link href="/cart" className={styles.link}>Cart</Link>
      </div>
    </nav>
  );
}

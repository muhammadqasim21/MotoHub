import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">MotoHub</Link>
      </div>

      <div className={styles.menu}>
        {isLoggedIn ? (
          <>
            <span className={styles.username}>Hi, {user?.name}</span>
            <Link href="/category" className={styles.linkBtn}>Category</Link>
            <Link href="/category" className={styles.linkBtn}>Products</Link>
            <Link href="/cart" className={styles.linkBtn}>Cart</Link>
            <button className={styles.linkBtn} onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className={styles.linkBtn}>Login</Link>
            <Link href="/register" className={styles.linkBtn}>Signup</Link>
            <Link href="/cart" className={styles.linkBtn}>Cart</Link>
          </>
        )}
      </div>
    </nav>
  );
}

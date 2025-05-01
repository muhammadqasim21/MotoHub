import { useState } from 'react';
import styles from '@/styles/Auth.module.css';
import { useAuth } from '@/context/AuthContext';  // ✅ Import the global context
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();  // ✅ Use the global login function
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Dummy login logic (you can replace this with real API call)
    if (email && password) {
      // Call global login (set isLoggedIn true + set user info)
      login({ name: 'Hassan', email });  // pass user data

      router.push('/');  // Redirect to homepage
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login to MotoHub</h2>
        
        <input 
          type="email" 
          placeholder="Email" 
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />

        <input 
          type="password" 
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />

        <button type="submit" className={styles.button}>Login</button>

        <p className={styles.text}>
          Don't have an account? <Link href="/register" className={styles.link}>Sign up</Link>
        </p>
      </form>
    </div>
  );
}

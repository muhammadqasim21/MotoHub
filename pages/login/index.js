import { useState } from 'react';
import styles from '@/styles/Auth.module.css';
import { useAuth } from '@/context/AuthContext';  // ✅ Import the global context
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();  // ✅ Use the global login function
  const router = useRouter();

  const  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', {
        email,
        password,
      });

      if (res.status === 200) {
        // Show success message as inline text
        login({name: res.data.name, email})
        router.push('/');
      } 
    } catch (err) {
      console.error(err);
      if (err.response?.status === 400) {
        alert('Email does not exist. Sign Up first')
      }else if (err.response?.status===500) {
        alert('Incorrect Password. Please try again.');
      }
       else {
        alert('Something went wrong. Please try again.');
      }
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

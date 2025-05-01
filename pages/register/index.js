import { useState } from 'react';
import styles from '@/styles/Auth.module.css';
// import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstName]= useState('');
  const [lastname, setLastName]= useState('');
  const [password, setPassword] = useState('');
//   const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy signup (replace this with real API call)
    if (email && password) {
      login('dummy-token'); // Save token after signup
      router.push('/'); // Redirect to home
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Create your MotoHub Account</h2>
        
        <input className={styles.input}
          type="name" 
          placeholder="First Name" 
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          required 
        />
        <input className={styles.input}
          type="name" 
          placeholder="Last Name" 
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          required 
        />

        <input className={styles.input}
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />

        <input className={styles.input}
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />

        <button className={styles.button} type="submit">Sign Up</button>

        <p className={styles.text}>
          Already have an account? <Link href="/login" className={styles.link} >Login</Link>
        </p>
      </form>
    </div>
  );
}

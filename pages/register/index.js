import { useState } from 'react';
import styles from '@/styles/Auth.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordWarning, setPasswordWarning] = useState('');
  const [confirmWarning, setConfirmWarning] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset warnings first
    setPasswordWarning('');
    setConfirmWarning('');
    setError('');

    let hasError = false;

    // Password length check
    if (password.length < 7) {
      setPasswordWarning('Password must be at least 7 characters long.');
      hasError = true;
    }

    // Confirm password match check
    if (password !== confirmPassword) {
      setConfirmWarning('Passwords do not match.');
      hasError = true;
    }

    if (hasError) return;

    try {
      const res = await axios.post('/api/register', {
        firstname,
        lastname,
        email,
        password,
      });

      if (res.status === 201) {
        // Show success message as inline text
        alert('Account created successfully! Redirecting to login...');
        router.push('/login');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      if (err.response?.status === 400) {
        setError(err.response.data.message || 'Email already registered!');
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Create your MotoHub Account</h2>

        <input
          className={styles.input}
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password (min 7 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Password length warning */}
        {passwordWarning && <p style={{ color: 'red', marginTop: '5px' }}>{passwordWarning}</p>}

        <input
          className={styles.input}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {/* Password match warning */}
        {confirmWarning && <p style={{ color: 'red', marginTop: '5px' }}>{confirmWarning}</p>}

        {/* General error */}
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

        <button className={styles.button} type="submit">
          Sign Up
        </button>

        <p className={styles.text}>
          Already have an account?{' '}
          <Link href="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

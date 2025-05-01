import styles from '@/styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>MotoHub - Your Bike Parts Destination</h1>
        <p>Find everything you need to keep your ride smooth and fast.</p>
      </div>
    </div>
  );
}

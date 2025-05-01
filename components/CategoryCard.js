import styles from '@/styles/Card.module.css';

export default function CategoryCard({ category }) {
  return (
    <div className={styles.card}>
      <img src={category.image} alt={category.name} className={styles.image} />
      <h3 className={styles.h3class}>{category.name}</h3>
      <p className={styles.pclass}>{category.quantity} items</p>
    </div>
  );
}

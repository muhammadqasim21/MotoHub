import styles from '@/styles/Card.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3>{product.company}</h3>
      <h4>{product.product}</h4>
      <p>Rs: {product.price}</p>
    </div>
  );
}

import { useRouter } from 'next/router';
import styles from '@/styles/ProductDetail.module.css';

const products = [
  { id: 1, categoryId: 1, name: 'Engine Oil', price: '$25', description: 'Premium synthetic engine oil.', image: '/images/engine.jpg' },
  { id: 2, categoryId: 2, name: 'Brake Pads', price: '$40', description: 'High-performance brake pads.', image: '/images/engine.jpg' },
  { id: 3, categoryId: 3, name: 'All-Season Tyre', price: '$100', description: 'Durable all-season tyre.', image: '/images/engine.jpg' },
  { id: 4, categoryId: 4, name: 'Sport Exhaust', price: '$200', description: 'Enhance your vehicle sound.', image: '/images/engine.jpg' },
];

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p style={{ padding: '2rem' }}>Product not found.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>

      <div className={styles.details}>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.price}>{product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <p><strong>Category ID:</strong> {product.categoryId}</p>

        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}

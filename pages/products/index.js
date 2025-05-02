import Link from 'next/link';
import styles from '@/styles/CategoryList.module.css';

const products = [
    { id: 1, categoryId: 1, name: 'Engine Oil', price: '$25', image: '/images/engine.jpg' },
    { id: 2, categoryId: 2, name: 'Brake Pads', price: '$40', image: '/images/engine.jpg' },
    { id: 3, categoryId: 3, name: 'All-Season Tyre', price: '$100', image: '/images/engine.jpg' },
    { id: 4, categoryId: 4, name: 'Sport Exhaust', price: '$200', image: '/images/engine.jpg' },
    { id: 5, categoryId: 1, name: 'Engine Oil', price: '$25', image: '/images/engine.jpg' },
    { id: 6, categoryId: 2, name: 'Brake Pads', price: '$40', image: '/images/engine.jpg' },
    { id: 7, categoryId: 3, name: 'All-Season Tyre', price: '$100', image: '/images/engine.jpg' },
    { id: 8, categoryId: 4, name: 'Sport Exhaust', price: '$200', image: '/images/engine.jpg' },
  ];

export default function CategoryListPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Products</h1>
      <div className={styles.grid}>
        {products.map((cat) => (
          <Link key={cat.id} href={`/products/${cat.id}`} className={styles.card}>
            <img src={cat.image} alt={cat.name} className={styles.image} />
            <h2>{cat.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

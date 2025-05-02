import Link from 'next/link';
import styles from '@/styles/CategoryList.module.css';

const categories = [
  { id: 1, name: 'Engine Parts', image: '/images/engine.jpg' },
  { id: 2, name: 'Brakes', image: '/images/engine.jpg' },
  { id: 3, name: 'Tyres', image: '/images/engine.jpg' },
  { id: 4, name: 'Exhaust', image: '/images/engine.jpg' },
];

export default function CategoryListPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Browse Categories</h1>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link key={cat.id} href={`/category/${cat.id}`} className={styles.card}>
            <img src={cat.image} alt={cat.name} className={styles.image} />
            <h2>{cat.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/CategoryList.module.css';

// Dummy products with categoryId and productId
const products = [
  { id: 'p1', name: 'Engine Oil', price: '$25', categoryId: 1, image: '/images/engine.jpg' },
  { id: 'p2', name: 'Piston Set', price: '$120', categoryId: 1, image: '/images/engine.jpg' },
  { id: 'p3', name: 'Brake Pads', price: '$40', categoryId: 1, image: '/images/engine.jpg' },
  { id: 'p4', name: 'Brake Discs', price: '$70', categoryId: 1, image: '/images/engine.jpg' },
  { id: 'p5', name: 'Tyre 16 inch', price: '$90', categoryId: 1, image: '/images/engine.jpg' },
  { id: 'p6', name: 'Tyre 18 inch', price: '$110', categoryId: 3, image: '/images/engine.jpg' },
  { id: 'p7', name: 'Exhaust Pipe', price: '$200', categoryId: 1, image: '/images/engine.jpg' },
  { id: 'p8', name: 'Muffler', price: '$150', categoryId: 4, image: '/images/engine.jpg' },
];

const categories = [
  { id: 1, name: 'Engine Parts' },
  { id: 2, name: 'Brakes' },
  { id: 3, name: 'Tyres' },
  { id: 4, name: 'Exhaust' },
];

export default function CategoryPage() {
  const router = useRouter();
  const { id } = router.query;

  const categoryId = Number(id);
  const category = categories.find((cat) => cat.id === categoryId);

  // Filter products matching categoryId from URL
  const filteredProducts = products.filter((p) => p.categoryId === categoryId);

  if (!category) {
    return <p style={{ padding: '2rem' }}>Category not found.</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{category.name}</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={product.name} className={styles.image} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link href={`/product/${product.id}`} className={styles.button}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

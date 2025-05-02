import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.css';

const categories = [
  { id: 1, name: 'Engines', image: '/images/engine.jpg', quantity: 120 },
  { id: 2, name: 'Brakes', image: ':/images/engine.jpg', quantity: 80 },
  { id: 3, name: 'Tires', image: '/images/engine.jpg', quantity: 60 },
];

const featuredProducts = [
  {
    id: 1,
    company: 'Yamaha',
    product: 'Brake Pads',
    image: '/images/engine.jpg',
    price: 49.99,
    
  },
  {
    id: 2,
    company: 'Honda',
    product: 'Engine Oil',
    image: '/images/engine.jpg',
    price: 29.99,
    
  },
  {
    id: 3,
    company: 'Michelin',
    product: 'Tire',
    image: '/images/engine.jpg',
    price: 99.99,
    
  },
];


export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <section className={styles.section}>
        <h2>Browse Categories</h2>
        <div className={styles.grid}>
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Featured Products</h2>
        <div className={styles.grid}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

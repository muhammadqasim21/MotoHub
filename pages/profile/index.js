import { useAuth } from '@/context/AuthContext';
import styles from '@/styles/Profile.module.css';
import { useRouter } from 'next/router';


export default function ProfilePage() {
    const { user } = useAuth();
    const router = useRouter();

  // Redirect if no user
    if (typeof window !== 'undefined' && !user) {
        router.replace('/');
        return null;
    }

  // Dummy order history (you can replace this with real data later)
  const orders = [
    { id: '1001', date: '2024-04-10', total: '$120.00', status: 'Delivered' },
    { id: '1002', date: '2024-04-05', total: '$80.00', status: 'Shipped' },
  ];

  

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Profile</h2>

      <div className={styles.section}>
        <h3>Personal Information</h3>
        <p><strong >Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      <div className={styles.section}>
        <h3>Order History</h3>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

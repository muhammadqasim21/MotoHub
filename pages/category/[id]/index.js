import { useRouter } from 'next/router';

export default function CategoryDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Category Detail Page</h1>
      <p>You are viewing category with ID: {id}</p>
      {/* Later: fetch category products using ID */}
    </div>
  );
}

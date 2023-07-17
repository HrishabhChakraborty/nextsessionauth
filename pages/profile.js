import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

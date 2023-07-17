import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Next.js Session Auth App</h1>
      <nav>
        <Link href="/login">Login</Link>
        <br/>
        <Link href="/signup">Signup</Link>
      </nav>
    </div>
  );
}
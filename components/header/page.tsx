import Link from 'next/link'

export default function Footer() {
  return (
    <main>
      <h1 className="text-6xl">header</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/team">Team</Link>
          <Link href="/join">Join</Link>
          <Link href="/product">Product</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </main>
  );
}
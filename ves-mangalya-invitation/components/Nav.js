import Link from 'next/link';
import { useRouter } from 'next/router';

const LINKS = [
  { href: '/', label: 'මුල් පිටුව' },
  { href: '/countdown', label: 'කාල ගණනය' },
  { href: '/students', label: 'ශිෂ්‍ය පරපුර' },
  { href: '/agenda', label: 'වේලාසටහන' },
  { href: '/gallery', label: 'ගැලරිය' },
  { href: '/video', label: 'දර්ශනාවලිය' },
  { href: '/venue', label: 'ස්ථානය' },
  { href: '/contact', label: 'සම්බන්ධතා' },
];

export default function Nav() {
  const router = useRouter();
  return (
    <header className="nav">
      <div className="nav-inner">
        <span className="brand">වෙස් තැබීමේ උත්සවය</span>
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={router.pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

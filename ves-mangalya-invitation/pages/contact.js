import Layout from '../components/Layout';
import Divider from '../components/Divider';

// 👉 Update names, roles and numbers here.
const CONTACTS = [
  { name: '[නම 1]', role: 'ආයතනයේ අධ්‍යක්ෂක', phone: '077 000 0000' },
  { name: '[නම 2]', role: 'නර්තන ගුරුවරයා', phone: '071 000 0000' },
  { name: '[නම 3]', role: 'සම්බන්ධීකාරක', phone: '075 000 0000' },
];

function digitsOnly(str) {
  return str.replace(/\D/g, '');
}

export default function Contact() {
  return (
    <Layout title="සම්බන්ධතා">
      <span className="eyebrow">විමසීම්</span>
      <h2 className="title">සම්බන්ධ වන්න</h2>
      <Divider />

      <div className="c-grid">
        {CONTACTS.map((c, i) => (
          <div className="c-card" key={i}>
            <div className="avatar">♥</div>
            <h3>{c.name}</h3>
            <div className="role">{c.role}</div>
            <a href={`tel:+94${digitsOnly(c.phone).slice(1)}`}>📞 {c.phone}</a>
            <a
              href={`https://wa.me/94${digitsOnly(c.phone).slice(1)}`}
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

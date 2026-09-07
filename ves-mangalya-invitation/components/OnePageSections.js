import { useEffect, useState } from 'react';
import Image from 'next/image';
import Divider from './Divider';

const EVENT_DATE = '2026-08-01T07:00:00+05:30';
const STUDENTS = [
  { name: 'Student 1', batch: '[Class / Year]', photo: '/student1.jpg' },
  { name: 'Student 2', batch: '[Class / Year]', photo: '/student2.jpg' },
  { name: 'Student 3', batch: '[Class / Year]', photo: '/student3.jpg' },
  { name: 'Student 4', batch: '[Class / Year]', photo: '/student4.jpg' },
  { name: 'Student 5', batch: '[Class / Year]', photo: '/student5.jpg' },
  { name: 'Student 6', batch: '[Class / Year]', photo: '/student6.jpg' },
  { name: 'Student 7', batch: '[Class / Year]', photo: '/student7.jpg' },
];
const  න්‍යාය පත්‍රය = [
  { time: 'ප.ව.5.30', title: 'හිතමිත්‍රාදීන් විහාරස්ථානය වෙත පැමිණීම'},
  { time: 'ප.ව.6.00', title: 'බෝධි පූජා පිංකම'},
  { time: 'ප.ව.7.00', title: 'ආභරණ පේ කිරීම'},
  { time: 'පෙ.ව.5.00', title: 'ශීර්ෂ බන්ධනය'},
  { time: 'පෙ.ව.6.30', title: 'ප්‍රථම රංගාභිෂේකය '},
  { time: 'පෙ.ව.7.30', title: 'මංගල රංගනය'},
  { time: 'පෙ.ව.8.30', title: 'ගුරු උපහාර'},
  { time: 'පෙ.ව.9.00', title: 'දේශීය සංග්‍රහය සහ උදෑසන තේ පැන් සංග්‍රහය'}
];
const PHOTOS = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
  '/gallery7.jpg',
];
const VENUE_NAME = 'සිංහපුර ශ්‍රී විජයනන්ද විහාරය';
const MAPS_QUERY = 'Singhapura Sri Vijayananda Viharaya, Sri Lanka';
const CONTACTS = [
  { name: '[Name 1]', role: 'Academy Director', phone: '077 000 0000' },
  { name: '[Name 2]', role: 'Dance Teacher', phone: '071 000 0000' },
  { name: '[Name 3]', role: 'Coordinator', phone: '075 000 0000' },
];

function getTimeLeft() {
  const diff = Math.max(new Date(EVENT_DATE).getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function digitsOnly(str) {
  return str.replace(/\D/g, '');
}

function CountdownSection() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');
  const calendarUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' +
    encodeURIComponent('Ves Ceremony') +
    '&dates=20260801T013000Z/20260801T040000Z&details=' +
    encodeURIComponent('You are invited to the Ves Ceremony.') +
    '&location=' +
    encodeURIComponent(VENUE_NAME);

  return (
    <>
      <span className="eyebrow">Time remaining</span>
      <h2 className="title">Until the auspicious moment</h2>
      <Divider />
      <div className="cd-grid">
        <div className="cd-box"><div className="num">{time ? pad(time.days) : '--'}</div><div className="lbl">Days</div></div>
        <div className="cd-box"><div className="num">{time ? pad(time.hours) : '--'}</div><div className="lbl">Hours</div></div>
        <div className="cd-box"><div className="num">{time ? pad(time.minutes) : '--'}</div><div className="lbl">Minutes</div></div>
        <div className="cd-box"><div className="num">{time ? pad(time.seconds) : '--'}</div><div className="lbl">Seconds</div></div>
      </div>
      <div className="cta-row">
        <a className="btn solid" href={calendarUrl} target="_blank" rel="noreferrer">Add to calendar</a>
      </div>
    </>
  );
}

function StudentsSection() {
  return (
    <>
      <span className="eyebrow">Honoured this year</span>
      <h2 className="title">Students Receiving Ves</h2>
      <Divider />
      <div className="s-grid">
        {STUDENTS.map((s, i) => (
          <div className="s-card" key={i}>
            <div className="photo student-photo">
              <img src={s.photo} alt={s.name} />
            </div>
            <h3>{s.name}</h3>
            <div className="batch">{s.batch}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function  න්‍යාය පත්‍රය Section() {
  return (
    <>
      <span className="eyebrow">Day program</span>
      <h2 className="title">Event  න්‍යාය පත්‍රය</h2>
      <Divider />
      <div className="timeline">
        { න්‍යාය පත්‍රය.map((item, i) => (
          <div className="t-item" key={i}>
            <div className="t-icon">{i + 1}</div>
            <div className="t-body">
              <div className="time">{item.time}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function GallerySection() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <span className="eyebrow">Memories</span>
      <h2 className="title">Gallery</h2>
      <Divider />
      <div className="g-grid">
        {PHOTOS.map((src, i) => (
          <button key={src} className="gallery-tile" onClick={() => setOpen(i)} type="button">
            <Image src={src} alt={`Gallery photo ${i + 1}`} width={520} height={520} />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <button className="lightbox-photo" onClick={() => setOpen(null)} type="button">
            <Image src={PHOTOS[open]} alt={`Gallery photo ${open + 1}`} width={900} height={900} />
          </button>
        </div>
      )}
    </>
  );
}

function VenueSection() {
  return (
    <>
      <span className="eyebrow">Directions</span>
      <h2 className="title">Venue</h2>
      <Divider />
      <div className="venue-grid">
        <div className="map-slot">
          <iframe loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`} />
        </div>
        <div className="addr-card">
          <h3>{VENUE_NAME}</h3>
          <p>[Address line 1]</p>
          <p>[Address line 2], [City]</p>
          <span className="label">Parking</span>
          <p>[Parking details here]</p>
          <div className="cta-row left">
            <a className="btn solid" href={`https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}`} target="_blank" rel="noreferrer">Get directions</a>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactSection() {
  return (
    <>
      <span className="eyebrow">Inquiries</span>
      <h2 className="title">Contact</h2>
      <Divider />
      <div className="c-grid">
        {CONTACTS.map((c, i) => (
          <div className="c-card" key={i}>
            <div className="avatar">♥</div>
            <h3>{c.name}</h3>
            <div className="role">{c.role}</div>
            <a href={`tel:+94${digitsOnly(c.phone).slice(1)}`}>{c.phone}</a>
            <a href={`https://wa.me/94${digitsOnly(c.phone).slice(1)}`} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default function OnePageSections() {
  const sections = [
    ['countdown', <CountdownSection key="countdown" />],
    ['students', <StudentsSection key="students" />],
    [' න්‍යාය පත්‍රය', < න්‍යාය පත්‍රයSection key=" න්‍යාය පත්‍රය" />],
    ['gallery', <GallerySection key="gallery" />],
    ['venue', <VenueSection key="venue" />],
    ['contact', <ContactSection key="contact" />],
  ];

  return (
    <>
      {sections.map(([id, content]) => (
        <section className="scroll-section" id={id} key={id}>
          {content}
        </section>
      ))}
    </>
  );
}

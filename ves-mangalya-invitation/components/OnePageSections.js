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
const AGENDA = [
  { time: '6.00 p.m.', title: 'Ganadevi Dance', desc: '[Description here]' },
  { time: '6.30 p.m.', title: 'Oil Lamp Lighting', desc: '[Description here]' },
  { time: '7.00 p.m.', title: 'Ves Ceremony', desc: '[Description here]' },
  { time: '7.45 p.m.', title: 'Blessing Speeches', desc: '[Description here]' },
  { time: '8.15 p.m.', title: 'Traditional Dance Performance', desc: '[Description here]' },
  { time: '9.30 p.m.', title: 'Refreshments / Dana', desc: '[Description here]' },
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
const VIDEO_SRC = '/sample.mp4';
const VENUE_NAME = 'Singhapura Sri Vijayananda Viharaya';
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
              <Image src={s.photo} alt={s.name} width={240} height={240} />
            </div>
            <h3>{s.name}</h3>
            <div className="batch">{s.batch}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function AgendaSection() {
  return (
    <>
      <span className="eyebrow">Day program</span>
      <h2 className="title">Event Agenda</h2>
      <Divider />
      <div className="timeline">
        {AGENDA.map((item, i) => (
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

function VideoSection() {
  return (
    <>
      <span className="eyebrow">Pre-shoot</span>
      <h2 className="title">Video</h2>
      <Divider />
      <div className="video-frame">
        <video controls preload="metadata" playsInline>
          <source src={VIDEO_SRC} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
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
    ['agenda', <AgendaSection key="agenda" />],
    ['gallery', <GallerySection key="gallery" />],
    ['video', <VideoSection key="video" />],
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

import { useState } from 'react';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

// 👉 Once you have real photos, put them in /public/gallery and list the
// file names here, e.g. '/gallery/photo1.jpg'. Until then this shows
// placeholder tiles.
const PHOTOS = new Array(8).fill(null);

export default function Gallery() {
  const [open, setOpen] = useState(null);

  return (
    <Layout title="ගැලරිය">
      <span className="eyebrow">මතක සටහන්</span>
      <h2 className="title">ගැලරිය</h2>
      <Divider />

      <div className="g-grid">
        {PHOTOS.map((src, i) => (
          <div
            key={i}
            className="placeholder-photo"
            onClick={() => setOpen(i)}
            role="button"
            tabIndex={0}
          >
            <span>ඡායාරූපය {i + 1}</span>
          </div>
        ))}
      </div>

      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(20,6,7,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: 30,
          }}
        >
          <div
            className="placeholder-photo"
            style={{ width: 'min(90vw,480px)', height: 'min(70vh,480px)' }}
          >
            <span>ඡායාරූපය {open + 1} — විශාල දර්ශනය</span>
          </div>
        </div>
      )}
    </Layout>
  );
}

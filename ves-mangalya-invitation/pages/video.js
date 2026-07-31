import { useState } from 'react';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

// 👉 Paste your YouTube/Vimeo video ID here once ready.
const YOUTUBE_ID = ''; // e.g. 'dQw4w9WgXcQ'

export default function VideoPage() {
  const [playing, setPlaying] = useState(false);

  return (
    <Layout title="දර්ශනාවලිය">
      <span className="eyebrow">පූර්ව රූගත කිරීම</span>
      <h2 className="title">දර්ශනාවලිය</h2>
      <Divider />

      <div className="video-frame">
        {playing && YOUTUBE_ID ? (
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
            title="Pre-shoot video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div
            className="play-btn"
            onClick={() => setPlaying(true)}
            role="button"
            tabIndex={0}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#E3C888">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
      <p style={{ textAlign: 'center', marginTop: 16, color: 'var(--ink-soft)', fontSize: '0.85rem' }}>
        {YOUTUBE_ID
          ? 'පූර්ව රූගත කිරීමේ වීඩියෝව'
          : 'YOUTUBE_ID එක pages/video.js ගොනුවේ එකතු කරන්න'}
      </p>
    </Layout>
  );
}

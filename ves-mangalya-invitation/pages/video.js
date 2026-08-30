import Layout from '../components/Layout';
import Divider from '../components/Divider';

const VIDEO_SRC = '/sample.mp4';

export default function VideoPage() {
  return (
    <Layout title="Pre-shoot Video">
      <span className="eyebrow">Pre-shoot</span>
      <h2 className="title">Video</h2>
      <Divider />

      <div className="video-frame">
        <video controls preload="metadata" playsInline>
          <source src={VIDEO_SRC} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p style={{ textAlign: 'center', marginTop: 16, color: 'var(--ink-soft)', fontSize: '0.85rem' }}>
        Pre-shoot video
      </p>
    </Layout>
  );
}

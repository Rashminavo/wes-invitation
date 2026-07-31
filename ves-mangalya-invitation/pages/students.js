import Layout from '../components/Layout';
import Divider from '../components/Divider';

// 👉 Add / remove students here — the grid updates automatically.
const STUDENTS = [
  { name: '[ශිෂ්‍ය 1]', batch: '[පංතිය / වර්ෂය]' },
  { name: '[ශිෂ්‍ය 2]', batch: '[පංතිය / වර්ෂය]' },
  { name: '[ශිෂ්‍ය 3]', batch: '[පංතිය / වර්ෂය]' },
  { name: '[ශිෂ්‍ය 4]', batch: '[පංතිය / වර්ෂය]' },
  { name: '[ශිෂ්‍ය 5]', batch: '[පංතිය / වර්ෂය]' },
  { name: '[ශිෂ්‍ය 6]', batch: '[පංතිය / වර්ෂය]' },
];

export default function Students() {
  return (
    <Layout title="ශිෂ්‍ය පරපුර">
      <span className="eyebrow">මේ වසරේ ගරු කරනු ලබන</span>
      <h2 className="title">වෙස් පැළඳීමට සුදුසුකම් ලබන ශිෂ්‍ය පරපුර</h2>
      <Divider />

      <div className="s-grid">
        {STUDENTS.map((s, i) => (
          <div className="s-card" key={i}>
            <div className="photo placeholder-photo">
              <span>ඡායාරූපය</span>
            </div>
            <h3>{s.name}</h3>
            <div className="batch">{s.batch}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

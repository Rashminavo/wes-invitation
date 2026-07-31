import Layout from '../components/Layout';
import Divider from '../components/Divider';

// 👉 Add / remove students here — the grid updates automatically.
const STUDENTS = [
  { name: '[රශ්මි ධර්මසිරිගේ]' },
  { name: '[නිර්මාණි වනසිංහ]' },
  { name: '[අමන්දි ඩයස්]' },
  { name: '[තරින්දි සේනාරත්න]' },
  { name: '[දිල්හාරා අබේසේකර]' },
  { name: '[අශාන්ති විජේසේකර]' },
  { name: '[නිමෙත ප්‍රේමචන්ද්‍ර]' },
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

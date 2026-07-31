import Layout from '../components/Layout';
import Divider from '../components/Divider';

// 👉 Edit the event program here.
const AGENDA = [
  { time: '6.00 පෙ.ව.', title: 'ගණදෙවි නැටුම', desc: '[විස්තරය මෙතන]' },
  { time: '6.30 පෙ.ව.', title: 'පහන් දැල්වීම', desc: '[විස්තරය මෙතන]' },
  { time: '7.00 පෙ.ව.', title: 'වෙස් පැළඳවීම (නැකත් වේලාව)', desc: '[විස්තරය මෙතන]' },
  { time: '7.45 පෙ.ව.', title: 'ආශිර්වාද කථා', desc: '[විස්තරය මෙතන]' },
  { time: '8.15 පෙ.ව.', title: 'සම්ප්‍රදායික නර්තන දර්ශනය', desc: '[විස්තරය මෙතන]' },
  { time: '9.30 පෙ.ව.', title: 'ආලංකාරය / දානය', desc: '[විස්තරය මෙතන]' },
];

export default function Agenda() {
  return (
    <Layout title="වේලාසටහන">
      <span className="eyebrow">දින සටහන</span>
      <h2 className="title">උත්සව වේලාසටහන</h2>
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
    </Layout>
  );
}

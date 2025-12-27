import React from 'react';
import Layout from '@theme/Layout';

const idiomData = [
  { id: "001", word: "一丘之貉", pinyin: "ㄧ ㄑㄧㄡ ㄓ ㄏㄜˊ", sense: "比喻彼此同樣低劣，並無差異。", level: "L3", note: "「貉」讀ㄏㄜˊ，非ㄌㄨㄛˋ。僅用於負面 [cite: 32, 34]。" },
  { id: "005", word: "一針見血", pinyin: "ㄧ ㄓㄣ ㄐㄧㄢˋ ㄒㄧㄝˇ", sense: "比喻說話直截了當，切中要害。", level: "L2", note: "「血」在此讀ㄒㄧㄝˇ。形容評論精準 [cite: 68, 70]。" },
  { id: "009", word: "一鳴驚人", pinyin: "ㄧ ㄇㄧㄥˊ ㄐㄧㄥ ㄖㄣˊ", sense: "比喻平時沒沒無聞，突然有驚人的表現。", level: "L2", note: "前提必須是「平時默默無聞」 [cite: 106]。" },
  // ... 這裡可依據資料庫繼續增加 [cite: 18]
];

export default function IdiomMaster() {
  return (
    <Layout title="成語大師" description="K4-K9 成語視覺化學習平臺">
      <main style={{ backgroundColor: 'var(--ghibli-canvas)', padding: '50px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h1 style={{ color: 'var(--ghibli-primary)', fontSize: '3rem' }}>成語大師</h1>
            <p>透過吉卜力的筆觸，探索指尖上的文化故事 [cite: 247]。</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
            {idiomData.map((item) => (
              <div key={item.id} className="idiom-card-container">
                <div className="idiom-card-inner">
                  <div className="idiom-card-front">
                    <h2 style={{ fontSize: '3rem', letterSpacing: '8px' }}>{item.word}</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>{item.pinyin}</p>
                  </div>
                  <div className="idiom-card-back">
                    <span style={{ backgroundColor: 'var(--ghibli-accent)', padding: '2px 10px', borderRadius: '10px', fontSize: '0.8rem' }}>{item.level}</span>
                    <h3 style={{ marginTop: '15px' }}>釋義</h3>
                    <p>{item.sense}</p>
                    <div style={{ marginTop: '10px', fontSize: '0.85rem', borderLeft: '3px solid var(--ghibli-success)', paddingLeft: '10px', textAlign: 'left' }}>
                      <strong>提醒：</strong> {item.note}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

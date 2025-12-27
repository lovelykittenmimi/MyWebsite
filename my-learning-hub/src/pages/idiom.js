import React from 'react';
import Layout from '@theme/Layout';
// 匯入剛才建立的獨立資料檔
import idiomData from '../data/idioms.json';

export default function IdiomMaster() {
  return (
    <Layout title="成語大師" description="K4-K9 成語視覺化學習平臺">
      <main style={{ backgroundColor: 'var(--ghibli-canvas)', padding: '50px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h1 style={{ color: 'var(--ghibli-primary)', fontSize: '3rem' }}>成語大師</h1>
            <p>透過吉卜力的筆觸，探索指尖上的文化故事。</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
            {idiomData.map((item) => (
              <div key={item.id} className="idiom-card-container">
                <div className="idiom-card-inner">
                  {/* 正面：Option B 視覺化模式 [cite: 12] */}
                  <div className="idiom-card-front">
                    <h2 style={{ fontSize: '3rem', letterSpacing: '8px' }}>{item.word}</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>{item.pinyin}</p>
                  </div>
                  {/* 反面：教學內容 [cite: 18] */}
                  <div className="idiom-card-back">
                    <span style={{ backgroundColor: 'var(--ghibli-accent)', padding: '2px 10px', borderRadius: '10px', fontSize: '0.8rem' }}>{item.level}</span>
                    <h3 style={{ marginTop: '15px' }}>釋義</h3>
                    <p>{item.sense}</p>
                    <div style={{ marginTop: '10px', fontSize: '0.85rem', borderLeft: '4px solid var(--ghibli-success)', paddingLeft: '10px', textAlign: 'left' }}>
                      <strong>提醒：</strong> {item.note}
                    </div>
                    <a href={item.link} target="_blank" style={{ marginTop: 'auto', fontSize: '0.7rem', color: '#176A90' }}>教育部成語典 ↗</a>
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

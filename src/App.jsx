import React, { useEffect } from 'react';
import Cover from './components/Cover';
import EditorLetter from './components/EditorLetter';
import Article from './components/Article';

function App() {
  return (
    <div className="magazine-app">
      <Cover />
      <EditorLetter />
      
      <Article 
        title="Искусство быть идеальной"
        subtitle="THE ART OF PERFECTION"
        image1="/assets/cute2.jpg"
        text1="Говорят, что идеала не существует, но каждый раз, когда я смотрю на тебя, я понимаю, что это ложь. Твоя улыбка способна осветить самый пасмурный день, а твой взгляд заставляет забыть обо всем на свете."
        quote="Ты - то самое искусство, на которое я готов смотреть вечно."
        image2="/assets/cute1.jpg"
        text2="В каждой твоей черте, в каждом движении есть та самая искра, которая делает тебя уникальной. Ты не просто красива — в тебе есть магия, которая притягивает и не отпускает."
      />

      <Article 
        title="История нашей зимы"
        subtitle="WINTER MAGIC"
        image1="/assets/winter2.jpg"
        text1="Холодный ветер, пушистый снег и твои теплые объятия. Эта зима стала особенной только потому, что рядом была ты. Помнишь те вечера, смех и снежинки в твоих волосах?"
        quote="С тобой даже самая суровая зима превращается в уютную сказку."
        image2="/assets/winter3.jpg"
        text2="Мы гуляли по заснеженным улицам, и мне казалось, что время остановилось. В такие моменты я понимаю, что самое важное — это не то, где мы находимся, а то, кто держит тебя за руку."
      />

      <Article 
        title="Секрет её очарования"
        subtitle="STYLE & CHARM"
        image1="/assets/style1.jpg"
        text1="Твой стиль — это отражение твоего внутреннего мира: утонченный, яркий и неповторимый. Ты умеешь быть разной, но всегда остаешься собой. Ты — главная муза и икона стиля для меня."
        quote="Ты делаешь этот мир красивее просто тем, что ты в нем есть."
        image2="/assets/style2.jpg"
        text2="Спасибо тебе за каждую улыбку, за каждое слово и за то, что ты делаешь меня счастливым. Этот выпуск журнала — лишь малая часть того, что я хочу тебе сказать. Я люблю тебя."
      />
      
      <footer style={{ textAlign: 'center', padding: '4rem 1rem', borderTop: '1px solid #333', marginTop: '3rem', fontSize: '0.9rem', letterSpacing: '0.1em', color: '#888' }}>
        <p>© 2026 ALTYNAI MAGAZINE. ALL RIGHTS RESERVED.</p>
        <p>CREATED WITH LOVE.</p>
      </footer>
    </div>
  );
}

export default App;

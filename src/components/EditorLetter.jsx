import React from 'react';
import './EditorLetter.css';

const EditorLetter = () => {
  return (
    <section className="section editor-letter">
      <div className="editor-header fade-in">
        <h2>Letter from the Editor</h2>
        <div className="divider"></div>
      </div>
      
      <div className="editor-content">
        <p className="drop-cap">
          Моя дорогая, этот выпуск посвящен только тебе. В мире, где каждый день происходит столько всего, для меня главной новостью, главным вдохновением и самой яркой обложкой всегда остаешься ты.
        </p>
        <p>
          Я собрал здесь моменты, которые мы пережили вместе, и твои фотографии, чтобы показать, как я вижу тебя своими глазами — как самую прекрасную, стильную и невероятную девушку. Ты — главная героиня моего романа, звезда моего глянца и любовь всей моей жизни.
        </p>
        <p>
          Пусть этот маленький журнал станет напоминанием о том, как сильно я тебя люблю и как восхищаюсь каждым твоим взглядом и улыбкой.
        </p>
        
        <div className="signature">
          <p>С любовью,</p>
          <h4>Твой преданный редактор</h4>
        </div>
      </div>
    </section>
  );
};

export default EditorLetter;

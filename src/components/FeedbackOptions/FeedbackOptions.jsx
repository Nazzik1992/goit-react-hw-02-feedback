import css from './FeedbackOptions.module.css'

export function FeedbackOptions({ positive, negative, neutral }) {
  
    return (
      <div className={css.btnContainer}>
          <button className={css.positiveBtn} onClick={positive}>Good</button>
          <button className={css.neutralBtn} onClick={neutral}>Neutral</button>
          <button className={css.badBtn} onClick={negative}>Bad</button>
    </div>
     
    );
  }
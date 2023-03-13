import css from './FeedbackOptions.module.css'

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <list className={css.btnContainer}>
      {options.map(option => {
        return (
          <item key={option}>
            <button className={css.Btn}
              type="button"
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </item>
        );
      })}
    </list>
  );
}
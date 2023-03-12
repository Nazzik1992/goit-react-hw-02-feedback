const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    if (total === 0) {
      return;
    }
    return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage || ''}% </p>
      </>
    );
  };
  
  export { Statistics };
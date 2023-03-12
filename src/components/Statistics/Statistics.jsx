import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export const  Statistics = ({title, stats}) => {
  return (
  <section className={css.statistics}>
   {title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.statList}>
    {stats.map(elem => (
    <li 
    key={elem.id}
    className={css.item}>
    
      <span className="label">{elem.label}</span><br/>
      <span className={css.percentage}>{elem.percentage}</span>
    </li>))}
  </ul>
</section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf (
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { RandomColor } from '../RandomColor/RandomColor';
    
export const Statistics = ({ title, stats }) => {
   return <section className={css.statistics}>
        {title && (<h2 className={css.title}>{title}</h2>)}
        <ul className={css.statlist}>
            {stats.map(data => (
                <li key={data.id} className={css.item} style={{ backgroundColor: RandomColor() }}>
                    <span className={css.label}>{data.label}</span>
                    <span className={css.percentage}>{data.percentage}%</span>
                </li>
            ))}
        </ul>
    </section> 
}


Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
};

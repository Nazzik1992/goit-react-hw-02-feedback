import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const  Profile = ({ 
    username, avatar, tag, location, 
    stats:{
      followers, views, likes
  }
   }) => {
    return    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="USER"
          className={css.avatar}/>
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
    
      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
    }
    
    Profile.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
          followers: PropTypes.number.isRequired,
        }).isRequired
      }
    
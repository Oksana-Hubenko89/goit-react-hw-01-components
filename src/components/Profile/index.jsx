import React from 'react';
import PropTypes from 'prop-types';
import s from './profile.module.css';
import Profile from './Profile'

import React from 'react';
import PropTypes from 'prop-types';
import s from './profile.module.css';


const Profile= ({name,tag,location,avatar, stats }  )=>{
  return(
    <div className={s.profile}>
  <div className={s.description} >
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={s.avatar} 
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>

  );
};

Profile.defaultProps={
  avatar:"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
  stats:PropTypes.objectOf(
  PropTypes.shape({
  followers:0,
  views:0,
  likes:0,
}),
  ),
};



Profile.propTypes={
  name:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats:PropTypes.shape({
    followers:PropTypes.number,
    views:PropTypes.number,
    likes:PropTypes.number,
  }),
  
};


export default Profile;
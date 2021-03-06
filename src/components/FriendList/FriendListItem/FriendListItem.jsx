import React from 'react';
import PropTypes from 'prop-types';
import s from '../friends.module.css';

function FriendListItem({avatar,name,isOnline}){
    return (
<li className={s.item} style={{ color: isOnline ? 'green' : 'red' }}>
         <span className={s.status}>{isOnline}</span>
         <img className={s.avatar} src={avatar} alt="" width="48" />
         <p className={s.name}>{name}</p>
       </li>   
    )
};
FriendListItem.propTypes={
    
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
};

export default FriendListItem;
 
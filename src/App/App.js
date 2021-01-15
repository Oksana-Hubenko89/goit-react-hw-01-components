import React from 'react'
import Profile from '../components/Profile/Profile'
import Statistics from '../components/Statistics/Statistics'
import FriendList from '../components/FriendList/FriendList'
import TransactionHistory from '../components/TransactionHistory/TransactionHistory'
import './App.css'
import user from '../Data/user.json';
import statisticalData from '../Data/statistical-data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';

function App() {
  // const image = React.createElement('img', {
  //   src:
  //     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  //   alt: 'Tacos With Lime',
  //   width: 640,
  // })

  return (
    <div className="container">
Задание 1
<Profile 
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
Задание 2
<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />
Задание 3
<FriendList friends={friends} />
Задание 4
<TransactionHistory items={transactions} />;
</div>
  );
}

export default App

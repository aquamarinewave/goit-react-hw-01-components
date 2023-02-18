import userInfo from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';


import { Container } from './Container/Container';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div>
      <Container>

        <Profile
          username={userInfo.username}
          tag={userInfo.tag}
          location={userInfo.location}
          avatar={userInfo.avatar}
          stats={userInfo.stats} />
        
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />

      </Container>
    </div>
  );
};

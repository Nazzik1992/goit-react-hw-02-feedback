import { Profile } from 'components/Profile/profile';
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from './Transaction/Transaction';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json'

export const App = () => {
  return (<div>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats} />

    <Statistics title stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </div>
  );
};

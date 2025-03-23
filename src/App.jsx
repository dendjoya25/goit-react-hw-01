import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import Profile from "./components/Profile/Profile";
import { Friendlist } from "./components/Friendlist/Friendlist";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.appContainer}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;

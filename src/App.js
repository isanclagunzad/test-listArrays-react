import styles from './App.module.css';
import classnames from 'classnames';
// External component
import { User } from './User';
// import { users } from './usersArr';

// Test 1
// function App() {
//   const names = ['Pedro', 'Jake', 'Jessica', 'Johnny'];
//   return (
//     <div className={classnames([styles.App, styles.App_header])}>
//       {
//         names.map((name, key) => {
//           return <h1>{name}</h1>
//         })
//       }
//     </div>
//   );
// }

// Test 2
function App() {
  const users = [
    { name: 'Pedro', hasJob: true },
    { name: 'Jake', hasJob: false },
    { name: 'Jessica', hasJob: true }
  ];
  return (
    <div className={classnames([styles.App, styles.App_header])}>
      {/* {
        users.map((user, key) =>
        user.hasJob && <><User name={user.name} /><br></br></>)
      } */}

      {
        users.map((user, key) => {
          return <User name={user.name} />
        })
      }
    </div>
  );
}

export default App;

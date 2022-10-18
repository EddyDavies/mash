import styles from './UserBar.module.css';

export function UserBar() {


  return (
      <div className={styles.userbar}>
           <h1>Users</h1>
           <ul>
            <li>user 1</li>
            <li>user 2</li>
            <li>user 3</li>
            <li>user 4</li>
           </ul>
      </div>
  );
}

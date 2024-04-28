import { User, users } from '@/interfaces/users';
import styles from '@/app/page.module.scss';

export default function Home() {
  return (
    <div>
      <ul>
        {users.map((user: User) => (
          <li className={styles.listItem} key={user.id}>{`${user.name} ${user.lastName}`}</li>
        ))}
      </ul>
    </div>
  );
}

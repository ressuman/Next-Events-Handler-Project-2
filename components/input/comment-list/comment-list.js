import styles from "./comment-list.module.css";

export default function CommentList({ items }) {
  return (
    <ul className={styles.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

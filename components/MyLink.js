import Link from "next/link";
import styles from "../styles/MyLink.module.css";

export default function MyLink({ text, href }) {
  return (
    <Link className={styles.Link} href={href}>
      <p>{text}</p>
    </Link>
  );
}

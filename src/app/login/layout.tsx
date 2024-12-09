import styles from "./login.module.css";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: ILayoutProps) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  );
}

import styles from "./styles.module.scss";

function Button({ className, children }) {
    return <button className={className}>{children}</button>;
  }

function MyButton() {
  return (
    <div>
      <Button className={styles.btn}>M</Button>
      <Button className={styles.btn2}> X</Button>
    </div>
  );
}

export default MyButton;

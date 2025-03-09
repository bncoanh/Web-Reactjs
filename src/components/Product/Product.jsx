import styles from "./styles.module.scss";
import Button from "../Button/Button";
import MainLayout from "@components/Layout/Layout";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";

function Product() {
  const targetDate = new Date("2025-12-31T23:59:59");
  const { container, containerItem } = styles;
  return (
    <MainLayout>
      {/* <CountdownTimer targetDate={targetDate}/> */}
      <div className={container}>
        <div className={containerItem}>
          <CountdownBanner />
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </MainLayout>
  );
}

export default Product;

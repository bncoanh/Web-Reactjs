import styles from "./styles.module.scss";
import Button from "../Button/Button";
import MainLayout from "@components/Layout/Layout";
function Banner() {
  const { container, containertext1, containertext2, containertext } = styles;
  return (
    <div className={container}>
      <MainLayout>
      <div className={containertext}>
        <div className={containertext1}>XStore Marseille04 Demo</div>
        <div className={containertext2}>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <div>
          <Button content={"Go to shop"} />
        </div>
      </div>
      </MainLayout>
    </div>
  );
}

export default Banner;

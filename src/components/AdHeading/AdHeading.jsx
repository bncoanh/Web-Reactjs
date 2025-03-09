import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
function AdHeading() {
  const { container , container1 } = styles;
  return (
      <MainLayout>
      <div className={container}>
        <h4>DON'T MISS SUPER OFFICE</h4>
        <div className={container1}>
          Our best products"
        </div>
      </div>
    </MainLayout>
  );
}

export default AdHeading;

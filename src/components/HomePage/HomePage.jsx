import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from "./styles.module.scss";
import Intro from "@components/Intro/Intro";
import AdHeading from "@components/AdHeading/AdHeading";
import Product from "@components/Product/Product";

function HomePage() {
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <MyHeader />

        <Banner />
        <Intro />
        <AdHeading />
        <Product />
      </div>
    </>
  );
}

export default HomePage;

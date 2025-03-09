import MainLayout from "@components/Layout/Layout";
import { dataIntro } from "./contrants";
import Introcard from "./IntroCard/IntroCard";
import styles from "./styles.module.scss";
function Intro({ }) {
  const { container , container1} = styles;
  return (
    <div className={container}>
      <MainLayout>
        <div className={container1}>
        <div className={container}>
          {dataIntro.map((item) => {
            return <Introcard title={item.title}  description={item.description} src={item.src}/>;
          })}
        </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Intro;

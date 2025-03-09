import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";
import logo from "@icon/image/Logo-2x.png";
import cartIcon from "@icon/svgs/cartIcon.svg";
import heartIcon from "@icon/svgs/heartIcon.svg";
import reloadIcon from "@icon/svgs/reloadIcon.svg";

function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox } =
    styles;
  return (
    <div className={containerHeader}>
      <div className={containerBox}>
        <div className={containerBoxIcon}>
          {dataBoxIcon.map((item) => {
            return <BoxIcon type={item.type} href={item.href} />;
          })}
        </div>

        <div className={containerMenu}>
          {dataMenu.slice(0, 3).map((item) => {
            return <Menu content={item.content} href={item.href} />;
          })}
        </div>
      </div>
      <div>
        <img
          src={logo}
          alt="logo"
          style={{
            marginRight: "30px",
            marginLeft: "30px",
            width: "300px",
            height: "50px",
          }}
        />
      </div>
      <div className={containerBox}>
        <div className={containerMenu}>
          {dataMenu.slice(3, dataMenu.length).map((item) => {
            return <Menu content={item.content} href={item.href} />;
          })}
        </div>
        <div className={containerBoxIcon}>
          <img width={32} src={reloadIcon} alt="reLoad" />
          <img width={32} src={heartIcon} alt="heart" />
          <img width={32} src={cartIcon} alt="cart" />
        </div>
      </div>
    </div>
  );
}

export default MyHeader;

import styles from "../styles.module.scss";
import fbIcon from "@icon/svgs/fbIcon.svg";
import insIcon from "@icon/svgs/insIcon.svg";
import ytbIcon from "@icon/svgs/ytbIcon.svg";

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;

  const handReanderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "ins":
        return insIcon;
      case "ytb":
        return ytbIcon;
    }
  };
  return (
    <div className={boxIcon}>
      <img src={handReanderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;

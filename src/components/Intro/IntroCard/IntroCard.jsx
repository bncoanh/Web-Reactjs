import styles from "../styles.module.scss";

function IntroCard({title, description, src}) {
  const { containerCard, containerContent, contentText } = styles;
  return (
    <div className={containerCard}>
      <img src={src} alt={src} />
      <div className={containerContent}>
        <h3 className={contentText}>{title}</h3>
        <p className={contentText}>{description}</p>
      </div>
    </div>
  );
}

export default IntroCard;

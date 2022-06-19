import classes from "./CustomerStory.module.scss";

const CustomerStory = (props) => {
  const imagePart = (
    <div className={classes["story__image-container"]}>
      <img
        src={props.imagePath}
        alt={props.imageAlt}
        className={classes["story__image"]}
      />
    </div>
  );

  return (
    <div className={classes["story"]}>
      {!props.even && imagePart}
      <div
        className={
          props.even
            ? classes["story__info--rightAlign"]
            : classes["story__info--leftAlign"]
        }
      >
        <h1 className={classes["story__customer"]}>{props.customer}</h1>
        <h2 className={classes["story__subtitle"]}>{props.bio}</h2>
        <p className={classes["project__text"]}>{props.children}</p>
      </div>
      {props.even && imagePart}
    </div>
  );
};

export default CustomerStory;

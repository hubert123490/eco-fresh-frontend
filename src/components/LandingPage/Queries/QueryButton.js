import classes from "./QueryButton.module.scss";

const QueryButton = (props) => {
  return (
    <button className={classes["button"]}>
      <span>
        {props.svg} {props.children}
      </span>
    </button>
  );
};

export default QueryButton;

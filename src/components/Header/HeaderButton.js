import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>{props.item}</span>
      <span></span>
      <span className={classes.span}>{props.count}</span>
    </button>
  );
};

export default HeaderButton;

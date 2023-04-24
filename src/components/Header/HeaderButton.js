import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span></span>
      <span>{props.item}</span>
    </button>
  );
};

export default HeaderButton;

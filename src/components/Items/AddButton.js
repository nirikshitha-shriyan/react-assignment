import classes from './AddButton.module.css';

const AddButton = (props) => {
  return (
    <button className={classes.button}>
      <span></span>
      <span>{props.item}</span>
    </button>
  );
};

export default AddButton;

import ShoeItem from "./ShoeItem";
import classes from "./AvailableShoes.module.css";
import shoeImage from "../../images/shoe.png";
import DisplayShoeItem from "./DisplayShoeItem";

const DUMMY_SHOES = [
  {
    id: "s1",
    name: "Sparx",
    description: "Casuals for men/women",
    price: 22.99,
    img: { shoeImage },
  },
  {
    id: "s2",
    name: "Nike",
    description: "Sneakers for men/women",
    price: 16.5,
    img: { shoeImage },
  },
  {
    id: "s3",
    name: "Puma",
    description: "Running/shoes for men/women",
    price: 12.99,
    img: { shoeImage },
  },
  {
    id: "s4",
    name: "Skechers",
    description: "Casuals for men/women",
    price: 18.99,
    img: { shoeImage },
  },
  {
    id: "s5",
    name: "Bata",
    description: "Casuals for men/women",
    price: 18.99,
    img: { shoeImage },
  },
];

const AvailableShoes = () => {
  const shoesList = DUMMY_SHOES.map((shoe) => (
    // <ShoeItem
    //   id={shoe.id}
    //   key={shoe.id}
    //   name={shoe.name}
    //   description={shoe.description}
    //   price={shoe.price}
    //   img={shoeImage}
    // />
    <DisplayShoeItem id={shoe.id}
    key={shoe.id}
    name={shoe.name}
    description={shoe.description}
    price={shoe.price}
    img={shoeImage}/>
  ));

  return (
    <section>
      <ul className={classes.ul}>{shoesList}</ul>
    </section>
  );
};

export default AvailableShoes;

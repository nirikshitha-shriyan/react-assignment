import ShoeItem from "./ShoeItem";
import classes from "./AvailableShoes.module.css";
import shoeImage from "../../images/shoe.png";
import shoeImage1 from "../../images/shoe1.jpg";
import shoeImage2 from "../../images/shoe2.jpg";
import shoeImage3 from "../../images/shoe3.jpg";
import shoeImage4 from "../../images/shoe4.jpg";
import DisplayShoeItem from "./DisplayShoeItem";

const DUMMY_SHOES = [
  {
    id: "s1",
    name: "Sparx",
    description: "Casuals for men/women",
    price: 22.99,
    img: shoeImage,
  },
  {
    id: "s2",
    name: "Nike",
    description: "Sneakers for men/women",
    price: 16.5,
    img: shoeImage1,
  },
  {
    id: "s3",
    name: "Puma",
    description: "Running/shoes for men/women",
    price: 12.99,
    img: shoeImage2,
  },
  {
    id: "s4",
    name: "Skechers",
    description: "Casuals for men/women",
    price: 18.99,
    img: shoeImage3,
  },
  {
    id: "s5",
    name: "Bata",
    description: "Casuals for men/women",
    price: 18.99,
    img: shoeImage4,
  },
];

let i= 1;
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
    <DisplayShoeItem
      id={shoe.id}
      key={shoe.id}
      name={shoe.name}
      description={shoe.description}
      price={shoe.price}
      img={shoe.img}
    />
    
  ));

  return (
    <section>
      <ul className={classes.ul}>{shoesList}</ul>
    </section>
  );
};

export default AvailableShoes;

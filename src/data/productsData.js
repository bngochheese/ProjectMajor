const images = require.context('../assets/images', false, /\.(jpg|jpeg|png|gif)$/);

const productsData = [
  {
    id: 1,
    name: "Product 1",
    price: "10000",
    image: images('./BT3 Drowsy Mocha.jpg'),
    description: "A soothing mocha shade with a drowsy finish, perfect for casual wear."
  },
  {
    id: 2,
    name: "Product 2",
    price: "20000",
    image: images('./BT5 Hush Rose.jpg'),
    description: "A soft rose shade with a gentle hue, ideal for any occasion."
  },
  {
    id: 3,
    name: "Product 3",
    price: "30000",
    image: images('./GMT1 About Fig.jpg'),
    description: "A fig-inspired color with a unique charm, stands out effortlessly."
  },
  {
    id: 4,
    name: "Product 4",
    price: "40000",
    image: images('./V1 Bloody Mary.jpg'),
    description: "A bold and vibrant Bloody Mary shade, adds a pop of color."
  },
  // {
  //   id: 5,
  //   name: "Product 5",
  //   price: "50000",
  //   image: images('./V5 Peach Crush.jpg'),
  //   description: "A fresh and lively peach shade, perfect for a sunny day out."
  // },
  {
    id: 6,
    name: "Product 6",
    price: "60000",
    image: images('./V24 Dusty Pink.jpg'),
    description: "A delicate dusty pink hue, offering a subtle elegance."
  },
  {
    id: 7,
    name: "Product 7",
    price: "70000",
    image: images('./WD1 Spring Break.jpg'),
    description: "A vibrant color that captures the essence of spring, fun and bold."
  },
  {
    id: 8,
    name: "Product 8",
    price: "80000",
    image: images('./WD2 Bitten Rose.jpg'),
    description: "A deep rose shade with a touch of sophistication, ideal for evenings."
  },
];

export default productsData;

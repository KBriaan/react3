import Img1 from "../../assets/images/Food1.png";
import Img2 from "../../assets/images/Food2.png";
import Img3 from "../../assets/images/Food3.png";
import Img4 from "../../assets/images/Food4.png";
import Img5 from "../../assets/images/Food5.png";
import Img6 from "../../assets/images/Food6.jpg";
import Img7 from "../../assets/images/Food7.jpg";
import Img8 from "../../assets/images/Food8.jpg";
import Img9 from "../../assets/images/Food9.jpg";


import { FaStar } from "react-icons/fa6";

const FoodData = [
  {
    id: 1,
    img: Img1,
    title: "Calamari",
    rating: 5.0,
    price: "$4.0",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Ribeye Steak",
    rating: 4.5,
    price: "$8.6",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Tiramisu",
    rating: 4.7,
    price: "$6.8",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Chicken Alfredo",
    rating: 4.4,
    price: "$9.0",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Greek Salad",
    rating: 4.5,
    price: "$7.9",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Shrimp Cocktail",
    rating: 4.5,
    price: "$8.8",
    aosDelay: "800",
  },
  {
    id: 7,
    img: Img7,
    title: "Cobb Salad",
    rating: 4.5,
    price: "$6.8",
    aosDelay: "800",
  },
  {
    id: 8,
    img: Img8,
    title: "Beef Bourguignon",
    rating: 4.5,
    price: "$7.5",
    aosDelay: "800",
  },
  {
    id: 9,
    img: Img9,
    title: "Shrimp Scampi",
    rating: 4.5,
    price: "$5.0",
    aosDelay: "800",
  },
];
const Menu = () => {

  return (
    
    <div id="menu">
     
      
      {/* <Navbar/> */}
      <div>
        {/* header section */}
        <div className="text-center mb-10 max-w[600px] mx-auto">
          {/* <p data-aos='fade-up' className="text-sm text-primary">Top selling Products for you</p> */}
          <h1 data-aos='fade-up' className="text-3xl font-bold">Menu for you</h1>
          <p data-aos='fade-up' className="xs text-gray-400 text-3xl">
            Make an order of your favourite dish.
          </p>
        </div>
        {/* body section */}
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
        {/* card section */}
        {FoodData.map((data) => (
          <div data-aos='fade-up'
          data-aos-delay={data.aosDelay}
          key={data.id} className="space-y-3">
            <img
              src={data.img}
              className="h-[220px] w-[180px] object-cover rounded-md"
            />
            <div>
              <h3 className="font-semibold">{data.title} </h3>
              <p className="text-sm text-gray-600">{data.price}</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <span>{data.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Menu;


//BURGERS
import burger1 from "./burgers/hamburger.png"
import burger2 from "./burgers/chickenburger.png"
import burger3 from "./burgers/veggie-burger.png"
import burger4 from "./burgers/spicy-burger.png"

//PIZZA
import pizza1 from "./pizza/pizza-margherita.png"
import pizza2 from "./pizza/pizza-capriciosa.png"
import pizza3 from "./pizza/pizza-chicken.png"
import pizza4 from "./pizza/pizza-vegetariana.png"

//PASTA 
import pasta1 from "./Pasta/pasta-bolognese.png"
import pasta2 from "./Pasta/pasta-carbonara.png"
import pasta3 from "./Pasta/pasta-spinaci.png"
import pasta4 from "./Pasta/pasta-nero.png"

//SALADS

import salad1 from "./Salads/salad-cezar.png"
import salad2 from "./Salads/salad-vege.png"
import salad3 from "./Salads/salad-hawai.png"
import salad4 from "./Salads/salad-mango.png"

//SUSHI
import sushi1 from "./Sushi/set-ohayo.png"
import sushi2 from "./Sushi/set-osaka.png"
import sushi3 from "./Sushi/set-sapporo.png"
import sushi4 from "./Sushi/set-oki.png"

const Products = [
  {
    id: "01",
    title: "Burger",
    price: 20.0,
    image01: burger1,
    category: "Burger",

    desc: "Mouthwatering perfection starts with two 100% pure beef patties and special sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese for a 100% beef burger with a taste like no other. It contains no artificial flavors, preservatives or added colors from artificial sources. ",
  },
  {
    id: "02",
    title: "Chicken Burger",
    price: 22.0,
    image01: burger2,
    category: "Burger",

    desc: "Get a little extra with toppings. Go deluxe with shredded lettuce, Roma tomatoes and mayo to take crispy, juicy and tender to the next level. The Deluxe Crispy Chicken sandwich has 530 calories.",
  },
  {
    id: "03",
    title: "Veggie Burger",
    price: 21.0,
    image01: burger3,
    category: "Burger",

    desc: "A complete novelty that many people have been waiting for. This is a delicious and juicy burger with a vegetable cutlet (with whole pieces of vegetables inside, including carrots, peas or broccoli), a slice of cheddar cheese, two slices of fresh tomato, lettuce and a creamy sandwich sauce. All this in a soft and well-baked bun sprinkled with sesame seeds. A delicious change, not only for vegetarians! The burger contains 595kcal.",
  },
  {
    id: "04",
    title: "Spicy Burger",
    price: 24.0,
    image01: burger4,
    category: "Burger",

    desc: "We also have something for fans of spicy cuisine, which is why this version of the burger is dominated by jalapeño, red onion and two delicious sauces - spicy and sandwich! The burger contains 826kcal.",
  },
  {
    id: "05",
    title: "Margherita",
    price: 20.0,
    image01: pizza1,
    category: "Pizza",

    desc: "Ingredients included in pizza : Tomato sauce and Mozzarella ",
  },
  {
    id: "06",
    title: "Capriciosa",
    price: 22.0,
    image01: pizza2,
    category: "Pizza",

    desc: "Ingredients included in pizza : Tomato sauce , Mozzarella , Prosciutto cotto (italian ham) and  champignon mushroom. ",
  },
  {
    id: "07",
    title: "Chicken",
    price: 25.0,
    image01: pizza3,
    category: "Pizza",

    desc: "Ingredients included in pizza : Tomato sauce , Mozzarella , Chicken and Corn . ",
  },
  {
    id: "08",
    title: "Vegetariana",
    price: 22.0,
    image01: pizza4,
    category: "Pizza",

    desc: "Ingredients included in pizza : Tomato sauce , Mozzarella , Champignon Mushroom , Pepper, Corn and Onion . ",
  },
  {
    id: "09",
    title: "Spaghetti Bolognese ",
    price: 26.0,
    image01: pasta1,
    category: "Pasta",

    desc: "180gr of pasta with Sauce Bolognese and Emilgrana cheese ",
  },
  {
    id: "10",
    title: "Spaghetti Carbonara ",
    price: 26.0,
    image01: pasta2,
    category: "Pasta",

    desc: "180gr of pasta with Bacon , Egg yolk , Cream cheese , Cream , Parsley , Garlic and Onion. ",
  },
  {
    id: "11",
    title: "Tagliatelle e Spinnaci",
    price: 26.0,
    image01: pasta3,
    category: "Pasta",

    desc: "180gr of pasta with Chcicken ,Gorgonzola ,Spinach leaves, Emilgrana cheese , Onion , Garlic and Cream Sauce.  ",
  },
  {
    id: "12",
    title: "Tagliatelle e Gamberi",
    price: 26.0,
    image01: pasta4,
    category: "Pasta",

    desc: "180gr of pasta with  Shrimps , Cheery tomatoes , Zucchini , Garlic , Pepperoni , Parsley and Wine-Butter sauce.  ",
  },
  {
    id: "13",
    title: "Salad Cezar",
    price: 26.0,
    image01: salad1,
    category: "Salad",

    desc: "Salad mix with a Chicken , Egg , Becon , Cherry Tomatoes , Croutons and Vegan aioli dressing. ",
  },
  {
    id: "14",
    title: "Salad Vege",
    price: 29.0,
    image01: salad2,
    category: "Salad",

    desc: "Salad mix with a Spinach, Tofu, Chickpeas, Roasted beetroot, Kale, Sun-dried tomatoes, Peppers, Mixed seeds, Millet falafel and Green goddess dressing. ",
  },
  {
    id: "15",
    title: "Salad Hawai",
    price: 29.0,
    image01: salad3,
    category: "Salad",

    desc: "Salad mix with a , Chilli chicken, Fresh pineapple, Cheese, Cucumber, Cherry tomatoes, Croutons and Honey-mustard dressing. ",
  },
  {
    id: "16",
    title: "Salad Mango",
    price: 29.0,
    image01: salad4,
    category: "Salad",

    desc: "Salad mix with a , Avocado, Mango, Salmon, Cucumber, Edamame, Quinoa, Sugar Snap peas, Mint and  Roasted onion ",
  },
  {
    id: "17",
    title: "Ohayo Set",
    price: 40.0,
    image01: sushi1,
    category: "Sushi",

    desc: " Set with 8 uramaks with raw salmon and tuna 6 futomaks with raw salmon",
  },
  {
    id: "18",
    title: "Osaka Set",
    price: 40.0,
    image01: sushi2,
    category: "Sushi",

    desc: " Set with 6 futomaki with tempura eel, 6 futomaki with tempura shrimp and crispy panko , 6 hosomaki with tempura with boiled shrimp",
  },
  {
    id: "19",
    title: "Sapporo Set",
    price: 40.0,
    image01: sushi3,
    category: "Sushi",

    desc: " Set with 4 california roll, 4 rainbow maki with salmon, 4 rainbow maki with shrimp",
  },
  {
    id: "20",
    title: "Oki Set",
    price: 50.0,
    image01: sushi4,
    category: "Sushi",

    desc: " Set with 6 futomaki grilled salmon, 4 uramaki raw salmon, 6 vegetable hosomaki, 4 uramaki surimi, 6 hosomaki (3x raw salmon, 3x grilled salmon), 4 nigiri (raw salmon, fired salmon, tamago, avocado)",
  },
];

export default Products;

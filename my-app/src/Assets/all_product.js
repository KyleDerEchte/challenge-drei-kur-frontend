import Damen_Hoodie_rot from "../Assets/Damen_Hoodie_Rot_new.webp"
import Unisex_Hoodie_Blau from "../Assets/Hoodie_Blau_new.webp"
import Hoodie_Schwarz from "../Assets/54f468460a1246af9209a7a4b59211f2.jpg_new.webp"
import Damen_Hoodie_Gelb from "../Assets/Hoodie_Gelb_new.webp"
import hoodie_Grau from "../Assets/Hoodie_grau_new.webp"
import Rosa from "../Assets/Kinder_hoodie_rosa_new.webp"
import Tweiß from "../Assets/Herren_Tshirt_weis_new.webp"
import Tlila from "../Assets/Damen_Tshirt_Lila_new.webp"
import O from "../Assets/Unisex_T-shirt_orange_new.webp"
import G from "../Assets/Kinder_Tshirt_Grun_new.webp"
import im1_img from "./cooldude.jpg";
import p2_img from "./cooldude2.jpg";
import p3_img from "./cooldude3.jpg";
import p4_img from "./cooldude4.jpg";


let all_product = [
  {
    id: 11,
    name: "Damen Hoodie ROT",
    size: "M",
    costs: 25.00,
    price: 35.99,
    image: Damen_Hoodie_rot,
    productType : {"name": "hoodie"},
    color: {"color": "Rot"},
    materialType: [{"material":"Baumwolle"}]
  },
  {
    id: 12,
    name: "Unisex Hoodie BLAU",
    size: "L",
    costs: 30.00,
    price: 45.00,
    image: Unisex_Hoodie_Blau,
    productType: {"name": "hoodie"},
    color: {"color": "Blau"},
    materialType: [{"material":"Polyester"}]
  },
  {
    id: 13,
    name: "Herren Hoodie SCHWARZ",
    size: "XL",
    costs: 28.50,
    price: 50.00,
    image: Hoodie_Schwarz,
    productType: {"name": "hoodie"},
    color: {"color": "Schwarz"},
    materialType: [{"material":"Baumwolle-Polyester-Mix"}]
  },
  {
    id: 14,
    name: "Damen Hoodie GELB",
    size: "S",
    cost: 22.00,
    price: 32.99,
    image: Damen_Hoodie_Gelb,
    productType: {"name": "hoodie"},
    color: {"color": "Gelb"},
    materialType: [{"material":"Viskose"}]
  },
  {
    id: 15,
    name: "Unisex Hoodie GRAU",
    size: "M",
    cost: 27.00,
    price: 37.50,
    image: hoodie_Grau,
    productType: {"name": "hoodie"},
    color: {"color": "Grau"},
    materialType: [{"material":"Wolle"}]
  },
  {
    id: 16,
    name: "Kinder Hoodie ROSA",
    size: "XS",
    cost: 20.00,
    price: 29.99,
    image: Rosa,
    productType: {"name": "hoodie"},
    color: {"color": "Rosa"},
    materialType: [{"material":"Baumwolle"}]
  },
  {
    id: 17,
    name: "Herren T-Shirt WEIß",
    size: "L",
    costs: 15.00,
    price: 19.99,
    image: Tweiß,
    productType: {"name": "t-shirt"},
    color: {"color": "Weiß"},
    materialType: [{"material":"Baumwolle"}]
  },
  {
    id: 18,
    name: "Damen T-Shirt LILA",
    size: "M",
    costs: 13.50,
    price: 18.00,
    image: Tlila,
    productType: {"name": "t-shirt"},
    color: {"color": "Lila"},
    materialType: [{"material":"Polyester"}]
  },
  {
    id: 19,
    name: "Unisex T-Shirt ORANGE",
    size: "S",
    costs: 14.00,
    image: O,
    price: 20.00,
    productType: {"name": "t-shirt"},
    color: {"color": "Orange"},
    materialType: [{"material":"Baumwolle-Polyester-Mix"}]
  },
  {
    id: 110,
    name: "Kinder T-Shirt GRÜN",
    size: "XS",
    costs: 12.00,
    price: 15.99,
    image: G,
    productType: {"name": "t-shirt"},
    color: {"color": "Grün"},
    materialType: [{"material":"Viskose"}]
  },
    
    ]
  

export default all_product;

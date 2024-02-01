import im1_img from "./cooldude.jpg"
import p2_img from './cooldude2.jpg'
import p3_img from './cooldude3.jpg'
import p4_img from './cooldude4.jpg'
import Damen_Hoodie_rot from "./Damen_Hoodie_Rot_new.webp";
import Unisex_Hoodie_Blau from "./Hoodie_Blau_new.webp";
import Hoodie_Schwarz from "./54f468460a1246af9209a7a4b59211f2.jpg_new.webp";
import Damen_Hoodie_Gelb from "./Hoodie_Gelb_new.webp";

let data_product = [
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
];

export default data_product;

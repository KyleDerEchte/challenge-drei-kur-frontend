import im1_img from "./cooldude.jpg"
import p2e_img from './cooldude2.jpg'
import p3e_img from './cooldude3.jpg'
import p4e_img from './cooldude4.jpg'
import hoodie_1 from "./hoodie_2.jpg"
import hoodie_2 from "./hoodie_3.jpg"
import hoodie_3 from "./hoodie_4.jpg"
import hoodie_4 from "./hoodie_5.jpg"
import hoodie_5 from "./hoodie_6.jpg"
import hoodie_6 from "./hoodie_7.jpg"


let all_product = [
  {
    id: 11,
    name: "Damen Hoodie ROT",
    size: "M",
    costs: 25.00,
    price: 35.99,
    image: hoodie_4,
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
    image: hoodie_3,
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
    image: hoodie_2,
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
    image: hoodie_1,
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
    image: hoodie_5,
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
    image: hoodie_6,
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
    image: im1_img,
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
    image: p2e_img,
    productType: {"name": "t-shirt"},
    color: {"color": "Lila"},
    materialType: [{"material":"Polyester"}]
  },
  {
    id: 19,
    name: "Unisex T-Shirt ORANGE",
    size: "S",
    costs: 14.00,
    image: p3e_img,
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
    image: p4e_img,
    productType: {"name": "t-shirt"},
    color: {"color": "Grün"},
    materialType: [{"material":"Viskose"}]
  }
    
    ]
  

export default all_product;

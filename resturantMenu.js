let Foodlist = [
  {
    type: "lunch",
    img: "pic/lunch/Tuna-Melt-on-Cornbread_EXPS_CIBZS20_31376_B01_07_4b-1.jpg",
    name: "TUNA MELT",
    price: 90,
    reciepts: " for the mollitia voluptates aliquam doloremque?",
  },
  {
    type: "lunch",
    img: "pic/lunch/14.-Meatballs-n-sauce.width-320.jpg",
    name: "MEATBALLS",
    price: 90,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, doloribus exercitationem",
  },
  {
    type: "lunch",
    img: "pic/lunch/Sweet-Macaroni-Salad_EXPS_HCA18_23228_C03_14_6b-3-e1721151851571.jpg",
    name: "MACARONI SALAD",
    price: 90,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. provident porro, et aperiam quo vel quae officiis.",
  },
  {
    type: "lunch",
    img: "pic/lunch/22.-Super-savoury-rice.width-320.jpg",
    name: "SAVOURY RICE",
    price: 90,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequuntur delectus magnam quisquam!",
  },
  {
    type: "lunch",
    img: "pic/lunch/Tuna-Melt-on-Cornbread_EXPS_CIBZS20_31376_B01_07_4b-1.jpg",
    name: "DILLY CHICKPEA SALAD SANDIWICHES",
    price: 90,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequuntur delectus magnam quisquam!",
  },
  {
    type: "lunch",
    img: "pic/lunch/14.-Meatballs-n-sauce.width-320.jpg",
    name: "VEGETABLE CHILLI",
    price: 90,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequuntur delectus magnam quisquam!",
  },
  {
    type: "lunch",
    img: "pic/lunch/Chunky-Chicken-Salad-with-Grapes-and-Pecans_EXPS_FT19_152167_F_1218_1-1.jpg",
    name: "CHUNKY CHICKEN SALAd",
    price: 90,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequuntur delectus magnam quisquam!",
  },
  {
    type: "lunch",
    img: "pic/lunch/Grilled-Steak-Bruschetta-Salad-for-2_EXPS_CF2BZ20_46392_B12_06_2b-1.jpg",
    name: "GRILLED STEAK BRUSCHETTA",
    price: 90,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequuntur delectus magnam quisquam!",
  },
  {
    type: "breakfast",
    img: "pic/breakfast/bacon , eggs and cheese.jpeg",
    name: "bacon , eggs and cheese",
    price: 90,
    reciepts: "this for the mollitia voluptates aliquam doloremque?",
  },
  {
    type: "breakfast",
    img: "pic/breakfast/banana-oat-and-blueberry-breakfast-smoothie.webp",
    name: "banana,oat,and blueberry breakfast smoothie",
    price: 90,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, doloribus exercitationem.",
  },
  {
    type: "breakfast",
    img: "pic/lunch/Sweet-Macaroni-Salad_EXPS_HCA18_23228_C03_14_6b-3-e1721151851571.jpg",
    name: "MACARONI SALAD",
    price: 90,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. provident porro, et aperiam quo vel quae officiis.",
  },
  {
    type: "breakfast",
    img: "pic/breakfast/strawberry-milk-.jpg",
    name: " strawberry milk",
    price: 80,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequuntur delectus magnam quisquam!",
  },
  {
    type: "breakfast",
    img: "pic/breakfast/Virgin-Mimosa.jpg",
    name: "Virgin Mimosa",
    price: 70,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequuntur delectus magnam quisquam!",
  },
  {
    type: "dinner",
    img: "pic/breakfast/bacon-eggs-and-cheese",
    name: "bacon , eggs and cheese",
    price: 20,
  },
  {
    type: "dinner",
    img: "./pic/breakfast/banana-oat-and-blueberry-breakfast-smoothie.webp",
    name: "banana,oat,and blueberry breakfast smoothie",
    price: 14,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, doloribus exercitationem.",
  },
  {
    type: "dinner",
    img: "pic/lunch/Sweet-Macaroni-Salad_EXPS_HCA18_23228_C03_14_6b-3-e1721151851571.jpg",
    name: "MACARONI SALAD",
    price: 12,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. provident porro, et aperiam quo vel quae officiis.",
  },
  {
    type: "dinner",
    img: "pic/breakfast/strawberry-milk-.jpg",
    name: "strawberry milk",
    price: 6,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequuntur delectus magnam quisquam!",
  },
  {
    type: "dinner",
    img: "pic/breakfast/Virgin-Mimosa.jpg",
    name: "irgin Mimosa",
    price: 13,
    reciepts:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequuntur delectus magnam quisquam!",
  },
];
let lunchDetails = document.getElementById("lunchDetails");
let listButtons = document.getElementById("listButtons");

window.addEventListener("DOMContentLoaded", function () {
 displayMenuItems(Foodlist); 
});
function displayMenuItems(menuitems){
  let filterdFoodlist = menuitems.map(function (food) {
    return `<div class="food" id="foodDetails">
                <div class="dishPicture">
                    <img src=${food.img}>
                </div>
                <div class="dishDetails" >
                    <div class="NameAndPrice">
                    <h2 class="name">${food.name} </h2>
                    <h2 class="price">$${food.price}</h2>
                    </div>
                    <p id="receipts" class="recipts">
                    ${food.reciepts}
                    </p>
                </div>
            </div>
            `
  });

  
  filterdFoodlist = filterdFoodlist.join("");
  lunchDetails.innerHTML = filterdFoodlist;
}
listButtons.addEventListener("click",function(event){
  if(event.target.id==="all"){
    displayMenuItems(Foodlist) ;
    console.log(displayMenuItems(Foodlist));
  }
  else {
    if(event.target.id==="lunch"){
     let lunchfood=Foodlist.filter(function(viewfood){
        return viewfood.type==="lunch";
     });
     console.log(displayMenuItems(lunchfood));
     displayMenuItems(lunchfood);
    }
    else if(event.target.id==="dinner"){
      let lunchfood=Foodlist.filter(function(viewfood){
         return viewfood.type==="dinner";
      });
      console.log(displayMenuItems(lunchfood));
      displayMenuItems(lunchfood);
     }
     else if(event.target.id==="shakes"){
      let lunchfood=Foodlist.filter(function(viewfood){
         return viewfood.type==="shakes";
      });
      console.log(displayMenuItems(lunchfood));
      displayMenuItems(lunchfood);
     }
     else if(event.target.id==="breakfast"){
      let lunchfood=Foodlist.filter(function(viewfood){
         return viewfood.type==="breakfast";
      });
      console.log(displayMenuItems(lunchfood));
      displayMenuItems(lunchfood);
     }
  }
})


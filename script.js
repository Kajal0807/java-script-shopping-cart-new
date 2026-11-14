const itemArray = [
    {id:1,
    image: "laptop.jpg",
     name: "Laptop",
     price: 45000,
     button: "Add to Cart"
    },

    {id:2,
     image: "iphone.jpg",
     name: "iphone X",
     price: 80000,
     button: "Add to Cart"
    },

    {id:3,
     image: "ipad-pro.webp",
     name: "iPad Pro",
     price: 30000,
     button: "Add to Cart"
    },

    {id:4,
    image: "samsung-galaxy.webp",
     name: "Samsung Galaxy",
     price: 35000,
     button: "Add to Cart"
    },

    {id:5,
    image: "vivo y18t.webp",
     name: "Vivo Y18t",
     price: 10000,
     button: "Add to Cart"
    },

    {id:6,
    image: "mouse.jpg",
     name: "Mouse",
     price: 1000,
     button: "Add to Cart"
    },

    {id:7,
    image: "Keyboard.webp",
     name: "Keyboard",
     price: 5000,
     button: "Add to Cart"
    },

    {id:8,
    image: "milton bottle.jpg",
     name: "Milton Water Bottle",
     price: 1200,
     button: "Add to Cart"
    },

    { id:9,
     image: "earbuds.jpg",
     name: "Wireless Earbuds",
     price: 1000,
     button: "Add to Cart"
    },

    {id:10,
     image: "smart-watch.jpg",
     name: "Smart Watch",
     price: 1500,
     button: "Add to Cart"
    },
    
]

let cartArray =[];

const itemCard = itemArray.map((item)=>{
    const card = document.createElement("div")
    card.classList.add("card");
    card.dataset.id = item.id;
    card.dataset.image = item.image;
    card.dataset.name = item.name;
    card.dataset.price = item.price;
    card.innerHTML = `<img src= "${item.image}" >
                       <h3>${item.name}</h3>
                       <p>Price: <strong>${item.price}</strong> </p>
                       <button class="add-to-cart">${item.button}</button>`;
    return card;                  
})

const cardContainer = document.querySelector(".card-container");
itemCard.forEach((card)=>{
    cardContainer.append(card);
})

cardContainer.addEventListener('click',(event)=>{
   const targetBtn =  event.target.closest(".add-to-cart");
   if(targetBtn){
  const card=  event.target.closest(".card");
   const image = card.dataset.image;
    const name = card.dataset.name;
    const price = card.dataset.price;
    const id = card.dataset.id;

    const Product = {
        id:id,
        image: image,
        name: name,
        price: price,
    };
   cartArray.push(Product); 

    showCart();
   
}
});


function createCartBox(element){
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
   cartBox.setAttribute("id",element.id);
    cartBox.innerHTML = `   <img src = "${element.image}">;
                            <h3>${element.name}</h3>
                            <strong>&#8377;${element.price}</strong>
                            <button class="remove-cart-btn">❌</button`;
    return cartBox;
}
const cartContainer = document.querySelector(".cart-container");
const cartItem = document.querySelector(".cart-item");

function showCart(){
   cartItem.innerHTML= "";
   cartArray.forEach((element)=>{
    const cartBox = createCartBox(element);
    cartItem.appendChild(cartBox)
   })

   const cartTotal = document.querySelector(".cart-total");
   cartTotal.innerHTML = "";
   const totalBox = createTotal();
cartTotal.appendChild(totalBox);

   const count = document.querySelector("#count");
   count.textContent = cartArray.length;
}
  
const icon = document.querySelector(".cart-icon");

icon.addEventListener('click',()=>{
    cartContainer.hidden = !cartContainer.hidden;
});

function createTotal(){
    const totalPrice = cartArray.reduce((sum,num)=>{
    return sum + Number(num.price);
},0);

    const total = document.createElement("div");
    total.classList.add("total");
    total.innerHTML = `<h3>Total</h3>
                        <strong>&#8377;${totalPrice}</strong>`;
    return total
}

cartItem.addEventListener('click',(event)=>{
     const removeBtn = event.target.closest(".remove-cart-btn");
         if(removeBtn){
            const cartBox = removeBtn.closest(".cart-box");
         const id = cartBox.id;
        
         cartArray = cartArray.filter((element)=>{
          if(element.id!== id){
            return true;
          }
          else{
            return false;
          }
          
         })
         showCart();
         }
   
     
     
      
})

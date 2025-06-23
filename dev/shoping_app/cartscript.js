 const cartheading=document.getElementById("cartheading");
        const clearcart=document.getElementById("clear");
 
 const cartDisplay = document.getElementById("cartitems");
   const grandtotal=document.getElementById("displaytotal");
    // Get cart items from localStorage
    const mycart = JSON.parse(localStorage.getItem("cart")) ;
    
    let sumoftotal=0;

    if ( localStorage.length===0) {
      cartheading.innerHTML="";
      cartDisplay.innerHTML = `<p id="empty">Cart is empty</p>`;
    } else {
      mycart.forEach((item) => {
        cartDisplay.innerHTML += `
         <hr>
                <div id="cartitems">
                    <div id="itemdetails">
                      <h2>${item.name}</h2>
                      <div>${item.price}$  (per pice) </div>
                      <div id="quantity">${item.quantity}</div>
                    </div>  
                    <div class="total">Total: ${(item.quantity)*(item.price)}</div>
                </div>`
                sumoftotal=sumoftotal+((item.price)*(item.quantity));
      });
     
    }
  
  grandtotal.textContent=`${sumoftotal}`;






   //script for clear cart
        
        clearcart.addEventListener("click",()=>{
            cartheading.innerHTML="";
              cartDisplay.innerHTML = `<p id="empty">Cart is empty</p>`;
          localStorage.clear();
        });
    
        //script for procced to buy button
        const buybutton=document.getElementById("buy");
      
             buybutton.addEventListener("click",()=>{
              const c= cartheading.textContent
                if(c===""){
                  alert("cart is empty");
                }else{
                   cartheading.innerHTML="";
                   cartDisplay.innerHTML = `<p id="empty">Cart is empty</p>`;
                   window.open("./checkout.html","self");
                }
        })
        
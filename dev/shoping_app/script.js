


let cart=[];



const btns=document.querySelectorAll(".btn");
for(let btn of btns ){
         if(localStorage.length!==0 && cart.length===0){
                   cart = JSON.parse(localStorage.getItem("cart")) ;
                }

    btn.addEventListener("click",function(){
        const item=btn.parentElement.parentElement;
        console.log(item);

        const price=item.childNodes[5].childNodes[1].textContent;
        const name=item.childNodes[3].textContent;  
        const quantity=1;
        
         
         
        let check=0,j;
        for(let i=0;i<cart.length;i++){
                if(cart[i].name==name){
                    check++;
                    j=i;
                }
        }

         if(check==0){
                const obj={
                 'name':name,
                  'price':price,
                 'quantity':quantity
                }
              cart.push(obj);
    // Store in localStorage to persist to cart page
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
         }else if(check>0){
               cart[j].quantity++;
    // Store in localStorage to persist to cart page
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
         }
        
        console.log(cart);
        
     
    })
   
}





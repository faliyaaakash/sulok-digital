
let works=[];


function update(){
    const inputbox=document.querySelector("#inputbox");
    const inputwork=inputbox.value;
    if(inputwork==="" || inputwork===" "){
        inputbox.value="";
        alert("please enter the work");
        return;
    }

    function checkwork(element){
        return element.name===inputwork;
    }
    const checkvalue=works.some(checkwork);
    if(checkvalue===true){
        inputbox.value="";
         alert("this work aleredy exist");
         return;
    }else{
        let temp={
            name:inputwork,
            status:"unchecked"
        }
        works.push(temp);
        Showworks();
    }
    inputbox.value="";

    console.log(works);
//     const liinputnodelsit=document.getElementsByClassName(".checkbox");
// console.log(liinputnodelsit);
    
Showworks();
}


//function for to display a works on any updates according to it's object
function Showworks(){
    const todolist=document.querySelector(".Todo-list");
       todolist.innerHTML="";

       

       for(let work of works){
                 
           const newTodoItem = document.createElement("li");
              newTodoItem.setAttribute("class","list-item");
          const  Inputelement=document.createElement("input");
           const labelelement=document.createElement("label");
               Inputelement.setAttribute("type","checkbox");   
               Inputelement.setAttribute("class","checkbox");
               labelelement.textContent=work.name;
           const closeelement=document.createElement("span");
           closeelement.setAttribute("class","material-symbols-outlined close");
           closeelement.textContent="close";
           

           //event listner for close icon
            closeelement.addEventListener("click",()=>{
               works = works.filter((value) => value.name !== work.name);
               Showworks();

            })


           //eventlistner for checkbox
        Inputelement.addEventListener("change",()=>{
             if(work.status==="unchecked"){
                work.status="checked";
             }else{
                work.status="unchecked";
             }

           

             if(work.status==="checked"){
                labelelement.style.textDecoration="line-through";
                newTodoItem.style.backgroundColor="rgb(132, 132, 132)"
             }else{
                labelelement.style.textDecoration="none";
                newTodoItem.style.backgroundColor="white";
             }
       })

        if(work.status ==="checked"){
            Inputelement.checked = true;
            labelelement.style.textDecoration="line-through";
             newTodoItem.style.backgroundColor="rgb(132, 132, 132)"
        }else{
             labelelement.style.textDecoration="none";
             newTodoItem.style.backgroundColor="white";
        }

        newTodoItem.append(Inputelement);
     newTodoItem.append(labelelement);
      newTodoItem.append(closeelement);
     todolist.append(newTodoItem);

      
}
   
}


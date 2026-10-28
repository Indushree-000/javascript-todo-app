let inp = document.querySelector("#task");
let taskbtn = document.querySelector("button");
let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");
taskbtn.addEventListener ("click", function(){
   let item = document.createElement("li");
   item.innerText = inp.value;

   let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);

   ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click",function(event){
    // console.log(event.target.nodeName);  //gives the targeted element name triggering the event
    if (event.target.nodeName == "BUTTON"){
        let delitem = event.target.parentElement;
        delitem.remove();
    }
    
   
})


// this is not used becoz of event delegation i.e., for new list items delete will not work
// let delbtns = document.querySelectorAll(".delete");
// for (let btns of delbtns){
//     btns.addEventListener("click",function(){
//         let par = btns.parentElement;
//         par.remove();
// })
// }


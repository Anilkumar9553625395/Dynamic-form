const addBtn=document.querySelector(".add");
const input=document.querySelector(".ainput");


function removeInput(){
    this.parentElement.remove();
  }

function addInput(){
 
    const name=document.createElement("input");
    name.type="text";
    name.placeholder="Enter your name";

    const email=document.createElement("input");
    email.type="email";
    email.placeholder="Enter your email";
    

const btn=document.createElement("button");
btn.className="delete";
btn.innerHTML="&times";

const flex=document.createElement("div");
    flex.className="flex";

input.appendChild(flex);
flex.appendChild(name);
flex.appendChild(email);
flex.appendChild(btn);


btn.addEventListener("click",removeInput);
    
}


addBtn.addEventListener("click",addInput);
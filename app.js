let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");

document.addEventListener("click",function(event){
    // console.log(event.target.innerText);
    switch(event.target.innerText){
        case 'C':{
            box2.innerText=" ";
            box1.innerText=" ";
            break;
        }
        case '<-':{
            if(box2.innerText){
                box2.innerText=box2.innerText.slice(0,-1);
            }
            break;
        }
        case '=':{
            box1.innerText=box2.innerText;
            box2.innerText=" ";
                try{
                    box2.innerText=eval(box1.innerText);
                }
                catch{
                    box2.innerText="error";
                }
                break;
        }
        default:{
            box2.innerText=box2.innerText+event.target.innerText;
        }

    }

})
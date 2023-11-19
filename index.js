let inputbox=document.getElementById("inputbox")
let buttons=document.querySelectorAll("button")

let string="";
let arr =Array.from(buttons)
arr.forEach(element =>{
    element.addEventListener('click',(b)=>{
        if(b.target.innerText == '='){
            string=String(eval(string))
            inputbox.value=string;
        }
        else if(b.target.innerHTML == 'AC'){
            string=''
            inputbox.value=string;
        }
        else if(b.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1)
            inputbox.value=string;
        }
        else{
            string+=b.target.innerText
            inputbox.value=string
        }
    })
})
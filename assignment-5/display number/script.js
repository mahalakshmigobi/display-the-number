function Displaynum(){


let starting_num=parseInt(prompt("enter your starting number"));
let ending_num=parseInt(prompt("enter your ending number",0));


for(starting_num=starting_num;starting_num<=ending_num;starting_num++)
    {
    console.log("Display the number",+starting_num);
}
}

const number = document.getElementById("click-btn");
console.log(number);

number.addEventListener("click",Displaynum);
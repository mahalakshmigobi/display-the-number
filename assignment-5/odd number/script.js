
function getnumber() {

    let starting_num=parseInt(prompt("enter your starting number"));
    let ending_num=parseInt(prompt("enter your ending number",0));
    // let i=1;
    while(starting_num<=ending_num){
        if(starting_num%2!==0){
            console.log("Display the odd number",+starting_num);
           

  }
        starting_num++;
    }
     
}
alert("hey checkout console");

    
 // referring elements//
   

const number = document.getElementById("click-btn");
console.log(number);

number.addEventListener("click",getnumber);


   
   
   